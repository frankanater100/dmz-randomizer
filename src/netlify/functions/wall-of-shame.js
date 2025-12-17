// src/pages/WallOfShame.jsx
import { useEffect, useState } from "react";

/**
 * ✅ NETLIFY VERSION
 * Frontend talks ONLY to Netlify Functions:
 *   GET  /.netlify/functions/wall-of-shame
 *   POST /.netlify/functions/wall-of-shame
 *
 * No direct Google Apps Script fetch (avoids CORS).
 */

// ---------- Constants ----------
const WALL_FN_URL = "/.netlify/functions/wall-of-shame";

export default function WallOfShame() {
  // =========================
  // STATE: feed (read)
  // =========================
  const [rows, setRows] = useState(null); // null = loading
  const [loadErr, setLoadErr] = useState("");

  // =========================
  // STATE: form (post)
  // =========================
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [author, setAuthor] = useState("");

  const [sending, setSending] = useState(false);
  const [postOk, setPostOk] = useState(false);
  const [postErr, setPostErr] = useState("");

  // =========================
  // HELPERS
  // =========================
  async function loadWall() {
    try {
      setLoadErr("");

      const res = await fetch(`${WALL_FN_URL}?ts=${Date.now()}`, {
        method: "GET",
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      setRows(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error("Wall of Shame load failed:", e);
      setRows([]);
      setLoadErr("Couldn’t load the Wall of Shame right now.");
    }
  }

  function normalizeName(row) {
    // Handles header/key differences if your sheet changes later
    return (
      row?.title ??
      row?.Title ??
      row?.name ??
      row?.Name ??
      row?.player ??
      row?.Player ??
      ""
    );
  }

  // =========================
  // EFFECTS
  // =========================
  useEffect(() => {
    loadWall();
  }, []);

  // =========================
  // HANDLERS
  // =========================
  async function handleAdd(e) {
    e.preventDefault();

    setSending(true);
    setPostOk(false);
    setPostErr("");

    try {
      const payload = {
        // Apps Script expects these keys:
        title: name.trim(), // player name
        body: reason.trim(), // reason
        author: author.trim(), // optional
      };

      if (!payload.title) throw new Error("Missing name");
      if (!payload.body) throw new Error("Missing reason");

      const res = await fetch(WALL_FN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setPostOk(true);
      setName("");
      setReason("");
      setAuthor("");

      // Refresh list after posting
      await loadWall();
    } catch (e) {
      console.error("Wall of Shame post failed:", e);
      setPostErr("Could not post right now.");
    } finally {
      setSending(false);
      // auto-hide success after a moment
      setTimeout(() => setPostOk(false), 2000);
    }
  }

  // =========================
  // UI
  // =========================
  return (
    <div className="grid" style={{ gap: 16 }}>
      {/* =======================
          PANEL: LIST
         ======================= */}
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
                  <th style={{ textAlign: "left", padding: 10, whiteSpace: "nowrap" }}>
                    Timestamp
                  </th>
                  <th style={{ textAlign: "left", padding: 10 }}>Reason</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r, i) => {
                  const playerName = normalizeName(r);
                  return (
                    <tr key={`${playerName || "row"}-${i}`}>
                      <td style={{ padding: 10, fontWeight: 800, whiteSpace: "nowrap" }}>
                        {playerName}
                      </td>

                      <td style={{ padding: 10, whiteSpace: "nowrap" }}>
                        <span className="kbd">{r?.date || ""}</span>
                      </td>

                      <td style={{ padding: 10 }}>
                        {r?.body || ""}
                        {r?.author ? (
                          <div className="subtle" style={{ marginTop: 6, fontSize: 12 }}>
                            — {r.author}
                          </div>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* =======================
          PANEL: ADD FORM
         ======================= */}
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

          {postOk && <div className="badge on">Posted.</div>}

          {postErr && (
            <div className="badge" style={{ borderColor: "#d66", color: "#ffdede" }}>
              {postErr}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}