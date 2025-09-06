// src/lib/attachTags.js
import { ATTACHMENT_TAGS } from "../data/tags.js";

// Heuristics (tight!)
const SUPPRESSOR_KEYWORDS   = ["suppressor","silencer","monolithic","oil can","agent","bore","vt-7","polarfire","mkv","rr-40","talon","reaper","black kite","dreadnought","schalldampfer"];
const EXTENDED_MAG_KEYWORDS = ["drum","extended","casket","quadstack","quad-stack","high capacity","high-capacity","c-mag","beta mag"];

export function hasTag(name, tag){
  if (!name) return false;
  const keyLc = String(name).toLowerCase().trim();

  // 1) Exact mapping from your data/tags.js (case-insensitive)
  const directTags = ATTACHMENT_TAGS[name] || ATTACHMENT_TAGS[keyLc] || ATTACHMENT_TAGS[normalizeKey(name)] || [];
  if (directTags.includes(tag)) return true;

  // 2) Fallback heuristics (only if not explicitly tagged)
  if (tag === "suppressor") return containsAny(keyLc, SUPPRESSOR_KEYWORDS);
  if (tag === "extended")   return isExtendedMag(keyLc);

  return false;
}

// --- Helpers ---
function containsAny(text, needles){
  return needles.some(k => text.includes(k));
}

function normalizeKey(s){
  return String(s).toLowerCase().replace(/\s+/g, " ").trim();
}

// Extended-mag detection that DOESN'T flag normal mags
function isExtendedMag(keyLc){
  // Explicit words (drum, extended, casket, etc.)
  if (containsAny(keyLc, EXTENDED_MAG_KEYWORDS)) return true;

  // Parse “NN Round Mag”, “NN-Round Drum”, etc.
  // Treat >= 45 as extended (tweak threshold if you like)
  const m = keyLc.match(/(\d+)\s*-?\s*(round|rd)s?\b/);
  if (m) {
    const n = parseInt(m[1], 10);
    if (Number.isFinite(n) && n >= 45) return true; // e.g., 45, 50, 60, 100
  }

  // “Box Mag”, “Belt Mag” typically extended if large numbers present
  if (/box mag|belt mag|belt/i.test(keyLc)) {
    const n2 = keyLc.match(/(\d+)\s*(round|rd)s?\b/);
    if (n2) {
      const cnt = parseInt(n2[1], 10);
      if (Number.isFinite(cnt) && cnt >= 45) return true;
    }
  }

  return false;
}