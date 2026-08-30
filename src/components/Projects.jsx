import React from 'react';

export default function Projects() {
  return (
    <>
      <section className="section section-alt" id="proyectos">
    <div className="section-inner">
      <div className="section-header">
        <p className="section-eyebrow" data-i18n="eyebrow_projects">04 · PROYECTOS DESTACADOS</p>
        <h2 className="section-title" data-i18n="title_projects">Trabajos &amp; Desarrollos</h2>
      </div>

      <div className="projects-list">

        {/* PROYECTO 1: BINDDECK MACRO PAD DIY */}
        <article className="project-showcase-card" data-tilt>
          <div className="browser-header">
            <div className="browser-dots">
              <span className="b-dot red"></span>
              <span className="b-dot yellow"></span>
              <span className="b-dot green"></span>
            </div>
            <div className="browser-address">https://github.com/SanX18/BindDeck</div>
            <div className="browser-status">💻 Software &amp; Firmware Dev</div>
          </div>

          <div className="project-showcase-content">
            <div className="project-media-box">
              <img src="img/binddeck.png" alt="BindDeck Macro Pad" className="project-img" />
              <div className="media-overlay-badge">DESKTOP APP &amp; FIRMWARE</div>
            </div>

            <div className="project-details">
              <span className="project-category-tag" data-i18n="proj1_cat">Software &amp; Firmware Development · Control Center + ESP32</span>
              <h3 className="project-name" data-i18n="proj1_title">BindDeck — Macro Pad &amp; Control Center Desktop App</h3>
              
              <p className="project-description" data-i18n="proj1_desc">
                Aplicación de escritorio y software de control a medida para ejecución de macros complejas, comandos de sistema y control multimedia en tiempo real. Programado con protocolo serie de baja latencia vinculado a microcontrolador ESP32.
              </p>

              <ul className="project-feature-list">
                <li data-i18n="proj1_f1"><strong>Programación Control Center:</strong> Aplicación Desktop para asignación de teclas y acciones.</li>
                <li data-i18n="proj1_f2"><strong>Firmware C++/Arduino:</strong> Gestión de interrupciones y comunicación serie bidireccional en ESP32.</li>
                <li data-i18n="proj1_f3"><strong>Modelado 3D CAD:</strong> Carcasa y botones 100% diseñados en CAD por Marc Sancho.</li>
              </ul>

              <div className="project-metric-row">
                <span className="metric-tag">💻 Control Center Desktop App</span>
                <span className="metric-tag">⚡ Firmware C++ Low-Latency</span>
                <span className="metric-tag">📐 100% Custom 3D CAD Chassis</span>
              </div>

              <div className="project-tech-tags">
                <span>Desktop App</span><span>C++ / Arduino</span><span>ESP32</span><span>Serial Protocol</span><span>3D CAD</span><span>Git</span>
              </div>

              <div className="project-action-buttons">
                <a href="https://github.com/SanX18/BindDeck" target="_blank" rel="noopener" className="btn btn-primary btn-sm" data-i18n="proj1_b1">
                  Código en GitHub <span className="arrow">→</span>
                </a>
                <a href="https://makerworld.com/es/models/3213210-macro-pad-stream-deck-bind-deck-diy-esp32-app#profileId-3637462" target="_blank" rel="noopener" className="btn btn-secondary btn-sm" data-i18n="proj1_b2">
                  Modelo 3D MakerWorld <span className="arrow">↗</span>
                </a>
                <button className="btn btn-ghost btn-sm btn-modal-trigger" data-project="bind-deck" data-i18n="proj1_b3">Detalles técnicos</button>
              </div>
            </div>
          </div>
        </article>

        {/* PROYECTO 2: MARTA SAN TATTOO */}
        <article className="project-showcase-card" data-tilt>
          <div className="browser-header">
            <div className="browser-dots">
              <span className="b-dot red"></span>
              <span className="b-dot yellow"></span>
              <span className="b-dot green"></span>
            </div>
            <div className="browser-address">https://www.martasantattoo.com</div>
            <div className="browser-status">⚡ 99/100 Performance</div>
          </div>

          <div className="project-showcase-content">
            <div className="project-media-box">
              <img src="img/marta-tattoo.png" alt="Marta San Tattoo" className="project-img" />
              <div className="media-overlay-badge">WEB EN PRODUCCIÓN</div>
            </div>

            <div className="project-details">
              <span className="project-category-tag" data-i18n="proj2_cat">Encargo Real · En Producción</span>
              <h3 className="project-name" data-i18n="proj2_title">Marta San Tattoo</h3>
              
              <p className="project-description" data-i18n="proj2_desc">
                Sitio web corporativo de presentación para estudio de tatuaje en Gandía. Incluye biografía, galería interactiva de trabajos realizados, catálogo de servicios y formulario de cita previa.
              </p>

              <ul className="project-feature-list">
                <li data-i18n="proj2_f1">Diseño adaptado a dispositivos móviles desde Instagram</li>
                <li data-i18n="proj2_f2">Galería dinámica de portfolio de trabajos</li>
                <li data-i18n="proj2_f3">Formulario de solicitud de cita con selección de zona del cuerpo</li>
              </ul>

              <div className="project-metric-row">
                <span className="metric-tag">⚡ Despliegue Vercel Edge</span>
                <span className="metric-tag">📱 100% Mobile Ready</span>
                <span className="metric-tag">🔒 SSL &amp; SEO Optimizado</span>
              </div>

              <div className="project-tech-tags">
                <span>HTML5</span><span>CSS3</span><span>JavaScript ES6+</span><span>Vercel</span>
              </div>

              <div className="project-action-buttons">
                <a href="https://www.martasantattoo.com/" target="_blank" rel="noopener" className="btn btn-primary btn-sm" data-i18n="proj2_b1">
                  Ver Web en Vivo <span className="arrow">→</span>
                </a>
                <button className="btn btn-ghost btn-sm btn-modal-trigger" data-project="marta-san-tattoo">Detalles técnicos</button>
              </div>
            </div>
          </div>
        </article>

        {/* PROYECTO 3: DEVNOTES APP */}
        <article className="project-showcase-card" data-tilt>
          <div className="browser-header">
            <div className="browser-dots">
              <span className="b-dot red"></span>
              <span className="b-dot yellow"></span>
              <span className="b-dot green"></span>
            </div>
            <div className="browser-address">localhost:8080/devnotes-app</div>
            <div className="browser-status">💾 Offline Web App</div>
          </div>

          <div className="project-showcase-content">
            <div className="project-media-box">
              <img src="img/devdash.png" alt="DevDash App" className="project-img" />
              <div className="media-overlay-badge">DESKTOP / WEB APP</div>
            </div>

            <div className="project-details">
              <span className="project-category-tag" data-i18n="proj3_cat">Aplicación Web &amp; Desktop · DAM + DAW</span>
              <h3 className="project-name" data-i18n="proj3_title">DevNotes &amp; IT Dashboard</h3>
              
              <p className="project-description" data-i18n="proj3_desc">
                Herramienta de productividad para desarrolladores y técnicos IT. Incluye gestor de comandos de consola rápidos en 1-clic, tablero Kanban de tareas y bloc de notas con guardado local.
              </p>

              <ul className="project-feature-list">
                <li data-i18n="proj3_f1">Librería de comandos (Git, SQL, CLI Windows, Python) con filtro instantáneo</li>
                <li data-i18n="proj3_f2">Tablero Kanban de tareas interactivo</li>
                <li data-i18n="proj3_f3">Almacenamiento persistente local (`localStorage`)</li>
              </ul>

              <div className="project-metric-row">
                <span className="metric-tag">💾 Persistencia Offline</span>
                <span className="metric-tag">⚡ Búsqueda Instantánea</span>
              </div>

              <div className="project-tech-tags">
                <span>HTML5</span><span>CSS3</span><span>JavaScript (DOM)</span><span>LocalStorage</span>
              </div>

              <div className="project-action-buttons">
                <a href="projects/devnotes-app/index.html" target="_blank" rel="noopener" className="btn btn-primary btn-sm" data-i18n="proj3_b1">
                  Probar App Interactiva <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
    </>
  );
}
