// src/pages/Randomizer.jsx
// -------------------------------------------------------------
// DMZ Randomizer (final)
// - Shareable seed/roll via URL
// - Deterministic RNG streams (unless Chaos ON)
// - Category filters, slot locks
// - Preferred controls: Suppressed Muzzle, Larger Mag, No Optic
// - Bias slider affects both slot selection and attachment choice
// -------------------------------------------------------------

import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CATEGORIES, WEAPONS } from "../data/weapons.js";
import { rngFromSeed, pick, sample, randomSeed } from "../lib/rng.js";
import { addFave } from "../lib/faves.js";
import Toast from "../components/Toast.jsx";
import { hasTag } from "../lib/attachTags.js";

/* ===========================
   LocalStorage keys
   =========================== */
const STORAGE_KEY   = "dmz_allowed_categories_v1"; // string[]
const BIAS_KEY      = "dmz_preferred_bias_v1";     // number 0–50
const NO_OPTIC_KEY  = "dmz_no_optic_v1";           // "1" | "0"
const PREF_SUP_KEY  = "dmz_pref_suppressor";       // "1" | "0"
const PREF_EXT_KEY  = "dmz_pref_extended";         // "1" | "0"

const PLACEHOLDER   = "/images/weapons/placeholder.png";

/* ===========================
   Small helpers
   =========================== */
function normSlot(s = "") {
  const k = String(s).toLowerCase();
  if (k === "mag" || k === "mag." || k === "magazines") return "magazine";
  if (k === "muzz" || k === "mzl") return "muzzle";
  return k; // "muzzle", "magazine", "optic", etc.
}

/** Weighted unique sampling (integer weights). */
function weightedSampleUnique(candidates, k, rng, weightFn) {
  if (!candidates.length || k <= 0) return [];
  const expanded = [];
  for (const s of candidates) {
    // Accept float from weightFn and convert to a stable int
    const wFloat = Number(weightFn(s)) || 1;
    const w = Math.max(1, Math.round(wFloat * 10)); // 1.0–2.0 -> 10–20
    for (let i = 0; i < w; i++) expanded.push(s);
  }
  const drawn = sample(expanded, Math.min(expanded.length, k * 8), rng);
  const out = [];
  const seen = new Set();
  for (const s of drawn) {
    if (!seen.has(s)) {
      out.push(s);
      seen.add(s);
      if (out.length === k) break;
    }
  }
  if (out.length < k) {
    for (const s of candidates) {
      if (out.length === k) break;
      if (!seen.has(s)) { out.push(s); seen.add(s); }
    }
  }
  return out.slice(0, k);
}

/** Weighted pick among options (integer weights). */
function weightedPick(options, rng, weightFn) {
  if (!options?.length) return null;
  const expanded = [];
  for (const opt of options) {
    const wFloat = Number(weightFn(opt)) || 1;
    const w = Math.max(1, Math.round(wFloat * 10));
    for (let i = 0; i < w; i++) expanded.push(opt);
  }
  return pick(expanded, rng);
}

export default function Randomizer() {
  /* ===========================
     URL state (shareable)
     =========================== */
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [seed, setSeed] = useState(() => params.get("seed") || randomSeed());
  const [roll, setRoll] = useState(() => Number(params.get("n") || 0));

  /* ===========================
     User controls (persisted)
     =========================== */
  // Allowed weapon categories
  const [allowedCats, setAllowedCats] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [...CATEGORIES]; }
    catch { return [...CATEGORIES]; }
  });

  // Bias strength 0–50% (maps to 1.0–2.0 multiplier)
  const [preferredBias, setPreferredBias] = useState(() => {
    try {
      const n = Number(localStorage.getItem(BIAS_KEY));
      return Number.isFinite(n) ? Math.max(0, Math.min(50, n)) : 25;
    } catch { return 25; }
  });

  // Preferred toggles
  const [preferSuppressor, setPreferSuppressor] = useState(() => {
    try { return localStorage.getItem(PREF_SUP_KEY) === "1"; } catch { return false; }
  });
  const [preferExtendedMag, setPreferExtendedMag] = useState(() => {
    try { return localStorage.getItem(PREF_EXT_KEY) === "1"; } catch { return false; }
  });
  const [noOptic, setNoOptic] = useState(() => {
    try { return localStorage.getItem(NO_OPTIC_KEY) === "1"; } catch { return false; }
  });

  // Chaos + locks
  const [chaos, setChaos] = useState(false);
  const [weaponLocked, setWeaponLocked] = useState(false);
  const [attachmentLocks, setAttachmentLocks] = useState({}); // { [slotName]: true }

  // Misc UI
  const [toast, setToast] = useState("");
  const cardRef = useRef(null);

  /* ===========================
     Persistence + URL sync
     =========================== */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allowedCats));
  }, [allowedCats]);

  useEffect(() => {
    localStorage.setItem(BIAS_KEY, String(preferredBias));
  }, [preferredBias]);

  useEffect(() => {
    localStorage.setItem(NO_OPTIC_KEY, noOptic ? "1" : "0");
  }, [noOptic]);

  useEffect(() => {
    localStorage.setItem(PREF_SUP_KEY, preferSuppressor ? "1" : "0");
  }, [preferSuppressor]);

  useEffect(() => {
    localStorage.setItem(PREF_EXT_KEY, preferExtendedMag ? "1" : "0");
  }, [preferExtendedMag]);

  // Keep URL in sync (seed, roll, category filter)
  useEffect(() => {
    const catsStr = allowedCats.join(",");
    const search = new URLSearchParams({ seed, n: String(roll), cats: catsStr });
    navigate({ pathname: "/", search: `?${search.toString()}` }, { replace: true });
  }, [seed, roll, allowedCats, navigate]);

  /* ===========================
     RNG streams (deterministic unless chaos)
     =========================== */
  const weaponRng = useMemo(
    () => (chaos ? Math.random : rngFromSeed(`${seed}|${roll}|weapon`)),
    [seed, roll, chaos]
  );
  const buildRng = useMemo(
    () => (chaos ? Math.random : rngFromSeed(`${seed}|${roll}|build`)),
    [seed, roll, chaos]
  );

  /* ===========================
     Weapon pool + picked weapon
     =========================== */
  const getCat = (w) => (w.category || w.catergory || "").toString();

  const pool = useMemo(
    () => WEAPONS.filter((w) => allowedCats.includes(getCat(w))),
    [allowedCats]
  );

  const [pickedWeapon, setPickedWeapon] = useState(null);
  useEffect(() => {
    if (weaponLocked && pickedWeapon) return;
    setPickedWeapon(pool.length ? pick(pool, weaponRng) : null);
    setAttachmentLocks({}); // reset slot locks when weapon changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weaponRng, pool.length, weaponLocked]);

  /* ===========================
     Build (exactly 5 slots)
     - Locks guaranteed
     - Prefer Muzzle/Magazine with bias if toggled
     - "No Optic" removes Optic from candidates (unless locked)
     - Inside each chosen slot, prefer tagged attachments with bias
     =========================== */
  const build = useMemo(() => {
    if (!pickedWeapon) return [];

    // slots map like { Muzzle: [...], Barrel: [...], ... }
    const slotsObj =
      pickedWeapon.slots && typeof pickedWeapon.slots === "object" ? pickedWeapon.slots : {};

    const allSlots = Object.keys(slotsObj).filter(
      (s) => Array.isArray(slotsObj[s]) && slotsObj[s].length
    );

    // resolve locks to real slot names (case-insensitive)
    const lockedKeys = Object.keys(attachmentLocks).filter((s) => attachmentLocks[s]);
    const lockedResolved = allSlots.filter((s) =>
      lockedKeys.some((k) => k.toLowerCase() === s.toLowerCase())
    );

    // candidates are the remaining usable slots
    let candidates = allSlots.filter((s) => !lockedResolved.includes(s));

    // honor "No Optic" *unless* Optic is locked
    const opticIsLocked = lockedResolved.some((s) => normSlot(s) === "optic");
    if (noOptic && !opticIsLocked) {
      candidates = candidates.filter((s) => normSlot(s) !== "optic");
    }

    const need = Math.max(0, 5 - lockedResolved.length);

    // bias mapping: 0–50% -> 1.0–2.0 weight multiplier
    const biasMult = 1 + preferredBias / 50;

    // slot-level weight: prefer muzzle/mag when corresponding toggle is ON
    const slotWeight = (slotName) => {
      const k = normSlot(slotName);
      if (preferSuppressor && k === "muzzle")    return biasMult;
      if (preferExtendedMag && k === "magazine") return biasMult;
      return 1;
    };

    const biased = weightedSampleUnique(candidates, need, buildRng, slotWeight);
    const finalSlots = [...lockedResolved, ...biased].slice(0, 5);

    // pick an attachment for each chosen slot (deterministic per slot)
    return finalSlots.map((slot) => {
      const options = slotsObj[slot] || [];
      const rng = rngFromSeed(`${seed}|${roll}|slot:${slot}`);

      let name = null;
      if (options.length) {
        const k = normSlot(slot);

        // attachment-level weight: prefer suppressors/extended mags if toggled
        const attachWeight = (optName) => {
          let w = 1;
          if (k === "muzzle" && preferSuppressor && hasTag(optName, "suppressor")) {
            w = biasMult;
          } else if (k === "magazine" && preferExtendedMag && hasTag(optName, "extended")) {
            w = biasMult;
          }
          return w;
        };

        name = weightedPick(options, rng, attachWeight) || pick(options, rng);
      }

      return { slot, name };
    });
  }, [
    pickedWeapon,
    buildRng,
    attachmentLocks,
    preferredBias,
    noOptic,
    seed,
    roll,
    preferSuppressor,
    preferExtendedMag,
  ]);

  /* ===========================
     UI actions
     =========================== */
  const rerollAll = () => setRoll((r) => r + 1);
  const rerollWeaponOnly = () => { if (!weaponLocked) setRoll((r) => r + 1); };
  const rerollSeedEntirely = () => { setSeed(randomSeed()); setRoll(0); };

  const toggleCat = (cat) =>
    setAllowedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const toggleAttachmentLock = (slot) =>
    setAttachmentLocks((prev) => ({ ...prev, [slot]: !prev[slot] }));

  const copyPermalink = () => {
    navigator.clipboard.writeText(window.location.href);
    setToast("Link copied!");
  };

  /* ===========================
     Derived UI bits
     =========================== */
  const noPool = pool.length === 0;
  const heroImage = pickedWeapon?.image || PLACEHOLDER;

  function saveCurrentBuild() {
    if (!pickedWeapon) return;
    const cat = pickedWeapon.category || pickedWeapon.catergory || "Unknown";
    addFave({
      weapon: pickedWeapon.name,
      category: cat,
      image: heroImage,
      seed,
      roll,
      attachments: build.map((b) => ({ slot: b.slot, name: b.name })),
    });
    setToast("Saved to favorites!");
  }

  /* ===========================
     Render
     =========================== */
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

          <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
            <button className="btn ghost" onClick={copyPermalink}>Copy permalink</button>
            <button className="btn" onClick={rerollAll}>Reroll all</button>
            <button className="btn" onClick={rerollWeaponOnly} disabled={weaponLocked}>Reroll weapon</button>
            <button className="btn accent" onClick={rerollSeedEntirely}>New seed</button>
            <button
              className={`badge ${chaos ? "on" : ""}`}
              onClick={() => setChaos((v) => !v)}
              title="Extra randomness"
              aria-pressed={chaos}
            >
              {chaos ? "🧨 Chaos ON" : "✨ Chaos OFF"}
            </button>
          </div>
        </div>
      </div>

      {/* Big Randomize button */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button className="big-randomize" onClick={rerollAll}>
          <span className="icon">🎲</span> Randomize
        </button>
      </div>

      {/* Two-column: main card | filters */}
      <div className="two-col">
        {/* Main card */}
        <div className="panel main-card" ref={cardRef}>
          {/* header */}
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="row" style={{ gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
              <div className="big">{pickedWeapon ? pickedWeapon.name : "No weapon"}</div>
              <span className={`badge ${pickedWeapon ? getCat(pickedWeapon) : ""}`}>
                {pickedWeapon ? getCat(pickedWeapon) : "—"}
              </span>
              <button className="btn" onClick={saveCurrentBuild}>⭐ Save build</button>
            </div>
            <button
              className={`badge ${weaponLocked ? "on" : ""}`}
              onClick={() => setWeaponLocked((v) => !v)}
              aria-pressed={weaponLocked}
            >
              {weaponLocked ? "🔒 locked" : "🔓 lock weapon"}
            </button>
          </div>

          <div className="hr" style={{ margin: "12px 0" }} />

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

          {/* attachment tiles */}
{noPool && <div className="subtle">Enable at least one category to roll a weapon.</div>}

{!noPool && pickedWeapon && (
  <div
    className="grid"
    style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}
  >
    {build.map(({ slot, name }) => {
      const k = normSlot(slot);

      // show badge only if attachment itself matches the preference
      const isPreferredAttachment =
        (k === "muzzle"   && preferSuppressor && name && hasTag(name, "suppressor")) ||
        (k === "magazine" && preferExtendedMag && name && hasTag(name, "extended"));

      return (
        <div className="card" key={slot}>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div>
              <div className="subtle" style={{ fontSize: 12 }}>{slot}</div>
              <div style={{ fontWeight: 700 }}>{name || "—"}</div>
            </div>
            <div className="row" style={{ gap: 8 }}>
              <button
                className={`badge ${attachmentLocks[slot] ? "on" : ""}`}
                onClick={() => toggleAttachmentLock(slot)}
                title={attachmentLocks[slot] ? "Unlock slot" : "Lock slot"}
                aria-pressed={!!attachmentLocks[slot]}
              >
                {attachmentLocks[slot] ? "🔒" : "🔓"}
              </button>
              {isPreferredAttachment && <span className="badge">preferred</span>}
            </div>
          </div>
        </div>
      );
    })}
  </div>
)}
</div>

{/* Filters panel */}
<div className="panel">
  {/* categories */}
  <div className="row" style={{ justifyContent: "space-between" }}>
    <div style={{ fontWeight: 700 }}>Filters</div>
    <div className="subtle">Choose categories</div>
  </div>

  <div className="row" style={{ marginTop: 8, flexWrap: "wrap", gap: 8 }}>
    {CATEGORIES.map((cat) => (
      <button
        key={cat}
        className={`badge ${allowedCats.includes(cat) ? "on" : ""}`}
        onClick={() => toggleCat(cat)}
        aria-pressed={allowedCats.includes(cat)}
      >
        {cat}
      </button>
    ))}
  </div>

  <div className="hr" style={{ margin: "12px 0" }} />

  {/* preferred controls */}
  <div className="row" style={{ justifyContent: "space-between" }}>
    <div style={{ fontWeight: 700 }}>Preferred attachments</div>
    <div className="subtle" style={{ fontSize: 12 }}>bias only • not guaranteed</div>
  </div>

  <div className="row" style={{ marginTop: 8, flexWrap: "wrap", gap: 8 }}>
    <button
      className={`badge ${preferSuppressor ? "on" : ""}`}
      onClick={() => setPreferSuppressor(v => !v)}
      aria-pressed={preferSuppressor}
      title="When MUZZLE is chosen, favor suppressors if available"
    >
      Suppressed Muzzle
    </button>

    <button
      className={`badge ${preferExtendedMag ? "on" : ""}`}
      onClick={() => setPreferExtendedMag(v => !v)}
      aria-pressed={preferExtendedMag}
      title="When MAGAZINE is chosen, favor extended/high-capacity options"
    >
      Larger Mag
    </button>

    <button
      className={`badge ${noOptic ? "on" : ""}`}
      onClick={() => setNoOptic(v => !v)}
      aria-pressed={noOptic}
      title="Exclude the Optic slot from the 5 (locks still win)"
    >
      No Optic
    </button>
  </div>

  {/* bias slider */}
  <div className="range" style={{ marginTop: 12 }}>
    <div className="labels">
      <span>0%</span>
      <span className="subtle">Bias: {preferredBias}%</span>
      <span>50%</span>
    </div>
    <input
      type="range"
      min={0}
      max={50}
      step={5}
      value={preferredBias}
      onChange={(e) => setPreferredBias(Number(e.target.value))}
      aria-label="Preferred bias (slots & attachments)"
    />
    <div className="subtle" style={{ fontSize: 12, marginTop: 6 }}>
      Higher = preferred slots & attachments appear more often (never guaranteed). Locks always win.
    </div>
  </div>
</div>
</div>

<Toast msg={toast} onDone={() => setToast("")} />

{/* Sticky mobile Randomize */}
<div className="mobile-fab">
  <button className="big-randomize" onClick={rerollAll} title="Randomize">
    <span className="icon">🎲</span> Randomize
  </button>
</div>
</div>
);
}