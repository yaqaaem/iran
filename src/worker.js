const rateLimitMap = new Map();

function corsHeaders(extra = {}) {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "Content-Type, Authorization",
    "content-type": "application/json; charset=utf-8",
    ...extra,
  };
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: corsHeaders(extraHeaders),
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

function isRateLimited(ip, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }

  if (now - entry.start > windowMs) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }

  entry.count += 1;
  rateLimitMap.set(ip, entry);

  return entry.count > limit;
}

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const { pathname } = url;

      if (request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders() });
      }

      if (pathname === "/" && request.method === "GET") {
        return json({
          ok: true,
          message: "Worker is running",
          endpoints: {
            health: "/health",
            config: "/config",
            submit: "/submit"
          }
        });
      }

      if (pathname === "/health" && request.method === "GET") {
        return json({
          ok: true,
          status: "healthy",
          time: new Date().toISOString(),
        });
      }

      if (pathname === "/config" && request.method === "GET") {
        return json({
          ok: true,
          config: {
            appName: env.APP_NAME || "Donation App",
            currency: env.DEFAULT_CURRENCY || "USD",
            maxAmount: Number(env.MAX_AMOUNT || 1000),
          },
        });
      }

      if (pathname === "/submit" && request.method === "POST") {
        const ip = getClientIp(request);

        if (isRateLimited(ip, 10, 60_000)) {
          return json(
            { ok: false, error: "Too many requests. Please try again later." },
            429
          );
        }

        const body = await readJson(request);
        if (!body) {
          return json({ ok: false, error: "Invalid JSON body." }, 400);
        }

        const name = normalizeString(body.name, 120);
        const country = normalizeString(body.country, 120);
        const language = normalizeString(body.language, 50);
        const currency = normalizeString(body.currency, 10);
        const note = normalizeString(body.note, 2000);

        let amount = Number(body.amount);
        if (!Number.isFinite(amount) || amount <= 0) {
          return json({ ok: false, error: "Invalid amount." }, 400);
        }

        const maxAmount = Number(env.MAX_AMOUNT || 1000);
        if (amount > maxAmount) {
          return json(
            {
              ok: false,
              error: `Amount exceeds maximum allowed limit (${maxAmount}).`,
            },
            400
          );
        }

        const payload = {
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          ip,
          name,
          country,
          language,
          currency: currency || "USD",
          amount,
          note,
        };

        // إذا عندك KV binding باسم SUBMISSIONS سيخزن البيانات
        if (env.SUBMISSIONS && typeof env.SUBMISSIONS.put === "function") {
          await env.SUBMISSIONS.put(payload.id, JSON.stringify(payload));
        }

        return json({
          ok: true,
          message: "Submission received successfully.",
          data: {
            id: payload.id,
            createdAt: payload.createdAt,
          },
        });
      }

      return json({ ok: false, error: "Not Found" }, 404);
    } catch (error) {
      return json(
        {
          ok: false,
          error: "Internal Server Error",
          details: error instanceof Error ? error.message : String(error),
        },
        500
      );
    }
  },
};
