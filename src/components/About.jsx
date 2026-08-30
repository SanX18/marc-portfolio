import React from 'react';

export default function About() {
  return (
    <>
      <section className="section" id="about">
    <div className="section-inner">
      <div className="section-header">
        <p className="section-eyebrow" data-i18n="eyebrow_about">01 · SOBRE MÍ</p>
        <h2 className="section-title" data-i18n="title_about">Trayectoria &amp; Enfoque</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p className="lead-paragraph" data-i18n="about_p1">
            ¡Hola! Soy Marc Sancho. Mi trayectoria en la tecnología comenzó en el ámbito de la microinformática y las redes, donde me gradué con Matrícula de Honor en SMR (Sistemas Microinformáticos y Redes).
          </p>
          <p data-i18n="about_p2">
            Tras varios años resolviendo incidencias en entornos reales de soporte IT y telecomunicaciones, comprendí que mi verdadera pasión es crear el software que previene y soluciona esos problemas. Por ello, actualmente estoy cursando el Doble Grado en DAM y DAW (Desarrollo de Aplicaciones Multiplataforma y Web) en Universae.
          </p>
          <p data-i18n="about_p3">
            Combino una solidez técnica en diagnóstico con una visión de desarrollo limpia, moderna y enfocada en entregar aplicaciones funcionales de alto rendimiento.
          </p>
        </div>

        <div className="about-stats-grid">
          <div className="stat-card" data-tilt>
            <span className="stat-number">4</span>
            <span className="stat-title" data-i18n="stat_degrees">Titulaciones Oficiales</span>
            <span className="stat-sub">DAM + DAW, SMR, FPI</span>
          </div>
          <div className="stat-card stat-card-highlight" data-tilt>
            <span className="stat-number">🏆</span>
            <span className="stat-title" data-i18n="stat_honor">Matrícula de Honor</span>
            <span className="stat-sub" data-i18n="stat_honor_sub">Grado Medio en SMR</span>
          </div>
          <div className="stat-card" data-tilt>
            <span className="stat-number">3</span>
            <span className="stat-title" data-i18n="stat_langs">Idiomas</span>
            <span className="stat-sub" data-i18n="stat_langs_sub">Español, Valencià, Inglés</span>
          </div>
        </div>
      </div>

      {/* Storytelling Bento Cards */}
      <div className="storytelling-container">
        <h3 className="storytelling-heading" data-i18n="story_heading">⚡ Por qué contratarme: El valor de un perfil híbrido</h3>
        <div className="storytelling-bento">
          <div className="story-bento-card" data-tilt>
            <div className="story-card-header">
              <span className="story-icon-badge">🛠️</span>
              <h4 data-i18n="story_1_title">50% Resolución IT &amp; Diagnóstico Técnico</h4>
            </div>
            <p data-i18n="story_1_desc">
              Experiencia real en la detección rápida de averías, administración de redes y atención a usuarios. Sé cómo funciona un sistema operativo y una red por dentro, lo que me permite programar pensando en el entorno de ejecución real.
            </p>
          </div>
          <div className="story-bento-card" data-tilt>
            <div className="story-card-header">
              <span className="story-icon-badge">💻</span>
              <h4 data-i18n="story_2_title">50% Desarrollo Full-Stack &amp; Software</h4>
            </div>
            <p data-i18n="story_2_desc">
              Formación sólida en desarrollo web (HTML5, CSS3, JavaScript, React, PHP) y software multiplataforma/escritorio (Java, Python, C++, MySQL). Enfoque en código limpio, modular y centrado en la experiencia de usuario.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
    </>
  );
}
