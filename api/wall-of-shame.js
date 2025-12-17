export default async function handler(req, res) {
  const GAS_URL = process.env.GOOGLE_WEBAPP_URL;

  if (!GAS_URL) {
    return res.status(500).json({ error: "Missing GOOGLE_WEBAPP_URL" });
  }

  try {
    const r = await fetch(`${GAS_URL}?ts=${Date.now()}`);
    const data = await r.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}