// src/pages/Updates.jsx
import { useEffect, useState } from "react";

export default function Updates() {
  const [items, setItems] = useState(null);
  const [loadErr, setLoadErr] = useState("");

  // suggestion form state
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  // load updates.json (from /public)
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`/updates.json?ts=${Date.now()}`);
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        if (alive) setItems(Array.isArray(data) ? data : []);
      } catch {
        if (alive) {
          setItems([]);
          setLoadErr("Couldn’t load updates right now.");
        }
      }
    })();
    return () => { alive = false; };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setErr("");
    try {
      const res = await fetch("https://formspree.io/f/xqadydko", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msg,
          email,
        }),
      });
      if (!res.ok) throw new Error("Network error");
      setOk(true);
      setMsg("");
      setEmail("");
    } catch {
      setErr("Could not send right now. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="panel">
        <h2>Updates</h2>
        {items === null && <div className="subtle">Loading updates…</div>}
        {items !== null && loadErr && (
          <div className="badge" style={{ borderColor: "#d66", color: "#ffdede" }}>{loadErr}</div>
        )}
        {items !== null && !loadErr && items.length === 0 && (
          <div className="subtle">No updates yet.</div>
        )}
        {Array.isArray(items) && items.length > 0 && (
          <div className="grid" style={{ gap: 12 }}>
            {items.map((u, i) => (
              <div className="card" key={`${u.date}-${i}`}>
                <div className="row" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontWeight: 700 }}>{u.title}</div>
                  <span className="kbd">{u.date}</span>
                </div>
                <div style={{ marginTop: 6 }}>{u.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="panel">
        <h2>Anonymous suggestions</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid" style={{ gap: 10 }}>
            <label className="subtle">Your message (required)</label>
            <textarea
              required
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={5}
              style={{
                width: "100%",
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                borderRadius: 10,
                padding: 10,
                resize: "vertical",
              }}
              placeholder="What should we add, change, or fix?"
            />

            <label className="subtle">Email (optional)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com (optional)"
            />

            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="subtle" style={{ fontSize: 12 }}>
                Suggestions are sent through Formspree.
              </div>
              <button className="btn accent" disabled={sending}>
                {sending ? "Sending…" : "Send"}
              </button>
            </div>

            {ok && <div className="badge on">Thanks! Got it.</div>}
            {err && <div className="badge" style={{ borderColor: "#d66", color: "#ffdede" }}>{err}</div>}
          </div>
        </form>
      </div>
    </div>
  );
}