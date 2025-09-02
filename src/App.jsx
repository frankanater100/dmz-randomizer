// src/App.jsx
import { Routes, Route, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";

// 🔻 lazy-load pages (each becomes its own chunk)
const Randomizer = lazy(() => import(/* webpackChunkName: "page-randomizer" */ "./pages/Randomizer.jsx"));
const Weapons    = lazy(() => import(/* webpackChunkName: "page-weapons" */ "./pages/Weapons.jsx"));
const Favorites  = lazy(() => import(/* webpackChunkName: "page-favorites" */ "./pages/Favorites.jsx"));
// If you have NotFound.jsx:
const NotFound   = lazy(() => import(/* webpackChunkName: "page-notfound" */ "./pages/NotFound.jsx"));

export default function App(){
  return (
    <div className="app">
      <div className="topbar">
        <nav className="nav">
          <NavLink className="navlink" to="/">Randomizer</NavLink>
          <NavLink className="navlink" to="/weapons">Weapons</NavLink>
          <NavLink className="navlink" to="/favorites">Favorites</NavLink>
        </nav>
      </div>

      <main className="container">
        {/* A light, styled fallback while chunks load */}
        <Suspense fallback={<div className="panel">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Randomizer />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">DMZ Randomizer • beta</footer>
    </div>
  );
}