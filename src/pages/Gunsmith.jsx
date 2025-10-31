// src/pages/Gunsmith.jsx
// -------------------------------------------------------------
// Build-Your-Own Gunsmith (visual polish)
// - Weapon hero uses object-fit: contain + reveal animation
// - Slot cards slide in with a slight stagger
// - Selecting a slot pulses; selected cards glow
// - 5/5 counter gives a tiny wiggle
// -------------------------------------------------------------
import { useMemo, useState, useRef, useEffect } from "react";
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
  const [chosen, setChosen] = useState(() => {
    const w = sortedWeapons[0];
    const obj = {};
    for (const s of Object.keys(w?.slots || {})) obj[s] = "";
    return obj;
  });

  // when weapon changes, reset slot picks
  function onChangeWeapon(e) {
    const idx = Number(e.target.value);
    setWeaponIdx(idx);
    const w = sortedWeapons[idx];
    const obj = {};
    for (const s of Object.keys(w?.slots || {})) obj[s] = "";
    setChosen(obj);
    setRevealKey((k) => k + 1); // retrigger animations
  }

  // Count selected
  const selectedCount = useMemo(
    () => Object.values(chosen).filter((v) => v && v.trim()).length,
    [chosen]
  );
  const remaining = Math.max(0, MAX_ATTACH - selectedCount);

  // ---------- small animation helpers ----------
  const [revealKey, setRevealKey] = useState(0);   // changes to re-run CSS animations
  const justPickedRef = useRef(null);              // remember last-picked slot for pulse

  function setSlot(slot, value) {
    setChosen((prev) => {
      const was = prev[slot] || "";
      const isAdding = value && !was;
      if (isAdding && selectedCount >= MAX_ATTACH) return prev; // block over 5
      if (isAdding) {
        justPickedRef.current = slot;             // mark for pulse
        // also nudge reveal so the selected card animates back in subtly
        setRevealKey((k) => k + 1);
      }
      return { ...prev, [slot]: value };
    });
  }

  // Clear "just picked" after paint so pulse runs once
  useEffect(() => {
    const id = requestAnimationFrame(() => (justPickedRef.current = null));
    return () => cancelAnimationFrame(id);
  }, [revealKey]);

  // Clear all selections
  function clearAll() {
    setChosen((prev) => {
      const clone = { ...prev };
      for (const k of Object.keys(clone)) clone[k] = "";
      return clone;
    });
    setRevealKey((k) => k + 1);
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

          <div className={`kbd ${remaining === 0 ? "limit-hit" : ""}`}>
            {selectedCount}/{MAX_ATTACH} selected
          </div>

          <div style={{ marginLeft: "auto" }} />
          <button className="btn" onClick={clearAll}>Clear all</button>
          <button className="btn accent" onClick={saveBuild} disabled={selectedCount === 0}>
            ⭐ Save build
          </button>
        </div>

        <div className="hr" style={{ margin: "12px 0" }} />

       {/* hero image (animated, object-fit: contain) */}
{weapon && (
  <div className="gs-hero">
    <img
      key={`gs-hero-${weaponIdx}`}     // re-trigger animation when base weapon changes
      src={weapon.image || PLACEHOLDER}
      alt={weapon.name}
      className="reveal-hero"
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
            {Object.entries(weapon.slots).map(([slot, options], i) => {
              const val = chosen[slot] || "";
              const disabledAll = remaining === 0 && !val;
              const selected = !!val;
              const justPicked = justPickedRef.current === slot;

              return (
                <div
                  key={`${slot}-${weaponIdx}-${revealKey}`}
                  className={`card slot-card reveal-card ${selected ? "selected" : ""} ${justPicked ? "just-picked" : ""}`}
                  style={{ animationDelay: `${Math.min(i, 6) * 70}ms` }}
                >
                  <div className="row" style={{ justifyContent: "space-between", marginBottom: 6 }}>
                    <div className="label-caps">{slot}</div>
                    <span className={`badge status-pill ${selected ? "on" : ""}`}>
                      {selected ? "selected" : "empty"}
                    </span>
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
                      options.map((name, idx) => (
                        <option key={name + idx} value={name}>{name}</option>
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