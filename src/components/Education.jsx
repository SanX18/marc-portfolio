import React from 'react';

export default function Education() {
  return (
    <>
      <section className="section section-alt" id="formacion">
    <div className="section-inner">
      <div className="section-header">
        <p className="section-eyebrow" data-i18n="eyebrow_education">05 · TRAYECTORIA ACADÉMICA</p>
        <h2 className="section-title" data-i18n="title_education">Formación</h2>
      </div>

      <div className="timeline-container">
        
        <div className="timeline-row">
          <div className="timeline-marker active"></div>
          <div className="timeline-body">
            <span className="timeline-period" data-i18n="edu_present">Actualidad</span>
            <h3 className="timeline-heading" data-i18n="edu1_title">Doble Grado DAM + DAW</h3>
            <p className="timeline-sub" data-i18n="edu1_sub">Universae — Desarrollo de Aplicaciones Multiplataforma y Web</p>
            <p className="timeline-desc" data-i18n="edu1_desc">Cursando la etapa final del doble grado oficial. Especialización en desarrollo web full-stack, software multiplataforma, bases de datos y arquitectura de sistemas.</p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-marker honor"></div>
          <div className="timeline-body">
            <span className="timeline-period">2019 — 2021 <span className="badge-honor" data-i18n="edu_honor">🏆 Matrícula de Honor</span></span>
            <h3 className="timeline-heading" data-i18n="edu2_title">Grado Medio en Sistemas Microinformáticos y Redes</h3>
            <p className="timeline-sub" data-i18n="edu2_sub">IES LLUÍS SIMARRO (Xátiva)</p>
            <p className="timeline-desc" data-i18n="edu2_desc">Graduado con Matrícula de Honor. Especialización en montaje y reparación de equipos, administración de redes locales, seguridad informática y atención a usuarios.</p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-marker"></div>
          <div className="timeline-body">
            <span className="timeline-period">2017 — 2019</span>
            <h3 className="timeline-heading" data-i18n="edu3_title">Formación Profesional Inicial en Informática</h3>
            <p className="timeline-place" data-i18n="edu3_sub">IES CÁRCER</p>
            <p className="timeline-desc" data-i18n="edu3_desc">Bases fundamentales de hardware, montaje de equipos, sistemas operativos y conceptos iniciales de programación.</p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-marker"></div>
          <div className="timeline-body">
            <span className="timeline-period" data-i18n="edu_target">Objetivo Inmediato</span>
            <h3 className="timeline-heading" data-i18n="edu4_title">Prácticas de Empresa e Incorporación Laboral</h3>
            <p className="timeline-sub" data-i18n="edu4_sub">Búsqueda de Oportunidad Profesional</p>
            <p className="timeline-desc" data-i18n="edu4_desc">Disponible para prácticas en empresa o primera incorporación como desarrollador web o software junior. Alta capacidad de adaptación y aprendizaje continuo.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
    </>
  );
}
