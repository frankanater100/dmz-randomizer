// src/pages/Updates.jsx
import { useState } from "react";
import { UPDATES } from "../data/updates.js";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Updates() {
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState(""); // optional, can be empty
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setErr("");
    try {
      const body = encode({
        "form-name": "anon-suggestions",
        message: msg,
        email,
      });
      // Post to Netlify’s form endpoint (works on deployed site)
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("Network error");
      setOk(true);
      setMsg("");
      setEmail("");
    } catch (e) {
      setErr("Could not send right now. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="panel">
        <h2>Updates</h2>
        <div className="grid" style={{ gap: 12 }}>
          {UPDATES.map((u, i) => (
            <div className="card" key={i}>
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div style={{ fontWeight: 700 }}>{u.title}</div>
                <span className="kbd">{u.date}</span>
              </div>
              <div style={{ marginTop: 6 }}>{u.body}</div>
            </div>
          ))}
          {UPDATES.length === 0 && <div className="subtle">No updates yet.</div>}
        </div>
      </div>

      <div className="panel">
        <h2>Anonymous suggestions</h2>
        <p className="subtle" style={{ marginTop: -6 }}>
          No login required. Leave your email if you want a reply (totally optional).
        </p>

        {/* Netlify will pick up this form by name="anon-suggestions" */}
        <form
          name="anon-suggestions"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Netlify needs these hidden fields to identify the form */}
          <input type="hidden" name="form-name" value="anon-suggestions" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" onChange={() => {}} /></label>
          </p>

          <div className="grid" style={{ gap: 10 }}>
            <label className="subtle">Your message (required)</label>
            <textarea
              name="message"
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
                resize: "vertical"
              }}
              placeholder="What should we add, change, or fix?"
            />

            <label className="subtle">Email (optional)</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com (optional)"
            />

            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="subtle" style={{ fontSize: 12 }}>
                Submissions are stored in Netlify Forms. IPs aren’t shown in the UI.
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