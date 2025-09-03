// src/pages/Randomizer.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CATEGORIES, WEAPONS, ALL_SLOTS } from "../data/weapons.js";
import { rngFromSeed, pick, sample, randomSeed } from "../lib/rng.js";
import { addFave } from "../lib/faves.js";
import Toast from "../components/Toast.jsx";

const STORAGE_KEY  = "dmz_allowed_categories_v1";
const PREFS_KEY    = "dmz_preferred_slots_v1";
const BIAS_KEY     = "dmz_preferred_bias_v1";
const PLACEHOLDER  = "/images/weapons/placeholder.png";

export default function Randomizer() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  // Shareable state via URL
  const [seed, setSeed] = useState(() => params.get("seed") || randomSeed());
  const [roll, setRoll] = useState(() => Number(params.get("n") || 0));

  // Extra randomness (breaks determinism on purpose)
  const [chaos, setChaos] = useState(false);

  // Category filter (persisted)
  const [allowedCats, setAllowedCats] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [...CATEGORIES]; }
    catch { return [...CATEGORIES]; }
  });

  // Preferred slot types (persisted)
  const [preferred, setPreferred] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(PREFS_KEY)) || []); }
    catch { return new Set(); }
  });

  // Preferred bias strength 0–50% (persisted)
  const [preferredBias, setPreferredBias] = useState(() => {
    try {
      const v = Number(localStorage.getItem(BIAS_KEY));
      return Number.isFinite(v) ? Math.max(0, Math.min(50, v)) : 25;
    } catch { return 25; }
  });

  const [weaponLocked, setWeaponLocked] = useState(false);
  const [attachmentLocks, setAttachmentLocks] = useState({}); // {slotName: true}
  const [toast, setToast] = useState("");

  // Keep URL and storage in sync
  useEffect(() => {
    const catsStr = allowedCats.join(",");
    const search = new URLSearchParams({ seed, n: String(roll), cats: catsStr });
    navigate({ pathname: "/", search: `?${search.toString()}` }, { replace: true });
  }, [seed, roll, allowedCats, navigate]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allowedCats));
  }, [allowedCats]);

  useEffect(() => {
    localStorage.setItem(PREFS_KEY, JSON.stringify(Array.from(preferred)));
  }, [preferred]);

  useEffect(() => {
    localStorage.setItem(BIAS_KEY, String(preferredBias));
  }, [preferredBias]);

  // Deterministic RNG streams unless chaos=true
  const weaponRng = useMemo(
    () => (chaos ? Math.random : rngFromSeed(`${seed}|${roll}|weapon`)),
    [seed, roll, chaos]
  );
  const buildRng = useMemo(
    () => (chaos ? Math.random : rngFromSeed(`${seed}|${roll}|build`)),
    [seed, roll, chaos]
  );

  // Defensive category read (handles "catergory" typo)
  const getCat = (w) => (w.category || w.catergory || "").toString();

  // Weapon pool by allowed categories
  const pool = useMemo(
    () => WEAPONS.filter((w) => allowedCats.includes(getCat(w))),
    [allowedCats]
  );

  // Current weapon (resets locks on change unless locked)
  const [pickedWeapon, setPickedWeapon] = useState(null);
  useEffect(() => {
    if (weaponLocked && pickedWeapon) return;
    setPickedWeapon(pool.length ? pick(pool, weaponRng) : null);
    setAttachmentLocks({}); // reset per-weapon
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weaponRng, pool.length, weaponLocked]);

  // Helper: weighted unique sampling
  function weightedSampleUnique(candidates, k, rng, weightFn) {
    if (!candidates.length || k <= 0) return [];
    const expanded = [];
    for (const s of candidates) {
      const w = Math.max(1, Number(weightFn(s)) || 1);
      for (let i = 0; i < w; i++) expanded.push(s);
    }
    const draws = Math.min(expanded.length, k * 6);
    const drawn = sample(expanded, draws, rng);
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

  // Build exactly 5 slots; prefer chosen slot types by bias (never guaranteed)
  const build = useMemo(() => {
    if (!pickedWeapon) return [];

    const slotsObj =
      pickedWeapon.slots && typeof pickedWeapon.slots === "object" ? pickedWeapon.slots : {};
    const allSlots = Object.keys(slotsObj).filter(
      (s) => Array.isArray(slotsObj[s]) && slotsObj[s].length
    );

    // Resolve locks to real slot names (case-insensitive)
    const lockedSlots = Object.keys(attachmentLocks).filter((s) => attachmentLocks[s]);
    const lockedResolved = allSlots.filter((s) =>
      lockedSlots.some((ls) => ls.toLowerCase() === s.toLowerCase())
    );

    const excluded = new Set(lockedResolved);
    const candidates = allSlots.filter((s) => !excluded.has(s));
    const need = Math.max(0, 5 - lockedResolved.length);

    // 0–50% -> x1.0–x2.0 multiplier for preferred slots
    const weight = (s) => {
      const mult = 1 + preferredBias / 50;
      return preferred.has(s.toLowerCase()) ? mult : 1;
    };

    const biased = weightedSampleUnique(candidates, need, buildRng, weight);
    const finalSlots = [...lockedResolved, ...biased].slice(0, 5);

    // Pick one attachment per chosen slot
    return finalSlots.map((slot) => {
      const options = slotsObj[slot] || [];
      const rng = rngFromSeed(`${seed}|${roll}|slot:${slot}`);
      const name = options.length ? pick(options, rng) : null;
      return { slot, name };
    });
  }, [pickedWeapon, buildRng, attachmentLocks, preferred, preferredBias, seed, roll]);

  // Actions
  const rerollAll         = () => setRoll((r) => r + 1);
  const rerollWeaponOnly  = () => { if (!weaponLocked) setRoll((r) => r + 1); };
  const rerollSeedEntirely= () => { setSeed(randomSeed()); setRoll(0); };
  const toggleCat         = (cat) =>
    setAllowedCats((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
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
      attachments: build.map((b) => ({ slot: b.slot, name: b.name })),
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
          <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
            <button className="btn ghost" onClick={copyPermalink}>Copy permalink</button>
            <button className="btn" onClick={rerollAll}>Reroll all</button>
            <button className="btn" onClick={rerollWeaponOnly} disabled={weaponLocked}>Reroll weapon</button>
            <button className="btn accent" onClick={rerollSeedEntirely}>New seed</button>
            <button
              className={`badge ${chaos ? "on" : ""}`}
              onClick={() => setChaos((v) => !v)}
              title="Extra randomness"
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

      {/* Main card + Filters */}
      <div className="two-col">
        {/* Main card */}
        <div className="panel main-card" ref={cardRef}>
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
            >
              {weaponLocked ? "🔒 locked" : "🔓 lock weapon"}
            </button>
          </div>

          <div className="hr" style={{ margin: "12px 0" }} />

          {/* Hero image */}
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

          {/* Attachments (selected 5 only) */}
          {noPool && <div className="subtle">Enable at least one category to roll a weapon.</div>}

          {!noPool && pickedWeapon && (
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {build.map(({ slot, name }) => (
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
                      >
                        {attachmentLocks[slot] ? "🔒" : "🔓"}
                      </button>
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

        {/* Filters */}
        <div className="panel">
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
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hr" style={{ margin: "12px 0" }} />

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

          {/* Bias slider */}
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

      {/* Sticky mobile Randomize button */}
      <div className="mobile-fab">
        <button className="big-randomize" onClick={rerollAll} title="Randomize">
          <span className="icon">🎲</span> Randomize
        </button>
      </div>
    </div>
  );
}