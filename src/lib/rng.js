// src/lib/rng.js

// Fast string hash → 32-bit (xfnv1a)
function xfnv1a(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Mulberry32 PRNG from 32-bit seed
function mulberry32(a) {
  return function() {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// Create deterministic RNG from seed string
export function rngFromSeed(seedStr) {
  const seed = xfnv1a(String(seedStr));
  return mulberry32(seed);
}

// Crypto-strong seed (non-deterministic)
export function randomSeed(bytes = 8) {
  const a = new Uint8Array(bytes);
  (crypto || window.crypto).getRandomValues(a);
  return Array.from(a, b => b.toString(16).padStart(2, "0")).join("");
}

// Uniform pick using RNG fn that returns [0,1)
export function pick(arr, rng) {
  if (!arr?.length) return null;
  const i = Math.floor(rng() * arr.length);
  return arr[i];
}

// Fisher–Yates shuffle (in-place, uses supplied RNG)
export function shuffle(arr, rng) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Sample k unique items without bias
export function sample(arr, k, rng) {
  const a = arr.slice();
  shuffle(a, rng);
  return a.slice(0, Math.min(k, a.length));
}