// src/App.jsx
import { Routes, Route, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";

// ---------- Lazy routes ----------
const Randomizer = lazy(() => import("./pages/Randomizer.jsx"));
const Gunsmith   = lazy(() => import("./pages/Gunsmith.jsx")); // ⬅️ new
const Favorites  = lazy(() => import("./pages/Favorites.jsx"));
const WallOfShame = lazy(() => import("./pages/WallOfShame.jsx"));
const NotFound   = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <div className="app">
      {/* 🔥 Animated background layers */}
      <div className="fx-haze" />   {/* blurred gradient mist */}
      <div className="fx-scan" />   {/* faint CRT scanline effect */}

      {/* Topbar */}
      <header className="topbar">
        <nav className="nav" aria-label="Primary">
          <div className="brand">
            <img className="logo" src="/images/logo.png" alt="DMZ Randomizer logo" />
            <span className="title">DMZ Randomizer</span>
          </div>
          <div className="links">
            <NavLink to="/"          className="navlink" end>Randomizer</NavLink>
            <NavLink to="/gunsmith"  className="navlink">Gunsmith</NavLink>
            <NavLink to="/favorites" className="navlink">Favorites</NavLink>
            <NavLink to="/wall-of-shame" className="navlink">Wall of Shame</NavLink>
          </div>
        </nav>
      </header>

      {/* Main container */}
      <main className="container" role="main">
        <Suspense fallback={<div className="panel subtle">⚙️ Extracting intel…</div>}>
          <Routes>
            <Route path="/"          element={<Randomizer />} />
            <Route path="/gunsmith"  element={<Gunsmith />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/wall-of-shame" element={<WallOfShame />} />
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
