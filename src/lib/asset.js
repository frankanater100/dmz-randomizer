// Prefix with Vite's base path in production ('' in dev, '/repo-name/' on GH Pages)
export function asset(p) {
  const base = import.meta.env.BASE_URL || "/";
  return base + String(p || "").replace(/^\/+/, "");
}