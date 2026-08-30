import React from 'react';

export default function Contact() {
  return (
    <>
      <section className="section contact-section" id="contacto">
    <div className="section-inner">
      <div className="section-header text-center">
        <p className="section-eyebrow" data-i18n="eyebrow_contact">06 · CONTACTO DIRECTO</p>
        <h2 className="section-title" data-i18n="title_contact">Hablemos</h2>
        <p className="contact-lead" data-i18n="contact_lead">¿Buscas a alguien con sólida base técnica, resolución de problemas y ganas de aportar? Escríbeme, estoy disponible para incorporación inmediata.</p>
      </div>

      <div className="contact-card-grid">
        
        <button className="contact-action-card" id="copyEmail" data-email="marcsancho46@gmail.com" data-tilt>
          <span className="action-card-label" data-i18n="action_email_lbl">CORREO ELECTRÓNICO</span>
          <span className="action-card-val">marcsancho46@gmail.com</span>
          <span className="copy-hint" id="copyHint" data-i18n="copy_hint">Clic para copiar al portapapeles</span>
        </button>

        <div className="contact-links-column">
          <button className="contact-link-card" id="downloadCvBtn2" data-tilt>
            <span data-i18n="btn_download_cv2">📄 Descargar Currículum en PDF ↓</span>
          </button>
          
          <div className="social-links-row">
            <a href="https://github.com/SanX18" target="_blank" rel="noopener" className="social-btn" data-tilt>
              <span>GitHub</span>
              <span className="arrow">→</span>
            </a>
            <a href="https://www.linkedin.com/in/marc-sancho-pastor-1517a7358/" target="_blank" rel="noopener" className="social-btn" data-tilt>
              <span>LinkedIn</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

      </div>

      {/* FORMULARIO DIRECTO */}
      <div className="contact-form-box">
        <h3 className="form-box-heading" data-i18n="form_heading">✉️ Envía un mensaje directo</h3>
        <form id="cyberContactForm" className="executive-form">
          <div className="form-row">
            <input type="text" id="contactName" placeholder="Tu nombre o empresa" required autoComplete="off" />
            <input type="email" id="contactEmail" placeholder="Tu email de contacto" required autoComplete="off" />
          </div>
          <textarea id="contactMessage" rows="4" placeholder="Hola Marc, nos gustaría contactar contigo para..." required></textarea>
          <button type="submit" className="btn btn-primary btn-block" data-i18n="btn_send_msg">Enviar Mensaje Directo →</button>
        </form>
      </div>

    </div>
  </section>
    </>
  );
}
