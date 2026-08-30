import React from 'react';

export default function Stack() {
  return (
    <>
      <section className="section section-alt" id="stack">
    <div className="section-inner">
      <div className="section-header">
        <p className="section-eyebrow" data-i18n="eyebrow_stack">02 · HERRAMIENTAS &amp; TECNOLOGÍAS</p>
        <h2 className="section-title" data-i18n="title_stack">Stack Técnico</h2>
      </div>

      {/* Filtros por categoría */}
      <div className="stack-filters" id="stackFilters">
        <button className="filter-btn active" data-filter="all" data-i18n="filter_all">Todos</button>
        <button className="filter-btn" data-filter="frontend" data-i18n="filter_frontend">Front-End</button>
        <button className="filter-btn" data-filter="backend" data-i18n="filter_backend">Back-End</button>
        <button className="filter-btn" data-filter="datos" data-i18n="filter_datos">Bases de Datos</button>
        <button className="filter-btn" data-filter="soporte" data-i18n="filter_soporte">Soporte &amp; Redes</button>
        <button className="filter-btn" data-filter="tools" data-i18n="filter_tools">CMS &amp; Git</button>
        <button className="filter-btn" data-filter="idiomas" data-i18n="filter_idiomas">Idiomas</button>
      </div>

      {/* Bento Grid Stack */}
      <div className="stack-bento-grid">

        <div className="bento-stack-card" data-category="frontend" data-tilt>
          <div className="bento-card-title">
            <span className="bento-icon">&lt;/&gt;</span> Front-End Development
          </div>
          <ul className="bento-skill-list">
            <li>
              <span className="skill-name">HTML5 / CSS3</span>
              <span className="skill-pill pill-solid">Solid</span>
            </li>
            <li>
              <span className="skill-name">JavaScript (ES6+)</span>
              <span className="skill-pill pill-mid">Mid / Intermediate</span>
            </li>
            <li>
              <span className="skill-name">React</span>
              <span className="skill-pill pill-basic">Basic</span>
            </li>
          </ul>
        </div>

        <div className="bento-stack-card" data-category="backend" data-tilt>
          <div className="bento-card-title">
            <span className="bento-icon">{ }</span> Back-End &amp; Software
          </div>
          <ul className="bento-skill-list">
            <li>
              <span className="skill-name">PHP</span>
              <span className="skill-pill pill-basic">Basic / Intermedio</span>
            </li>
            <li>
              <span className="skill-name">Java</span>
              <span className="skill-pill pill-basic">Basic</span>
            </li>
            <li>
              <span className="skill-name">Python</span>
              <span className="skill-pill pill-basic">Basic</span>
            </li>
          </ul>
        </div>

        <div className="bento-stack-card" data-category="datos" data-tilt>
          <div className="bento-card-title">
            <span className="bento-icon">| |</span> Databases
          </div>
          <ul className="bento-skill-list">
            <li>
              <span className="skill-name">MySQL</span>
              <span className="skill-pill pill-mid">Mid</span>
            </li>
            <li>
              <span className="skill-name">SQL Server</span>
              <span className="skill-pill pill-mid">Mid</span>
            </li>
          </ul>
        </div>

        <div className="bento-stack-card" data-category="soporte" data-tilt>
          <div className="bento-card-title">
            <span className="bento-icon">⚙⚙</span> Soporte IT &amp; Redes
          </div>
          <ul className="bento-skill-list">
            <li>
              <span className="skill-name">IT Diagnostics &amp; Maintenance</span>
              <span className="skill-pill pill-solid">Solid (Honors)</span>
            </li>
            <li>
              <span className="skill-name">Network &amp; Equipment Configuration</span>
              <span className="skill-pill pill-solid">Solid</span>
            </li>
          </ul>
        </div>

        <div className="bento-stack-card" data-category="tools" data-tilt>
          <div className="bento-card-title">
            <span className="bento-icon">~ ~</span> Version Control &amp; CMS
          </div>
          <ul className="bento-skill-list">
            <li>
              <span className="skill-name">Git / GitHub / GitKraken</span>
              <span className="skill-pill pill-mid">Mid</span>
            </li>
            <li>
              <span className="skill-name">WordPress</span>
              <span className="skill-pill pill-mid">Mid</span>
            </li>
          </ul>
        </div>

        <div className="bento-stack-card" data-category="idiomas" data-tilt>
          <div className="bento-card-title">
            <span className="bento-icon">🌐</span> Languages
          </div>
          <ul className="bento-skill-list">
            <li>
              <span className="skill-name">Español</span>
              <span className="skill-pill pill-solid">Native</span>
            </li>
            <li>
              <span className="skill-name">Valencià</span>
              <span className="skill-pill pill-solid">Native</span>
            </li>
            <li>
              <span className="skill-name">Inglés</span>
              <span className="skill-pill pill-mid">Mid (B1/B2)</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
    </>
  );
}
