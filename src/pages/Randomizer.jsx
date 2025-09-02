// src/pages/Randomizer.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CATEGORIES, WEAPONS, ALL_SLOTS } from "../data/weapons.js";
import { rngFromSeed, pick, sample, randomSeed } from "../lib/rng.js";
import { addFave } from "../lib/faves.js";
import Toast from "../components/Toast.jsx";



const STORAGE_KEY = "dmz_allowed_categories_v1";
const PREFS_KEY   = "dmz_preferred_slots_v1";
const PLACEHOLDER = "/images/weapons/placeholder.png";

export default function Randomizer() {
  const [params] = useSearchParams();
  const navigate = useNavigate();


  // Seed & roll index from URL for shareable builds
  const [seed, setSeed] = useState(() => params.get("seed") || randomSeed());
  const [roll, setRoll] = useState(() => Number(params.get("n") || 0));
  

  // Allowed categories (persist in localStorage)
  const [allowedCats, setAllowedCats] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [...CATEGORIES]; }
    catch { return [...CATEGORIES]; }
  });
const [toast, setToast] = useState("");

  // NEW: Preferred slot types (biased, not guaranteed)
  const [preferred, setPreferred] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(PREFS_KEY)) || []); }
    catch { return new Set(); }
  });
  useEffect(() => {
    localStorage.setItem(PREFS_KEY, JSON.stringify(Array.from(preferred)));
  }, [preferred]);

  // Locks
  const [weaponLocked, setWeaponLocked] = useState(false);
  const [attachmentLocks, setAttachmentLocks] = useState({}); // slot -> boolean

  // Keep URL current
  useEffect(() => {
    const catsStr = allowedCats.join(",");
    const search = new URLSearchParams({ seed, n: String(roll), cats: catsStr });
    navigate({ pathname: "/", search: `?${search.toString()}` }, { replace: true });
  }, [seed, roll, allowedCats, navigate]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allowedCats));
  }, [allowedCats]);

  // Deterministic RNGs from seed + roll
  const weaponRng = useMemo(() => rngFromSeed(`${seed}|${roll}|weapon`), [seed, roll]);
  const buildRng  = useMemo(() => rngFromSeed(`${seed}|${roll}|build`),  [seed, roll]);

  // Helper to read category even if data has a typo (catergory)
  const getCat = (w) => (w.category || w.catergory || "").toString();

  // Filtered weapons by category (tolerates typos in your data)
  const pool = useMemo(
    () => WEAPONS.filter((w) => allowedCats.includes(getCat(w))),
    [allowedCats]
  );

  // Pick weapon (deterministic unless locked)
  const [pickedWeapon, setPickedWeapon] = useState(null);
  useEffect(() => {
    if (weaponLocked && pickedWeapon) return;
    setPickedWeapon(pool.length ? pick(pool, weaponRng) : null);
    setAttachmentLocks({}); // reset locks when weapon changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weaponRng, pool.length, weaponLocked]);

  // === Weighted sampling helper (bias preferred but not guaranteed) ===
  function weightedSampleUnique(candidates, k, rng, weightFn) {
    // Expand by weights, then sample, then dedupe; deterministic via provided rng
    const expanded = [];
    for (const s of candidates) {
      const w = Math.max(1, Number(weightFn(s)) || 1);
      for (let i = 0; i < w; i++) expanded.push(s);
    }
    const out = [];
    const seen = new Set();
    // Safety loop: draw more than needed in case of dupes
    const draws = Math.min(expanded.length, k * 6);
    const drawn = sample(expanded, draws, rng); // uses your deterministic sample()
    for (const s of drawn) {
      if (!seen.has(s)) {
        out.push(s);
        seen.add(s);
        if (out.length === k) break;
      }
    }
    // If we somehow didn't get enough, fill uniformly without weights
    if (out.length < k) {
      for (const s of candidates) {
        if (out.length === k) break;
        if (!seen.has(s)) { out.push(s); seen.add(s); }
      }
    }
    return out.slice(0, k);
  }

  // === Build exactly 5 slots; prefer user-chosen slot types, but don't guarantee ===
  const build = useMemo(() => {
    if (!pickedWeapon) return [];

    const slotsObj = pickedWeapon.slots && typeof pickedWeapon.slots === "object" ? pickedWeapon.slots : {};
    const allSlots = Object.keys(slotsObj).filter((s) => Array.isArray(slotsObj[s]) && slotsObj[s].length);

    // Resolve locks to actual slot names on this weapon
    const lockedSlots = Object.keys(attachmentLocks).filter((s) => attachmentLocks[s]);
    const lockedResolved = allSlots.filter((s) => lockedSlots.some(ls => ls.toLowerCase() === s.toLowerCase()));

    const excluded = new Set(lockedResolved);
    const candidates = allSlots.filter((s) => !excluded.has(s));

    const need = Math.max(0, 5 - lockedResolved.length);

    // Weight function: preferred gets 3x chance, others 1x
    const weight = (s) => (preferred.has(s.toLowerCase()) ? 1.3 : 1);

    const biased = weightedSampleUnique(candidates, need, buildRng, weight);
    const finalSlots = [...lockedResolved, ...biased].slice(0, 5);

    // Pick one attachment per final slot (deterministic)
    return finalSlots.map((slot) => {
      const options = slotsObj[slot] || [];
      const rng = rngFromSeed(`${seed}|${roll}|slot:${slot}`);
      const name = options.length ? pick(options, rng) : null;
      return { slot, name };
    });
  }, [pickedWeapon, buildRng, attachmentLocks, preferred, seed, roll]);

  // Actions
  function rerollAll() { setRoll((r) => r + 1); }
  function rerollWeaponOnly() { if (!weaponLocked) setRoll((r) => r + 1); }
  function rerollSeedEntirely() { setSeed(randomSeed()); setRoll(0); }
  function toggleCat(cat) {
    setAllowedCats((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  }
  function toggleAttachmentLock(slot) {
    setAttachmentLocks((prev) => ({ ...prev, [slot]: !prev[slot] }));
  }
  function togglePreferredSlot(slotType) {
    const key = slotType.toLowerCase();
    setPreferred((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }
  function copyPermalink(){ navigator.clipboard.writeText(window.location.href); setToast("Link copied!"); }

  const noPool = pool.length === 0;
  const heroImage = pickedWeapon?.image || PLACEHOLDER;
  const cardRef = useRef(null);
  function saveCurrentBuild() {
  if (!pickedWeapon) return;
  const cat = pickedWeapon.category || pickedWeapon.catergory || "Unknown";

  addFave({
    weapon: pickedWeapon.name,
    category: cat,
    image: heroImage,
    seed,
    roll,
    attachments: build.map(b => ({ slot: b.slot, name: b.name })),
  });

  setToast("Saved to favorites!");
}

  return (
    <div className="grid" style={{ gap: 16 }}>
      {/* Seed / controls */}
      <div className="panel">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div>
            <div className="subtle">Seed</div>
            <div className="row" style={{ gap: 8 }}>
              <code className="kbd">{seed}</code>
              <span className="copy">roll #{roll}</span>
            </div>
          </div>
          <div className="row">
            <button className="btn ghost" onClick={copyPermalink}>Copy permalink</button>
            <button className="btn" onClick={rerollAll}>Reroll all</button>
            <button className="btn" onClick={rerollWeaponOnly} disabled={weaponLocked}>Reroll weapon</button>
            <button className="btn accent" onClick={rerollSeedEntirely}>New seed</button>
          </div>
        </div>
      </div>
      <button className="btn" onClick={saveCurrentBuild}>⭐ Save build</button>

      {/* Big Randomize button */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
  <button className="big-randomize" onClick={rerollAll}>
    <span className="icon">🎲</span> Randomize
  </button>
</div>

      {/* Main card with image + selected attachments only */}
      <div className="grid" style={{ gridTemplateColumns: "1.1fr .9fr", gap: 16 }}>
        <div className="panel main-card" ref={cardRef}>
          {/* header row */}
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="row" style={{ gap: 10, alignItems: "baseline" }}>
              <div className="big">{pickedWeapon ? pickedWeapon.name : "No weapon"}</div>
              <span className={`badge ${pickedWeapon ? getCat(pickedWeapon) : ""}`}>
  {pickedWeapon ? getCat(pickedWeapon) : "—"}
</span>
            </div>
            <button
              className={`badge ${weaponLocked ? "on" : ""}`}
              onClick={() => setWeaponLocked((v) => !v)}
            >
              {weaponLocked ? "🔒 locked" : "🔓 lock weapon"}
            </button>
          </div>

          <div className="hr" style={{ margin: "12px 0" }}></div>

          {/* hero image */}
          {pickedWeapon && (
            <div style={{ margin: "0 0 12px 0" }}>
              <img
                src={heroImage}
                alt={pickedWeapon.name}
                className="heroimg"
                onError={(e) => { e.currentTarget.src = PLACEHOLDER; }}
              />
            </div>
          )}

          {/* attachments (only the 5 selected slots) */}
          {noPool && <div className="subtle">Enable at least one category to roll a weapon.</div>}

          {!noPool && pickedWeapon && (
            <div
              className="grid"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}
            >
              {build.map(({ slot, name }) => (
                <div className="card" key={slot}>
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div>
                      <div className="subtle" style={{ fontSize: 12 }}>{slot}</div>
                      <div style={{ fontWeight: 700 }}>{name || "—"}</div>
                    </div>
                    <div className="row" style={{ gap: 8 }}>
                      {/* lock toggle */}
                      <button
                        className={`badge ${attachmentLocks[slot] ? "on" : ""}`}
                        onClick={() => toggleAttachmentLock(slot)}
                        title={attachmentLocks[slot] ? "Unlock slot" : "Lock slot"}
                      >
                        {attachmentLocks[slot] ? "🔒" : "🔓"}
                      </button>
                      {/* show if preferred influenced */}
                      {preferred.has(slot.toLowerCase()) && (
                        <span className="badge">preferred</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Filters + NEW Preferred slot chips */}
        <div className="panel">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div style={{ fontWeight: 700 }}>Filters</div>
            <div className="subtle">Choose categories</div>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`badge ${allowedCats.includes(cat) ? "on" : ""}`}
                onClick={() => toggleCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hr" style={{ margin: "12px 0" }}></div>

          <div className="row" style={{ justifyContent: "space-between" }}>
            <div style={{ fontWeight: 700 }}>Preferred slots</div>
            <div className="subtle" style={{ fontSize: 12 }}>bias only • not guaranteed</div>
          </div>
          <div className="row" style={{ marginTop: 8, flexWrap: "wrap", gap: 8 }}>
            {(ALL_SLOTS || ["Muzzle","Barrel","Optic","UnderBarrel","Magazine","Reargrip","Stock","Laser","Ammo","Comb"]).map((slotType) => {
              const key = slotType.toLowerCase();
              const on = preferred.has(key);
              return (
                <button
                  key={slotType}
                  className={`badge ${on ? "on" : ""}`}
                  onClick={() => togglePreferredSlot(slotType)}
                  title={on ? "Remove preference" : "Prefer this slot"}
                >
                  {slotType}
                </button>
              );
            })}
          </div>

          <div className="hr" style={{ margin: "12px 0" }}></div>
          <div className="subtle" style={{ fontSize: 13 }}>
            Tip: Preferences increase the chance a slot appears in the 5, but don’t force it. Locks still guarantee inclusion.
          </div>
        </div>
      </div>
 <Toast msg={toast} onDone={() => setToast("")} />
      {/* Sticky mobile Randomize button (visible via CSS on small screens) */}
      <div className="mobile-fab">
        <button className="big-randomize" onClick={rerollAll} title="Randomize">
          <span className="icon">🎲</span> Randomize
        </button>
      </div>
    </div>
  );
}
