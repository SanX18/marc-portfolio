import React, { useState, useEffect, useRef } from 'react';

export default function Lab() {
  // Terminal State
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', content: '💻 Consola CLI de Marc Sancho. Escribe <span class="term-cmd">help</span> o pulsa los accesos rápidos.' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalEndRef = useRef(null);

  // SQL State
  const [activeQuery, setActiveQuery] = useState('estudios');
  const [sqlData, setSqlData] = useState([]);

  // API State
  const [activeEndpoint, setActiveEndpoint] = useState('profile');
  const [jsonOutput, setJsonOutput] = useState('');
  const [latency, setLatency] = useState('12ms');

  // --- TERMINAL LOGIC ---
  const handleTerminalSubmit = (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.trim().toLowerCase();
      if (!cmd) return;
      executeCommand(cmd);
      setTerminalInput('');
    }
  };

  const handleChipClick = (cmd) => {
    executeCommand(cmd);
  };

  const executeCommand = (cmd) => {
    let output = '';
    
    switch(cmd) {
      case 'help':
        output = `Comandos disponibles:\n  <span class="term-cmd">whoami</span>    - Muestra info básica\n  <span class="term-cmd">stack</span>     - Resumen tecnológico\n  <span class="term-cmd">contacto</span>  - Información de contacto\n  <span class="term-cmd">matrix</span>    - Despierta Neo...\n  <span class="term-cmd">clear</span>     - Limpia la consola`;
        break;
      case 'whoami':
        output = 'Marc Sancho Pastor. Desarrollador Web y Multiplataforma. Especialista IT.';
        break;
      case 'stack':
        output = `<div class="term-line-output">🖥️ Frontend: HTML, CSS, React, JS</div><div class="term-line-output">⚙️ Backend:  Java, Python, PHP, C++</div><div class="term-line-output">🗄️ Data:      MySQL, SQL Server</div>`;
        break;
      case 'contacto':
        output = 'Email: <a href="mailto:marcsancho46@gmail.com" class="term-link">marcsancho46@gmail.com</a> | GitHub: SanX18';
        break;
      case 'clear':
        setTerminalHistory([]);
        return;
      case 'matrix':
        output = '<span style="color: #22c55e;">Wake up, Neo... The Matrix has you. Follow the white rabbit.</span>';
        break;
      default:
        output = `Comando no reconocido: ${cmd}. Escribe 'help' para ver opciones.`;
    }

    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', content: cmd },
      { type: 'output', content: output }
    ]);
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);


  // --- SQL LOGIC ---
  const sqlDatasets = {
    'estudios': {
      headers: ['ID', 'Titulación', 'Centro', 'Año'],
      rows: [
        ['1', 'Doble Grado DAM + DAW', 'Universae', 'Actualidad'],
        ['2', 'Grado Medio SMR (Matrícula Honor)', 'IES Lluís Simarro', '2019-2021'],
        ['3', 'FP Inicial Informática', 'IES Cárcer', '2017-2019']
      ]
    },
    'habilidades': {
      headers: ['ID', 'Tecnología', 'Categoría', 'Nivel'],
      rows: [
        ['1', 'React / HTML / CSS', 'Frontend', 'Avanzado'],
        ['2', 'JavaScript (ES6+)', 'Frontend', 'Avanzado'],
        ['3', 'Java / Python / C++', 'Backend', 'Intermedio'],
        ['4', 'Soporte IT / Hardware', 'Sistemas', 'Experto'],
        ['5', 'Git / GitHub', 'Herramientas', 'Avanzado'],
        ['6', 'MySQL & SQL Server', 'Databases', 'Intermedio']
      ]
    },
    'experiencia': {
      headers: ['ID', 'Puesto', 'Empresa', 'Año'],
      rows: [
        ['1', 'Técnico SAT (Troubleshooting)', 'Grupo EXCOM', '2021 - Actualidad'],
        ['2', 'Desarrollador Web Freelance', 'Independiente', '2026']
      ]
    },
    'idiomas': {
      headers: ['ID', 'Idioma', 'Nivel Hablado', 'Nivel Escrito'],
      rows: [
        ['1', 'Español', 'Nativo', 'Nativo'],
        ['2', 'Valencià', 'Nativo', 'Nativo'],
        ['3', 'Inglés', 'B1/B2 Técnico', 'B1/B2 Técnico']
      ]
    }
  };

  useEffect(() => {
    setSqlData(sqlDatasets[activeQuery] || sqlDatasets['estudios']);
  }, [activeQuery]);


  // --- API LOGIC ---
  const apiData = {
    'profile': {
      "name": "Marc Sancho Pastor",
      "roles": ["Web Developer", "Multiplatform Dev", "IT Support"],
      "location": "Valencia, Spain",
      "status": "Available for hire",
      "hobbies": ["3D CAD Modeling", "Hardware Assembly"]
    },
    'stack': {
      "frontend": ["HTML5", "CSS3", "JavaScript", "React"],
      "backend": ["Java", "Python", "PHP", "C++"],
      "databases": ["MySQL", "SQL Server"],
      "tools": ["Git", "WordPress", "ESP32 Firmware"]
    },
    'projects': [
      { "id": 1, "name": "BindDeck", "type": "Desktop & Hardware" },
      { "id": 2, "name": "Marta San Tattoo", "type": "Web Portfolio" },
      { "id": 3, "name": "DevNotes", "type": "Web App" }
    ]
  };

  useEffect(() => {
    setJsonOutput(JSON.stringify(apiData[activeEndpoint], null, 2));
    setLatency(Math.floor(Math.random() * (45 - 8 + 1) + 8) + 'ms');
  }, [activeEndpoint]);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonOutput);
    // Could add a local toast/state here if desired
  };

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
                    {terminalHistory.map((item, i) => (
                      <div key={i}>
                        {item.type === 'input' && (
                          <div className="term-line-input">
                            <span className="term-prompt">ms@sancho-dev:~$</span>
                            <span className="term-cmd">{item.content}</span>
                          </div>
                        )}
                        {item.type === 'output' && (
                          <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        )}
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>
                  <div className="terminal-input-row">
                    <span className="term-prompt">ms@sancho-dev:~$</span>
                    <input 
                      type="text" 
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={handleTerminalSubmit}
                      placeholder="Escribe un comando... (ej. help, stack, whoami)" 
                      autoComplete="off" 
                    />
                  </div>
                </div>

                <div className="terminal-quick-chips">
                  <span className="chip-label">Comandos:</span>
                  {['help', 'whoami', 'stack', 'contacto', 'matrix', 'clear'].map(cmd => (
                    <button key={cmd} className="term-chip" onClick={() => handleChipClick(cmd)}>{cmd}</button>
                  ))}
                </div>

                {/* Simulador SQL */}
                <div className="sql-simulator-box">
                  <div className="sql-box-header">
                    <span>🗄️ SQL Query Simulator</span>
                  </div>
                  <div className="sql-presets">
                    {['estudios', 'habilidades', 'experiencia', 'idiomas'].map(query => (
                      <button 
                        key={query} 
                        className={`sql-preset-btn ${activeQuery === query ? 'active' : ''}`}
                        onClick={() => setActiveQuery(query)}
                      >
                        SELECT * FROM {query === 'experiencia' ? 'experiencia_it' : query};
                      </button>
                    ))}
                  </div>
                  <div className="sql-table-wrapper">
                    {sqlData.headers && (
                      <table className="sql-table">
                        <thead>
                          <tr>
                            {sqlData.headers.map((h, i) => <th key={i}>{h}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          {sqlData.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => <td key={j}>{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* TARJETA 2: REST API PLAYGROUND */}
            <div className="lab-card">
              <div className="lab-card-header">
                <div className="api-tabs">
                  {['profile', 'stack', 'projects'].map(endpoint => (
                    <button 
                      key={endpoint}
                      className={`api-tab ${activeEndpoint === endpoint ? 'active' : ''}`}
                      onClick={() => setActiveEndpoint(endpoint)}
                    >
                      GET /api/v1/{endpoint}
                    </button>
                  ))}
                </div>
                <button className="btn-copy-json" onClick={handleCopyJson}>📋 Copiar JSON</button>
              </div>

              <div className="api-response-bar">
                <span className="status-badge status-200">STATUS: 200 OK</span>
                <span className="api-meta-item">LATENCY: {latency}</span>
                <span className="api-meta-item">CONTENT-TYPE: application/json</span>
              </div>

              <div className="api-code-body">
                <pre className="json-code"><code>{jsonOutput}</code></pre>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
