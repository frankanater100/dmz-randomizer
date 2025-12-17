// src/pages/WallOfShame.jsx
import { useEffect, useMemo, useState } from "react";

// Same exact “old update system” env var used in Updates.jsx  [oai_citation:1‡Updates.jsx](file-service://file-GskcJ5L59FJNQ1MtDdR7zH)
const WEBAPP_URL = import.meta.env.VITE_GOOGLE_WEBAPP_URL;

export default function WallOfShame() {
  const [entries, setEntries] = useState(null); // null = loading
  const [loadErr, setLoadErr] = useState("");

  useEffect(() => {
    if (!WEBAPP_URL) {
      setEntries([]);
      setLoadErr("Missing WEBAPP_URL.");
      return;
    }

    let alive = true;
    (async () => {
      try {
        const res = await fetch(`${WEBAPP_URL}?ts=${Date.now()}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (alive) {
          setEntries(Array.isArray(data) ? data : []);
          setLoadErr("");
        }
      } catch (e) {
        console.error("Wall of Shame fetch failed:", e);
        if (alive) {
          setEntries([]);
          setLoadErr("Couldn’t load the Wall of Shame right now.");
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  // Optional: show newest first if your sheet returns mixed order
  const sorted = useMemo(() => {
    if (!Array.isArray(entries)) return entries;
    return [...entries].reverse();
  }, [entries]);

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="panel">
        <h2>Wall of Shame</h2>

        {sorted === null && <div className="subtle">Loading…</div>}

        {sorted !== null && loadErr && (
          <div className="badge" style={{ borderColor: "#d66", color: "#ffdede" }}>
            {loadErr}
          </div>
        )}

        {Array.isArray(sorted) && sorted.length === 0 && !loadErr && (
          <div className="subtle">No shame posted yet.</div>
        )}

        {/* 3 columns */}
        {Array.isArray(sorted) && sorted.length > 0 && (
          <div className="shame-grid">
            {sorted.map((u, i) => (
              <div className="card shame-card" key={`${u.title || "name"}-${i}`}>
                <div className="row" style={{ justifyContent: "space-between" }}>
                  <div style={{ fontWeight: 800 }}>{u.title}</div>
                  {/* Timestamp pill (same field Updates uses)  [oai_citation:2‡Updates.jsx](file-service://file-GskcJ5L59FJNQ1MtDdR7zH) */}
                  <span className="kbd">{u.date || ""}</span>
                </div>

                {/* If you keep “reason/body” in your sheet, it’ll show here */}
                {u.body && <div style={{ marginTop: 8 }}>{u.body}</div>}

                {u.author && (
                  <div className="subtle" style={{ marginTop: 8, fontSize: 12 }}>
                    — {u.author}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}