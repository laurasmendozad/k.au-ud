import React, { useState } from "react";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa"; // íconos del menú
import logo from "../assets/logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // función para cerrar el menú al dar click en un botón
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="/" className="brand">
          <img src={logo} alt="K.AU-UD logo" className="logo" />
          <span className="slogan">UN CIELO DONDE EL ALMA TIENE SU PUERTO</span>
        </a>
      </div>

      <div className="header-right desktop-only">
        <button className="btn">Crear Cuenta</button>
        <button className="btn">Iniciar Sesión</button>
      </div>

      <div className="mobile-only">
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            <button className="btn" onClick={handleMenuClick}>
              Crear Cuenta
            </button>
            <button className="btn" onClick={handleMenuClick}>
              Iniciar Sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
