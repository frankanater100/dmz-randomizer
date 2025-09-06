// netlify/functions/updates.js
export async function handler() {
  // ✅ we'll set this in step 2; leave the placeholder for now
  const GAS_URL =
    process.env.VITE_GOOGLE_WEBAPP_URL ||
    "https://script.google.com/macros/s/AKfycbwbwjP7edKa3rtqUiX3cnsYsgVGpPbOWKeSK3k9KzOSzmLdJGfkJyVerVPA59u5Qyt7fA/exec"; // TODO: replace later

  try {
    const res = await fetch(`${GAS_URL}?ts=${Date.now()}`);
    const text = await res.text();

    return {
      statusCode: res.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": res.headers.get("content-type") || "application/json",
      },
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "proxy_failed", details: String(err) }),
    };
  }
}