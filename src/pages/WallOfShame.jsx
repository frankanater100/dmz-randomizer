// src/pages/WallOfShame.jsx
import { useEffect, useState } from "react";

// ENV (must start with VITE_ to be exposed in the browser)
const WEBAPP_URL = import.meta.env.VITE_GOOGLE_WEBAPP_URL; // Google Apps Script /exec

export default function WallOfShame() {
  // ---- STATE: feed ----
  const [rows, setRows] = useState(null); // null = loading
  const [loadErr, setLoadErr] = useState("");

  // ---- STATE: add entry ----
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [author, setAuthor] = useState("");
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  // ---- EFFECT: fetch from Google Web App ----
  useEffect(() => {
    console.log("WEBAPP_URL:", WEBAPP_URL);

    if (!WEBAPP_URL) {
      setRows([]);
      setLoadErr("Missing WEBAPP_URL.");
      return;
    }

    let alive = true;

    (async () => {
      try {
        const res = await fetch(`${WEBAPP_URL}?ts=${Date.now()}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // We expect array of objects (like Updates)
        if (alive) {
          setRows(Array.isArray(data) ? data : []);
          setLoadErr("");
        }
      } catch (e) {
        console.error("WallOfShame fetch failed:", e);
        if (alive) {
          setRows([]);
          setLoadErr("Couldn’t load the Wall of Shame right now.");
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  async function handleAdd(e) {
    e.preventDefault();
    setSending(true);
    setErr("");
    setOk(false);

    try {
      if (!WEBAPP_URL) throw new Error("Missing WEBAPP_URL");

      // Map to your Apps Script fields: title/date/body/author
      // timestamp is created by Apps Script (your doPost)
      const payload = {
        title: name.trim(),       // "Name"
        body: reason.trim(),      // "Reason"
        author: author.trim(),    // optional
      };

      if (!payload.title) throw new Error("Missing name");
      if (!payload.body) throw new Error("Missing reason");

     const res = await fetch("/api/wall-of-shame");
const data = await res.json();
setRows(Array.isArray(data) ? data : []);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setOk(true);
      setName("");
      setReason("");
      setAuthor("");

      // refresh list
      const fresh = await fetch(`${WEBAPP_URL}?ts=${Date.now()}`);
      const freshData = await fresh.json();
      setRows(Array.isArray(freshData) ? freshData : []);
    } catch (e) {
      console.error(e);
      setErr("Could not post right now. Check WEBAPP_URL + deploy settings.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="panel">
        <h2>Wall of Shame</h2>

        {rows === null && <div className="subtle">Loading…</div>}

        {rows !== null && loadErr && (
          <div className="badge" style={{ borderColor: "#d66", color: "#ffdede" }}>
            {loadErr}
          </div>
        )}

        {Array.isArray(rows) && rows.length === 0 && !loadErr && (
          <div className="subtle">No entries yet.</div>
        )}

        {Array.isArray(rows) && rows.length > 0 && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: 10 }}>Name</th>
                  <th style={{ textAlign: "left", padding: 10, whiteSpace: "nowrap" }}>Timestamp</th>
                  <th style={{ textAlign: "left", padding: 10 }}>Reason</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={`${r.title}-${i}`}>
                    <td style={{ padding: 10, fontWeight: 700, whiteSpace: "nowrap" }}>
                      {r.title}
                    </td>
                    <td style={{ padding: 10, whiteSpace: "nowrap" }}>
                      <span className="kbd">{r.date || ""}</span>
                    </td>
                    <td style={{ padding: 10 }}>
                      {r.body}
                      {r.author ? (
                        <div className="subtle" style={{ marginTop: 6, fontSize: 12 }}>
                          — {r.author}
                        </div>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="panel">
        <h2>Add to Wall</h2>

        <form onSubmit={handleAdd} className="grid" style={{ gap: 10 }}>
          <label className="subtle">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />

          <label className="subtle">Reason</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={3}
            required
            style={{
              width: "100%",
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              borderRadius: 10,
              padding: 10,
              resize: "vertical",
            }}
          />

          <label className="subtle">Author (optional)</label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />

          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="subtle" style={{ fontSize: 12 }}>
              Timestamp is added automatically.
            </div>
            <button className="btn accent" disabled={sending}>
              {sending ? "Posting…" : "Post"}
            </button>
          </div>

          {ok && <div className="badge on">Posted.</div>}
          {err && (
            <div className="badge" style={{ borderColor: "#d66", color: "#ffdede" }}>
              {err}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}