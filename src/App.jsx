// src/App.jsx
import { Routes, Route, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";

const Randomizer = lazy(() => import("./pages/Randomizer.jsx"));
const Weapons    = lazy(() => import("./pages/Weapons.jsx"));
const Favorites  = lazy(() => import("./pages/Favorites.jsx"));
const Updates    = lazy(() => import("./pages/Updates.jsx"));
const NotFound   = lazy(() => import("./pages/NotFound.jsx"));

export default function App(){
  return (
    <div className="app">
      <header className="topbar">
        <nav className="nav" aria-label="Primary">
          <div className="brand">
            <img src="/images/logo.png" alt="DMZ Randomizer" className="logo" />
            <span className="title label-caps">DMZ Randomizer</span>
          </div>
          <div className="links">
            <NavLink className="navlink" to="/">Randomizer</NavLink>
            <NavLink className="navlink" to="/weapons">Weapons</NavLink>
            <NavLink className="navlink" to="/favorites">Favorites</NavLink>
            <NavLink className="navlink" to="/updates">Updates</NavLink>
          </div>
        </nav>
      </header>

      <main className="container">
        <Suspense fallback={<div className="panel">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Randomizer />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">DMZ Randomizer • beta</footer>
    </div>
  );
}