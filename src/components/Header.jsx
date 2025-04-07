import React, { useState } from 'react';
import logoImage from '../assets/Struqton Structures.png';
import '../styles/Header.css';

function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="logo">
        <img src={logoImage} alt="Struqton Structural Logo" />
      </div>
      
      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#clients" onClick={closeMenu}>Clients</a></li>
          <li><a href="#location" onClick={closeMenu}>Location</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
      
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </header>
  );
}

export default Header; 