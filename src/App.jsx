// src/App.jsx
// -------------------------------------------------------------
// DMZ Randomizer — App shell
// - Brand on the left, links on the right
// - Lazy-load routes
// - GA4 page_view on every route change (SPA safe)
// -------------------------------------------------------------
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

// ---------- Lazy routes (code-split) ----------
const Randomizer = lazy(() => import("./pages/Randomizer.jsx"));
const Weapons    = lazy(() => import("./pages/Weapons.jsx"));
const Favorites  = lazy(() => import("./pages/Favorites.jsx"));
const Updates    = lazy(() => import("./pages/Updates.jsx"));
const NotFound   = lazy(() => import("./pages/NotFound.jsx"));

// ---------- CONFIG: GA4 Measurement ID (hardcoded on purpose) ----------
const GA_ID = "G-YLZQGKWQCV"; // <-- YOUR REAL GA4 ID

// ---------- Hook: send GA4 page views on SPA route changes ----------
function useGAPageViews() {
  const location = useLocation();

  useEffect(() => {
    // If GA isn't loaded (ad blocker / local), fail silently.
    if (typeof window === "undefined" || !window.gtag) return;

    const page_path = location.pathname + location.search;
    // Send an explicit page_view for SPA navigation
    window.gtag("config", GA_ID, { page_path });
  }, [location]);
}

// ---------- App ----------
export default function App() {
  useGAPageViews();

  return (
    <div className="app">
      {/* Top navigation bar */}
      <header className="topbar">
        <nav className="nav" aria-label="Primary">
          {/* Brand (left) */}
          <div className="brand">
            <img className="logo" src="/images/logo.png" alt="DMZ Randomizer logo" />
            <span className="title">DMZ Randomizer</span>
          </div>

          {/* Links (right) */}
          <div className="links">
            <NavLink to="/" end className="navlink">Randomizer</NavLink>
            <NavLink to="/weapons"   className="navlink">Weapons</NavLink>
            <NavLink to="/favorites" className="navlink">Favorites</NavLink>
            <NavLink to="/updates"   className="navlink">Updates</NavLink>
          </div>
        </nav>
      </header>

      {/* Route outlet */}
      <main className="container" role="main">
        <Suspense fallback={<div className="panel subtle">⚙️ Extracting intel…</div>}>
          <Routes>
            <Route path="/"          element={<Randomizer />} />
            <Route path="/weapons"   element={<Weapons />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/updates"   element={<Updates />} />
            <Route path="*"          element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="footer">
        DMZ Randomizer • <span className="subtle">beta build</span>
      </footer>
    </div>
  );
}