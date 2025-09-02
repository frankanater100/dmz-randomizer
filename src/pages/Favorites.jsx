// src/pages/Favorites.jsx
import { useState } from "react";
import { listFaves, removeFave } from "../lib/faves.js";

export default function Favorites() {
  const [faves, setFaves] = useState(listFaves());

  function del(id) {
    removeFave(id);
    setFaves(listFaves());
  }

  if (!faves.length) {
    return <div className="panel">No favorites yet. Roll a build and hit ⭐ Save.</div>;
  }

  return (
    <div className="grid" style={{ gap: 12 }}>
      {faves.map(f => (
        <div className="panel" key={f.id}>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div>
              <div className="big">{f.weapon}</div>
              <div className="subtle">{
                (f.category || "—")
              } • Seed {f.seed} • Roll #{f.roll}</div>
            </div>
            <button className="badge" onClick={() => del(f.id)}>Delete</button>
          </div>

          {f.image && (
            <img
              src={f.image}
              alt={f.weapon}
              className="heroimg"
              style={{ marginTop: 8 }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          )}

          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 8, marginTop: 8 }}
          >
            {f.attachments.map(a => (
              <div key={a.slot} className="card">
                <div className="subtle" style={{ fontSize: 12 }}>{a.slot}</div>
                <div style={{ fontWeight: 700 }}>{a.name || "—"}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}