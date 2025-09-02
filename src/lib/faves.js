// src/lib/faves.js
const KEY = "dmz_favorites_v1";

export function listFaves() {
  try {
    const raw = localStorage.getItem(KEY) || "[]";
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function addFave(build) {
  // Unique id by weapon + seed + roll
  const id = `${(build.weapon || "").toLowerCase()}|${build.seed}|${build.roll}`;
  const rec = { id, ...build, savedAt: Date.now() };

  const all = listFaves();
  if (!all.some(x => x.id === id)) {
    all.unshift(rec);
    // keep at most 50
    localStorage.setItem(KEY, JSON.stringify(all.slice(0, 50)));
  }
  return rec;
}

export function removeFave(id) {
  const filtered = listFaves().filter(x => x.id !== id);
  localStorage.setItem(KEY, JSON.stringify(filtered));
}