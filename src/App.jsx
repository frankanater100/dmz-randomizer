// src/App.jsx
import { Routes, Route, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";

const Randomizer = lazy(() => import("./pages/Randomizer.jsx"));
const Gunsmith   = lazy(() => import("./pages/Gunsmith.jsx")); // ⬅️ new
const Favorites  = lazy(() => import("./pages/Favorites.jsx"));
const Updates    = lazy(() => import("./pages/Updates.jsx"));
const NotFound   = lazy(() => import("./pages/NotFound.jsx"));

export default function App(){
  return (
    <div className="app">
      <header className="topbar">
        <nav className="nav" aria-label="Primary">
          <div className="brand">
            <img className="logo" src="/images/logo.png" alt="DMZ Randomizer logo" />
            <span className="title">DMZ Randomizer</span>
          </div>
          <div className="links">
            <NavLink to="/"          className="navlink" end>Randomizer</NavLink>
            <NavLink to="/gunsmith"  className="navlink">Gunsmith</NavLink> {/* ⬅️ rename */}
            <NavLink to="/favorites" className="navlink">Favorites</NavLink>
            <NavLink to="/updates"   className="navlink">Updates</NavLink>
          </div>
        </nav>
      </header>

      <main className="container" role="main">
        <Suspense fallback={<div className="panel subtle">⚙️ Extracting intel…</div>}>
          <Routes>
            <Route path="/"          element={<Randomizer />} />
            <Route path="/gunsmith"  element={<Gunsmith />} />   {/* ⬅️ new route */}
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/updates"   element={<Updates />} />
            <Route path="*"          element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        DMZ Randomizer • <span className="subtle">beta build</span>
      </footer>
    </div>
  );
}