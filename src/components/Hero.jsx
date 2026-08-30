import React from 'react';

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
    <div className="hero-spotlight" id="heroSpotlight"></div>
    <canvas id="heroCanvas" className="hero-canvas" aria-hidden="true"></canvas>
    
    <div className="hero-content">
      <div className="hero-badge">
        <span className="live-dot"></span>
        <span data-i18n="hero_badge">Disponible para prácticas e incorporación inmediata</span>
      </div>

      <h1 className="hero-title"><span data-i18n="hero_title_1">DESARROLLADOR WEB</span> <span data-i18n="hero_title_2">&amp; MULTIPLATAFORMA</span></h1>
      
      <p className="hero-subtitle">
        <span id="typewriterRole">Estudiante Doble Grado DAM · DAW</span><span className="typewriter-cursor">|</span>
        <span className="subtitle-divider" data-i18n="hero_sub_divider">— Especialista en Soporte IT (Matrícula de Honor en SMR)</span>
      </p>

      <div className="hero-meta-grid">
        <div className="meta-card">
          <span className="meta-label" data-i18n="meta_loc_lbl">Ubicación</span>
          <span className="meta-val" data-i18n="meta_loc_val">Xátiva, Valencia</span>
        </div>
        <div className="meta-card">
          <span className="meta-label" data-i18n="meta_spec_lbl">Especialidad</span>
          <span className="meta-val" data-i18n="meta_spec_val">Full-Stack &amp; Software Desktop</span>
        </div>
        <div className="meta-card">
          <span className="meta-label" data-i18n="meta_edu_lbl">Formación</span>
          <span className="meta-val">DAM + DAW + SMR</span>
        </div>
      </div>

      <div className="hero-cta-group">
        <a href="#proyectos" className="btn btn-primary" data-i18n="btn_projects">Ver Proyectos →</a>
        <button className="btn btn-secondary" id="downloadCvBtn" data-i18n="btn_cv">📄 Descargar CV (PDF)</button>
        <a href="#contacto" className="btn btn-ghost" data-i18n="btn_contact">Hablemos</a>
      </div>
    </div>
  </section>
    </>
  );
}
