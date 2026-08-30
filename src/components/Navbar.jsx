import React from 'react';

export default function Navbar() {
  return (
    <>
      <header className="nav" id="nav">
  <div className="scroll-progress-bar" id="scrollProgress"></div>
  <div className="nav-inner">
    <a href="#top" className="nav-logo">MARC SANCHO<span className="logo-dot">.</span></a>

    <nav className="nav-links" id="navLinks">
      <a href="#about"><span className="idx">01</span><span data-i18n="nav_about">Sobre mí</span></a>
      <a href="#stack"><span className="idx">02</span><span data-i18n="nav_stack">Stack</span></a>
      <a href="#lab"><span className="idx">03</span><span data-i18n="nav_lab">El Lab</span></a>
      <a href="#proyectos"><span className="idx">04</span><span data-i18n="nav_projects">Proyectos</span></a>
      <a href="#formacion"><span className="idx">05</span><span data-i18n="nav_education">Formación</span></a>
      <a href="#contacto"><span className="idx">06</span><span data-i18n="nav_contact">Contacto</span></a>
    </nav>

    <div className="nav-actions">
      {/* Selector de Idiomas Desplegable Robusto */}
      <div className="lang-selector-wrapper">
        <select className="lang-select" id="langSelect" aria-label="Cambiar idioma">
          <option value="es">ES</option>
          <option value="va">VA</option>
          <option value="en">EN</option>
        </select>
      </div>

      <button className="btn btn-cv-sm" id="downloadCvBtnNav">📄 CV</button>
      <button className="nav-toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
    </>
  );
}
