// src/pages/Weapons.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, WEAPONS } from "../data/weapons.js";

function getCategory(w) {
  // handle typos in your data
  return (w.category || w.catergory || "Unknown")?.toString();
}
function slotCount(w) {
  const slots = w?.slots && typeof w.slots === "object" ? w.slots : {};
  return Object.keys(slots).length;
}
function attachmentCount(w) {
  const slots = w?.slots && typeof w.slots === "object" ? w.slots : {};
  return Object.values(slots).reduce((sum, v) => {
    const arr = Array.isArray(v) ? v : [];
    return sum + arr.length;
  }, 0);
}

export default function Weapons() {
  // --- NEW: search state ---
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  // keyboard UX: "/" to focus, "Esc" to clear/blur (not in inputs)
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setQ("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keydown", onEsc);
    };
  }, []);

  // group by category
  const byCat = useMemo(() => {
    const map = new Map();
    for (const w of WEAPONS) {
      const cat = getCategory(w);
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat).push(w);
    }
    return map;
  }, []);

  // official categories first, then extras
  const extraCats = [...byCat.keys()].filter((c) => !CATEGORIES.includes(c));
  const sections = [...CATEGORIES, ...extraCats];

  // --- NEW: normalized query & filter ---
  const qn = q.trim().toLowerCase();

  return (
    <div className="grid" style={{ gap: 16 }}>
      {/* Search bar */}
      <div className="panel">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div style={{ fontWeight: 700 }}>Weapons</div>
          <div className="subtle" style={{ fontSize: 13 }}>
            Tip: Press <span className="kbd">/</span> to focus search
          </div>
        </div>
        <div className="row" style={{ marginTop: 8 }}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search weapons… (e.g., M4, Kastov, Vaznev)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{ maxWidth: 520 }}
          />
          {q && (
            <button className="btn" onClick={() => setQ("")}>
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Sections */}
      {sections.map((cat) => {
        // list within this category, filtered by search query
        const listAll = (byCat.get(cat) || []).sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        const list = qn
          ? listAll.filter((w) => w.name.toLowerCase().includes(qn))
          : listAll;

        if (!list.length) return null;

        return (
          <section className="panel" key={cat}>
            <h2 style={{ margin: "0 0 8px 0" }}>
              {cat} <span className="subtle" style={{ marginLeft: 6, fontSize: 12 }}>• {list.length}</span>
            </h2>

            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 12,
              }}
            >
              {list.map((w) => {
                const slots = w?.slots && typeof w.slots === "object" ? w.slots : {};
                const entries = Object.entries(slots);

                return (
                  <div className="card" key={w.name}>
                    {/* image (optional) */}
                    <div style={{ marginBottom: 8 }}>
                      <img
                        src={w.image || "/images/weapons/placeholder.png"}
                        alt={w.name}
                        className="thumb"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/images/weapons/placeholder.png";
                        }}
                      />
                    </div>

                    {/* name + counts */}
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>{w.name}</div>
                    <div className="subtle" style={{ fontSize: 13, marginBottom: 8 }}>
                      {slotCount(w)} slot types • {attachmentCount(w)} attachments
                    </div>
                       <span className={`badge ${getCategory(w)}`}>{getCategory(w)}</span>
                    {/* attachments visible by default */}
                    <details>
                      <summary className="subtle">Attachments</summary>

                      {/* each slot block */}
                      <div className="grid" style={{ gap: 10, marginTop: 8 }}>
                        {entries.map(([slot, opts]) => {
                          const arr = Array.isArray(opts) ? opts : [];
                          return (
                            <div key={slot}>
                              <div
                                className="subtle"
                                style={{ fontSize: 12, marginBottom: 6 }}
                              >
                                <span className="kbd">{slot}</span> • {arr.length}
                              </div>

                              <div
                                className="row"
                                style={{
                                  gap: 8,
                                  alignItems: "flex-start",
                                  flexWrap: "wrap",
                                }}
                              >
                                {arr.map((name) => (
                                  <span className="badge" key={name}>
                                    {name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                        {!entries.length && (
                          <div className="subtle">No slots listed for this weapon.</div>
                        )}
                      </div>
                    </details>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}