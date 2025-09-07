// src/pages/Gunsmith.jsx
// -------------------------------------------------------------
// Build-Your-Own Gunsmith
// - Pick a base weapon
// - Choose up to 5 attachments (max 1 per slot)
// - Live counter, clear-all, save to Favorites
// -------------------------------------------------------------
import { useMemo, useState } from "react";
import { WEAPONS } from "../data/weapons.js";
import { addFave } from "../lib/faves.js";
import Toast from "../components/Toast.jsx";

const PLACEHOLDER = "/images/weapons/placeholder.png";
const MAX_ATTACH = 5;

export default function Gunsmith() {
  // ---------- base weapon ----------
  const sortedWeapons = useMemo(
    () => [...WEAPONS].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );
  const [weaponIdx, setWeaponIdx] = useState(0);
  const weapon = sortedWeapons[weaponIdx] || null;

  // ---------- attachment state ----------
  // { [slotName]: "Attachment Name" | "" }
  const initialSlots = useMemo(() => {
    if (!weapon?.slots) return {};
    const names = Object.keys(weapon.slots || {});
    const obj = {};
    for (const s of names) obj[s] = "";
    return obj;
  }, [weapon]);

  const [chosen, setChosen] = useState(initialSlots);

  // Reset chosen when weapon changes
  function onChangeWeapon(e) {
    const idx = Number(e.target.value);
    setWeaponIdx(idx);
    const w = sortedWeapons[idx];
    const obj = {};
    for (const s of Object.keys(w?.slots || {})) obj[s] = "";
    setChosen(obj);
  }

  // Count selected
  const selectedCount = useMemo(
    () =>
      Object.values(chosen).filter((v) => v && v.trim().length > 0).length,
    [chosen]
  );
  const remaining = Math.max(0, MAX_ATTACH - selectedCount);

  // Change selection for a slot (enforce <= 5)
  function setSlot(slot, value) {
    setChosen((prev) => {
      // if trying to pick a new (non-empty) value and we're at limit, block
      const was = prev[slot] || "";
      const isAdding = value && !was;
      if (isAdding && selectedCount >= MAX_ATTACH) {
        // Block by returning prev unchanged
        return prev;
      }
      return { ...prev, [slot]: value };
    });
  }

  // Clear all selections
  function clearAll() {
    setChosen((prev) => {
      const clone = { ...prev };
      for (const k of Object.keys(clone)) clone[k] = "";
      return clone;
    });
  }

  // Save to favorites
  const [toast, setToast] = useState("");
  function saveBuild() {
    if (!weapon) return;
    const attachments = Object.entries(chosen)
      .filter(([, name]) => name)
      .map(([slot, name]) => ({ slot, name }));

    addFave({
      weapon: weapon.name,
      category: weapon.category || weapon.catergory || "Unknown",
      image: weapon.image || PLACEHOLDER,
      seed: "gunsmith", // marker that this is BYO build
      roll: 0,
      attachments,
    });
    setToast("Saved to favorites!");
  }

  // ---------- render ----------
  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="panel">
        <h2>Build your own gunsmith</h2>

        {/* pick base weapon */}
        <div className="row" style={{ gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <label className="subtle" htmlFor="weaponSel">Base weapon</label>
          <select
            id="weaponSel"
            value={weaponIdx}
            onChange={onChangeWeapon}
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              borderRadius: 10,
              padding: "8px 10px",
            }}
          >
            {sortedWeapons.map((w, i) => (
              <option key={w.name + i} value={i}>
                {w.name} {w.category ? `• ${w.category}` : ""}
              </option>
            ))}
          </select>

          <div className="kbd">
            {selectedCount}/{MAX_ATTACH} selected
          </div>

          <div style={{ marginLeft: "auto" }} />
          <button className="btn" onClick={clearAll}>Clear all</button>
          <button className="btn accent" onClick={saveBuild} disabled={selectedCount === 0}>
            ⭐ Save build
          </button>
        </div>

        <div className="hr" style={{ margin: "12px 0" }} />

        {/* hero image */}
        {weapon && (
  <div className="part-media" style={{ marginBottom: 12 }}>
    {/* pick ONE class: "cover" (cropped, fills) OR "contain" (no crop, letterbox) */}
    <img
      className="part-thumb cover"
      src={weapon.image || PLACEHOLDER}
      alt={weapon.name}
      loading="lazy"
      onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
    />
  </div>
)}
        {/* slot pickers */}
        {!weapon?.slots || Object.keys(weapon.slots).length === 0 ? (
          <div className="subtle">This weapon has no attachment data.</div>
        ) : (
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}
          >
            {Object.entries(weapon.slots).map(([slot, options]) => {
              const val = chosen[slot] || "";
              const disabledAll = remaining === 0 && !val; // block picking new if at limit
              return (
                <div className="card" key={slot}>
                  <div className="row" style={{ justifyContent: "space-between", marginBottom: 6 }}>
                    <div className="label-caps">{slot}</div>
                    {val ? <span className="badge on">selected</span> : <span className="badge">empty</span>}
                  </div>
                  <select
                    value={val}
                    onChange={(e) => setSlot(slot, e.target.value)}
                    disabled={disabledAll}
                    style={{
                      width: "100%",
                      background: "var(--bg-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      borderRadius: 10,
                      padding: "10px 12px",
                    }}
                  >
                    <option value="">— none —</option>
                    {Array.isArray(options) &&
                      options.map((name, i) => (
                        <option key={name + i} value={name}>
                          {name}
                        </option>
                      ))}
                  </select>
                  {disabledAll && !val && (
                    <div className="subtle" style={{ fontSize: 12, marginTop: 6 }}>
                      Max {MAX_ATTACH} attachments selected. Clear one to add another.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Toast msg={toast} onDone={() => setToast("")} />
    </div>
  );
}