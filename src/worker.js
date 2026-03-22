const FX_USD_ESTIMATE = {
  USD: 1,
  EUR: 1.09,
  IQD: 0.00076,
};

function corsHeaders(extra = {}) {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "Content-Type, Authorization",
    ...extra,
  };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      ...corsHeaders(),
      "content-type": "application/json; charset=utf-8",
    },
  });
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

function normalizeString(value, max = 500) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function getClientIp(request) {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for") ||
    "unknown"
  );
}

function badRequest(message, status = 400) {
  return json({ ok: false, error: message }, status);
}

function estimateUsd(amount, currency) {
  const rate = FX_USD_ESTIMATE[currency] || 1;
  return Number(amount || 0) * rate;
}

async function handleCreateReport(request, env) {
  if (!env.DB) return badRequest("D1 database binding (DB) is missing.", 500);

  const body = await readJson(request);
  if (!body) return badRequest("JSON ارسالی نامعتبر است.");
  if (normalizeString(body.website, 200)) return badRequest("Spam detected.", 400);

  const now = Date.now();
  const pageLoadedAt = Number(body.page_loaded_at || 0);
  if (!Number.isFinite(pageLoadedAt) || now - pageLoadedAt < 2500) {
    return badRequest("ارسال فرم بیش از حد سریع بود.", 400);
  }

  const payer_contact = normalizeString(body.payer_contact, 120);
  const country = normalizeString(body.country, 120);
  const display_name = normalizeString(body.display_name, 200);
  const note = normalizeString(body.note, 2000);
  const currency = normalizeString(body.currency, 10).toUpperCase();
  const build_version = normalizeString(body.build_version, 50);
  const amount = Number(body.amount);
  const agent_id = Number(body.agent_id);

  if (!country) return badRequest("کشور الزامی است.");
  if (!Number.isFinite(amount) || amount <= 0) return badRequest("مبلغ نامعتبر است.");
  if (![1, 2].includes(agent_id)) return badRequest("وکیل انتخابی نامعتبر است.");
  if (!FX_USD_ESTIMATE[currency]) return badRequest("ارز پشتیبانی نمی‌شود.");

  const ip = getClientIp(request);
  void ip;

  await env.DB.prepare(
    `INSERT INTO reports
    (payer_contact, country, display_name, note, amount, currency, agent_id, build_version, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
  )
    .bind(payer_contact, country, display_name, note, amount, currency, agent_id, build_version)
    .run();

  return json({ ok: true, message: "گزارش با موفقیت ثبت شد." });
}

async function handleGetReports(request, env) {
  if (!env.DB) return badRequest("D1 database binding (DB) is missing.", 500);

  const url = new URL(request.url);
  const limitRaw = Number(url.searchParams.get("limit") || 20);
  const limit = Math.max(1, Math.min(100, limitRaw));

  const result = await env.DB.prepare(
    `SELECT
      id, payer_contact, country, display_name, note, amount, currency, agent_id, build_version, created_at,
      ROUND(amount * CASE currency WHEN 'USD' THEN 1 WHEN 'EUR' THEN 1.09 WHEN 'IQD' THEN 0.00076 ELSE 1 END, 2) as amount_usd_estimate
    FROM reports
    ORDER BY datetime(created_at) DESC, id DESC
    LIMIT ?`
  ).bind(limit).all();

  return json(result.results || []);
}

async function handleGetCountries(env) {
  if (!env.DB) return badRequest("D1 database binding (DB) is missing.", 500);

  const result = await env.DB.prepare(
    `SELECT
      country,
      COUNT(*) as count,
      ROUND(SUM(amount * CASE currency WHEN 'USD' THEN 1 WHEN 'EUR' THEN 1.09 WHEN 'IQD' THEN 0.00076 ELSE 1 END), 2) as amount_usd_estimate,
      'multi' as currency_mix_label
    FROM reports
    GROUP BY country
    ORDER BY amount_usd_estimate DESC, count DESC, country ASC`
  ).all();

  return json(result.results || []);
}

async function handleGetStats(env) {
  if (!env.DB) return badRequest("D1 database binding (DB) is missing.", 500);

  const result = await env.DB.prepare(
    `SELECT
      COUNT(*) as total_reports,
      ROUND(COALESCE(SUM(amount * CASE currency WHEN 'USD' THEN 1 WHEN 'EUR' THEN 1.09 WHEN 'IQD' THEN 0.00076 ELSE 1 END), 0), 2) as total_amount_usd_estimate,
      COUNT(DISTINCT country) as countries_count
    FROM reports`
  ).first();

  return json(result || { total_reports: 0, total_amount_usd_estimate: 0, countries_count: 0 });
}

async function serveAsset(request, env) {
  if (!env.ASSETS || typeof env.ASSETS.fetch !== "function") {
    return json({ ok: false, error: "Asset binding missing." }, 500);
  }
  return env.ASSETS.fetch(request);
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;

      if (request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders() });
      }

      if (pathname === "/health" && request.method === "GET") {
        return json({ ok: true, status: "healthy", time: new Date().toISOString() });
      }
      if (pathname === "/api/report" && request.method === "POST") return handleCreateReport(request, env);
      if (pathname === "/api/reports" && request.method === "GET") return handleGetReports(request, env);
      if (pathname === "/api/countries" && request.method === "GET") return handleGetCountries(env);
      if (pathname === "/api/stats" && request.method === "GET") return handleGetStats(env);
      if (pathname === "/reports") {
        const rewritten = new Request(new URL("/index.html", url.origin), request);
        return serveAsset(rewritten, env);
      }
      return serveAsset(request, env);
    } catch (error) {
      return json({ ok: false, error: "Internal Server Error", details: error instanceof Error ? error.message : String(error) }, 500);
    }
  },
};
