// api/wall-of-shame.js
export default async function handler(req, res) {
  const GAS_URL =
    process.env.GOOGLE_WEBAPP_URL || process.env.VITE_GOOGLE_WEBAPP_URL;

  if (!GAS_URL) {
    res.status(500).json({ error: "missing_GAS_URL" });
    return;
  }

  try {
    const r = await fetch(`${GAS_URL}?ts=${Date.now()}`);
    const text = await r.text();

    // ✅ allow your frontend to read it
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", r.headers.get("content-type") || "application/json");

    res.status(r.status).send(text);
  } catch (e) {
    res.status(502).json({ error: "proxy_failed", details: String(e) });
  }
}