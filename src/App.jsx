import React, { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Stack from './components/Stack.jsx';
import Lab from './components/Lab.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import { initLegacyScript } from './legacyScript.js';

function App() {
  useEffect(() => {
    try {
      initLegacyScript();
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <>
      

{/* ============ NAV ============ */}
<Navbar />

<main>

  {/* ============ HERO ============ */}
  <Hero />

  {/* ============ ABOUT / STORYTELLING ============ */}
  <About />

  {/* ============ STACK TÉCNICO ============ */}
  <Stack />

  {/* ============ EL LAB (CONSOLA CLI + SIMULADOR SQL + REST API) ============ */}
  <Lab />

  {/* ============ PROYECTOS ============ */}
  <Projects />

  {/* ============ FORMACIÓN ============ */}
  <Education />

  {/* ============ CONTACTO ============ */}
  <Contact />

</main>

<Footer />

{/* Toast Container */}
<div className="toast-container" id="toastContainer" aria-live="polite"></div>

{/* Floating Back to Top Button */}
<button className="back-to-top" id="backToTop" aria-label="Back to top">
  <svg className="progress-ring" width="48" height="48">
    <circle className="progress-ring-circle" stroke="var(--indigo)" stroke-width="3" fill="transparent" r="20" cx="24" cy="24"/>
  </svg>
  <span className="arrow-up">↑</span>
</button>

{/* Modal de Detalle de Project */}
<div className="project-modal" id="projectModal" aria-hidden="true" role="dialog">
  <div className="modal-backdrop" id="modalBackdrop"></div>
  <div className="modal-card">
    <button className="modal-close" id="modalClose" aria-label="Close modal">&times;</button>
    <div className="modal-header">
      <span className="modal-tag" id="modalTag">Project</span>
      <h3 className="modal-title" id="modalTitle">Project Detail</h3>
    </div>
    <div className="modal-body" id="modalBody">
      {/* Dynamic content with JS */}
    </div>
    <div className="modal-footer">
      <a href="#" target="_blank" rel="noopener" className="btn btn-primary" id="modalLinkBtn">Ver Project</a>
    </div>
  </div>
</div>



    </>
  );
}

export default App;
