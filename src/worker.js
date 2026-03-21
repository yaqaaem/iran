
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*"
    }
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET,POST,OPTIONS",
          "access-control-allow-headers": "content-type"
        }
      });
    }

    if (url.pathname === "/api/report" && request.method === "POST") {
      const body = await readJson(request);
      if (!body) return json({ error: "Invalid JSON" }, 400);

      const payer_name = normalizeString(body.payer_name, 200);
      const payer_contact = normalizeString(body.payer_contact, 120);
      const country = normalizeString(body.country, 120);
      const display_name = normalizeString(body.display_name, 300);
      const note = normalizeString(body.note, 2000);
      const currency = normalizeString(body.currency, 10);
      const build_version = normalizeString(body.build_version, 80);
      const amount = Number(body.amount || 0);
      const agent_id = Number(body.agent_id || 0);

      if (!country) return json({ error: "Country is required" }, 400);
      if (!Number.isFinite(amount) || amount <= 0) return json({ error: "Valid amount is required" }, 400);
      if (![1, 2].includes(agent_id)) return json({ error: "Valid agent is required" }, 400);
      if (!["USD", "IQD", "EUR"].includes(currency)) return json({ error: "Valid currency is required" }, 400);

      await env.DB.prepare(`
        INSERT INTO reports (
          payer_name, payer_contact, country, display_name, note,
          amount, currency, agent_id, build_version
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `)
      .bind(
        payer_name, payer_contact, country, display_name, note,
        amount, currency, agent_id, build_version
      )
      .run();

      return json({ ok: true });
    }

    if (url.pathname === "/api/reports" && request.method === "GET") {
      const limit = Math.min(Math.max(Number(url.searchParams.get("limit") || 20), 1), 100);
      const { results } = await env.DB.prepare(`
        SELECT id, payer_name, payer_contact, country, display_name, note,
               amount, currency, agent_id,
               datetime(created_at, 'localtime') as created_at,
               build_version
        FROM reports
        ORDER BY id DESC
        LIMIT ?
      `).bind(limit).all();
      return json(results || []);
    }

    if (url.pathname === "/api/countries" && request.method === "GET") {
      const { results } = await env.DB.prepare(`
        SELECT country, COUNT(*) as count, CAST(SUM(amount) AS REAL) as amount
        FROM reports
        GROUP BY country
        ORDER BY amount DESC, count DESC
      `).all();
      return json(results || []);
    }

    if (url.pathname === "/api/stats" && request.method === "GET") {
      const total = await env.DB.prepare(`SELECT COUNT(*) as total_reports, COALESCE(SUM(amount),0) as total_amount FROM reports`).first();
      const countries = await env.DB.prepare(`SELECT COUNT(DISTINCT country) as countries_count FROM reports`).first();
      return json({
        total_reports: Number(total?.total_reports || 0),
        total_amount: Number(total?.total_amount || 0),
        countries_count: Number(countries?.countries_count || 0)
      });
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Assets binding is missing.", { status: 500 });
  }
};
