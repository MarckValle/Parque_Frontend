import React from "react";
import { useLocation } from 'react-router-dom';

function NavBar() {

  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#4C7737", padding: "10px 20px" }}>
      <div className="container-fluid d-flex justify-content-center">
        {/* Botón Toggle para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links del menú */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link text-white fw-bold rounded px-3 ${location.pathname === "/home/" ? "active" : ""}`} href="/home/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-white fw-bold rounded px-3 ${location.pathname === "/avistamientos/" ? "active" : ""}`} href="/avistamientos/">Avistamientos</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-white fw-bold rounded px-3 ${location.pathname === "/nosotros/" ? "active" : ""}`} href="/nosotros/">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-white fw-bold rounded px-3 ${location.pathname === "/flora_fauna/" ? "active" : ""}`} href="/flora_fauna/">Flora y Fauna</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-white fw-bold rounded px-3 ${location.pathname === "/juegos/" ? "active" : ""}`} href="/juegos/">Juegos</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-white fw-bold rounded px-3 ${location.pathname === "/contacto/" ? "active" : ""}`} href="/contacto/">Contáctanos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
