import React from 'react';

export default function Lab() {
  return (
    <>
      <section className="section" id="lab">
    <div className="section-inner">
      <div className="section-header">
        <p className="section-eyebrow" data-i18n="eyebrow_lab">03 · EL LAB INTERACTIVO</p>
        <h2 className="section-title" data-i18n="title_lab">Consola CLI, Simulador SQL &amp; REST API</h2>
      </div>

      <div className="lab-grid-container">

        {/* TARJETA 1: TERMINAL CLI & SIMULADOR SQL */}
        <div className="lab-card">
          <div className="lab-card-header">
            <div className="browser-dots">
              <span className="b-dot red"></span>
              <span className="b-dot yellow"></span>
              <span className="b-dot green"></span>
            </div>
            <span className="lab-card-title">ms@sancho-dev: ~/terminal-cli</span>
          </div>

          <div className="lab-card-body">
            {/* Consola Terminal */}
            <div className="terminal-box" id="terminalBody">
              <div id="terminalOutput">
                <p className="term-welcome">💡 Consola CLI de Marc Sancho. Escribe <span className="term-cmd">help</span> o pulsa los accesos rápidos.</p>
              </div>
              <div className="terminal-input-row">
                <span className="term-prompt">ms@sancho-dev:~$</span>
                <input type="text" id="terminalInput" placeholder="Escribe un comando... (ej. help, stack, whoami)" autoComplete="off" />
              </div>
            </div>

            <div className="terminal-quick-chips">
              <span className="chip-label">Comandos:</span>
              <button className="term-chip" data-cmd="help">help</button>
              <button className="term-chip" data-cmd="whoami">whoami</button>
              <button className="term-chip" data-cmd="stack">stack</button>
              <button className="term-chip" data-cmd="contacto">contacto</button>
              <button className="term-chip" data-cmd="matrix">matrix</button>
              <button className="term-chip" data-cmd="clear">clear</button>
            </div>

            {/* Simulador SQL integrado */}
            <div className="sql-simulator-box">
              <div className="sql-box-header">
                <span>🗄️ SQL Query Simulator</span>
              </div>
              <div className="sql-presets">
                <button className="sql-preset-btn active" data-query="estudios">SELECT * FROM estudios;</button>
                <button className="sql-preset-btn" data-query="habilidades">SELECT * FROM habilidades;</button>
                <button className="sql-preset-btn" data-query="experiencia">SELECT * FROM experiencia_it;</button>
                <button className="sql-preset-btn" data-query="idiomas">SELECT * FROM idiomas;</button>
              </div>
              <div className="sql-table-wrapper" id="sqlTableWrapper">
                {/* La tabla se renderizará dinámicamente con JS */}
              </div>
            </div>
          </div>
        </div>

        {/* TARJETA 2: REST API PLAYGROUND */}
        <div className="lab-card">
          <div className="lab-card-header">
            <div className="api-tabs" id="apiTabs">
              <button className="api-tab active" data-endpoint="profile">GET /api/v1/profile</button>
              <button className="api-tab" data-endpoint="stack">GET /api/v1/stack</button>
              <button className="api-tab" data-endpoint="projects">GET /api/v1/projects</button>
            </div>
            <button className="btn-copy-json" id="copyJsonBtn">📋 Copiar JSON</button>
          </div>

          <div className="api-response-bar">
            <span className="status-badge status-200">STATUS: 200 OK</span>
            <span className="api-meta-item" id="apiLatency">LATENCY: 12ms</span>
            <span className="api-meta-item">CONTENT-TYPE: application/json</span>
          </div>

          <div className="api-code-body">
            <pre className="json-code" id="jsonOutput"><code>{/* Se renderizará dinámicamente con JS */}</code></pre>
          </div>
        </div>

      </div>
    </div>
  </section>
    </>
  );
}
