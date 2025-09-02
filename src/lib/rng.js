// Deterministic RNG helpers for shareable seeds.
function hashToSeed(str) {
  let h = 1779033703 ^ (str?.length || 0);
  for (let i = 0; i < (str?.length || 0); i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return (h >>> 0);
}
function mulberry32(a) {
  return function() {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function rngFromSeed(seedStr) {
  return mulberry32(hashToSeed(String(seedStr)));
}
export function pick(array, rnd) {
  return array[Math.floor(rnd() * array.length)];
}
export function sample(array, k, rnd) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, k);
}
export function randomSeed() {
  const b = new Uint32Array(3);
  (crypto?.getRandomValues?.(b) ?? [Date.now(), Math.random()*1e9, performance.now()]);
  return [...b].map(n => n.toString(36)).join("-");
}