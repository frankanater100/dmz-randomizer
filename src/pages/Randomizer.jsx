// src/pages/Randomizer.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CATEGORIES, WEAPONS } from "../data/weapons.js";
import { rngFromSeed, pick, sample, randomSeed } from "../lib/rng.js";
import { addFave } from "../lib/faves.js";
import Toast from "../components/Toast.jsx";

/* ===========================
   LocalStorage keys
   =========================== */
const STORAGE_KEY   = "dmz_allowed_categories_v1";
const PREFS_KEY     = "dmz_preferred_slots_v1";     // stores ["muzzle","magazine"]
const BIAS_KEY      = "dmz_preferred_bias_v1";      // 0–50
const NO_OPTIC_KEY  = "dmz_no_optic_v1";            // "1" | "0"
const PLACEHOLDER   = "/images/weapons/placeholder.png";

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
  // allowed weapon categories
  const [allowedCats, setAllowedCats] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [...CATEGORIES]; }
    catch { return [...CATEGORIES]; }
  });

  // preferred slot types (lowercase members of: "muzzle", "magazine")
  const [preferred, setPreferred] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(PREFS_KEY)) || []); }
    catch { return new Set(); }
  });

  // how strong the preference bias should be (0–50)
  const [preferredBias, setPreferredBias] = useState(() => {
    try {
      const n = Number(localStorage.getItem(BIAS_KEY));
      return Number.isFinite(n) ? Math.max(0, Math.min(50, n)) : 25;
    } catch { return 25; }
  });

  // exclude the Optic slot entirely unless it’s locked
  const [noOptic, setNoOptic] = useState(() => {
    try { return localStorage.getItem(NO_OPTIC_KEY) === "1"; }
    catch { return false; }
  });

  // chaos mode breaks determinism on purpose
  const [chaos, setChaos] = useState(false);

  // lock controls
  const [weaponLocked, setWeaponLocked] = useState(false);
  const [attachmentLocks, setAttachmentLocks] = useState({}); // { [slotName]: true }

  // misc ui
  const [toast, setToast] = useState("");
  const cardRef = useRef(null);

  /* ===========================
     Persistence + URL sync
     =========================== */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allowedCats));
  }, [allowedCats]);

  useEffect(() => {
    localStorage.setItem(PREFS_KEY, JSON.stringify(Array.from(preferred)));
  }, [preferred]);

  useEffect(() => {
    localStorage.setItem(BIAS_KEY, String(preferredBias));
  }, [preferredBias]);

  useEffect(() => {
    localStorage.setItem(NO_OPTIC_KEY, noOptic ? "1" : "0");
  }, [noOptic]);

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
     Helpers
     =========================== */
  // Sample up to k unique items, with an integer weight per item.
  function weightedSampleUnique(candidates, k, rng, weightFn) {
    if (!candidates.length || k <= 0) return [];
    const expanded = [];
    for (const s of candidates) {
      const w = Math.max(1, Number(weightFn(s)) || 1);
      for (let i = 0; i < w; i++) expanded.push(s);
    }
    const drawn = sample(expanded, Math.min(expanded.length, k * 6), rng);
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

  /* ===========================
     Build: choose exactly 5 slots
     - Locks are guaranteed
     - Preferred slots get higher weight
     - "No Optic" removes Optic from candidates (unless locked)
     =========================== */
  const build = useMemo(() => {
    if (!pickedWeapon) return [];

    // normalized slots map like { Muzzle: [...], Barrel: [...], ... }
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
    const opticIsLocked = lockedResolved.some((s) => s.toLowerCase() === "optic");
    if (noOptic && !opticIsLocked) {
      candidates = candidates.filter((s) => s.toLowerCase() !== "optic");
    }

    const need = Math.max(0, 5 - lockedResolved.length);

    // bias mapping: 0–50% -> 1.0–2.0 weight multiplier
    const biasMult = 1 + preferredBias / 50;
    const weight = (s) => (preferred.has(s.toLowerCase()) ? biasMult : 1);

    const biased = weightedSampleUnique(candidates, need, buildRng, weight);
    const finalSlots = [...lockedResolved, ...biased].slice(0, 5);

    // pick a single attachment for each chosen slot (deterministic per slot)
    return finalSlots.map((slot) => {
      const options = slotsObj[slot] || [];
      const rng = rngFromSeed(`${seed}|${roll}|slot:${slot}`);
      const name = options.length ? pick(options, rng) : null;
      return { slot, name };
    });
  }, [pickedWeapon, buildRng, attachmentLocks, preferred, preferredBias, noOptic, seed, roll]);

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
  const togglePreferredSlot = (slotType) => {
    const key = slotType.toLowerCase();
    setPreferred((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };
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
              {build.map(({ slot, name }) => (
                <div className="card" key={slot}>
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div>
                      <div className="subtle" style={{ fontSize: 12 }}>{slot}</div>
                      <div style={{ fontWeight: 700 }}>{name || "—"}</div>
                    </div>
                    <div className="row" style={{ gap: 8 }}>
                      {/* lock/unlock this slot */}
                      <button
                        className={`badge ${attachmentLocks[slot] ? "on" : ""}`}
                        onClick={() => toggleAttachmentLock(slot)}
                        title={attachmentLocks[slot] ? "Unlock slot" : "Lock slot"}
                        aria-pressed={!!attachmentLocks[slot]}
                      >
                        {attachmentLocks[slot] ? "🔒" : "🔓"}
                      </button>
                      {/* label if this slot is in preferred set */}
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

          {/* preferred controls (minimal: 3 buttons) */}
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div style={{ fontWeight: 700 }}>Preferred slots</div>
            <div className="subtle" style={{ fontSize: 12 }}>bias only • not guaranteed</div>
          </div>

          <div className="row" style={{ marginTop: 8, flexWrap: "wrap", gap: 8 }}>
            {/* Prefer Suppressor (Muzzle) */}
            <button
              className={`badge ${preferred.has("muzzle") ? "on" : ""}`}
              onClick={() => togglePreferredSlot("Muzzle")}
              aria-pressed={preferred.has("muzzle")}
            >
              Prefer Suppressor
            </button>

            {/* Prefer Extended Mag (Magazine) */}
            <button
              className={`badge ${preferred.has("magazine") ? "on" : ""}`}
              onClick={() => togglePreferredSlot("Magazine")}
              aria-pressed={preferred.has("magazine")}
            >
              Prefer Extended Mag
            </button>

            {/* Exclude the Optic slot entirely (unless locked) */}
            <button
              className={`badge ${noOptic ? "on" : ""}`}
              onClick={() => setNoOptic((v) => !v)}
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
              aria-label="Preferred slot bias"
            />
            <div className="subtle" style={{ fontSize: 12, marginTop: 6 }}>
              Higher = preferred slots appear more often (never guaranteed). Locks always win.
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