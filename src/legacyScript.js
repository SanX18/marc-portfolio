import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// ============================================
// MARC SANCHO PORTFOLIO — INTERACTIVE ENGINE
// ============================================

export function initLegacyScript() {

  // ============================================
  // MULTI-LANGUAGE SYSTEM (i18n: ES, VA, EN)
  // ============================================
  const translations = {
    es: {
      nav_about: "01 Sobre mí",
      nav_stack: "02 Stack",
      nav_lab: "03 El Lab",
      nav_projects: "04 Proyectos",
      nav_education: "05 Formación",
      nav_contact: "06 Contacto",
      hero_badge: "Disponible para prácticas e incorporación inmediata",
      hero_title_1: "DESARROLLADOR WEB",
      hero_title_2: "& MULTIPLATAFORMA",
      hero_sub_divider: "— Especialista en Soporte IT (Matrícula de Honor en SMR)",
      meta_loc_lbl: "Ubicación",
      meta_loc_val: "Xátiva, Valencia",
      meta_spec_lbl: "Especialidad",
      meta_spec_val: "Full-Stack & Software Desktop",
      meta_edu_lbl: "Formación",
      btn_projects: "Ver Proyectos →",
      btn_cv: "📄 Descargar CV (PDF)",
      btn_contact: "Hablemos",
      eyebrow_about: "01 · SOBRE MÍ",
      title_about: "Trayectoria & Enfoque",
      stat_degrees: "Titulaciones Oficiales",
      stat_honor: "Matrícula de Honor",
      stat_honor_sub: "Grado Medio en SMR",
      stat_langs: "Idiomas",
      stat_langs_sub: "Español, Valencià, Inglés",
      story_heading: "⚡ Por qué contratarme: El valor de un perfil híbrido",
      story_1_title: "50% Resolución IT & Diagnóstico Técnico",
      story_1_desc: "Experiencia real en la detección rápida de averías, administración de redes y atención a usuarios. Sé cómo funciona un sistema operativo y una red por dentro, lo que me permite programar pensando en el entorno de ejecución real.",
      story_2_title: "50% Desarrollo Full-Stack & Software",
      story_2_desc: "Formación sólida en desarrollo web (HTML5, CSS3, JavaScript, React, PHP) y software multiplataforma/escritorio (Java, Python, C++, MySQL). Enfoque en código limpio, modular y centrado en la experiencia de usuario.",
      eyebrow_stack: "02 · HERRAMIENTAS & TECNOLOGÍAS",
      title_stack: "Stack Técnico",
      filter_all: "Todos",
      filter_frontend: "Front-End",
      filter_backend: "Back-End",
      filter_datos: "Bases de Datos",
      filter_soporte: "Soporte & Redes",
      filter_tools: "CMS & Git",
      filter_idiomas: "Idiomas",
      eyebrow_lab: "03 · EL LAB INTERACTIVO",
      title_lab: "Consola CLI, Simulador SQL & REST API",
      eyebrow_projects: "04 · PROYECTOS DESTACADOS",
      title_projects: "Trabajos & Desarrollos",
      eyebrow_education: "05 · TRAYECTORIA ACADÉMICA",
      title_education: "Formación",
      eyebrow_contact: "06 · CONTACTO DIRECTO",
      title_contact: "Hablemos",
      contact_lead: "¿Buscas a alguien con sólida base técnica, resolución de problemas y ganas de aportar? Escríbeme, estoy disponible para incorporación inmediata.",
      action_email_lbl: "CORREO ELECTRÓNICO",
      copy_hint: "Clic para copiar al portapapeles",
      btn_download_cv2: "📄 Descargar Currículum en PDF ↓",
      form_heading: "✉️ Envía un mensaje directo",
      ph_name: "Tu nombre o empresa",
      ph_email: "Tu email de contacto",
      ph_msg: "Hola Marc, nos gustaría contactar contigo para...",
      btn_send_msg: "Enviar Mensaje Directo →",
      roles: [
        'Estudiante Doble Grado DAM · DAW',
        'Matrícula de Honor en SMR (Sistemas)',
        'Desarrollador Web & Multiplataforma',
        'Especialista en Soporte & Redes IT'
      ],
about_p1: "¡Hola! Soy Marc Sancho. Mi trayectoria en la tecnología comenzó en el ámbito de la microinformática y las redes, donde me gradué con Matrícula de Honor en SMR (Sistemas Microinformáticos y Redes).",
      about_p2: "Tras varios años resolviendo incidencias en entornos reales de soporte IT y telecomunicaciones, comprendí que mi verdadera pasión es crear el software que previene y soluciona esos problemas. Por ello, actualmente estoy cursando el Doble Grado en DAM y DAW (Desarrollo de Aplicaciones Multiplataforma y Web) en Universae.",
      about_p3: "Combino una solidez técnica en diagnóstico con una visión de desarrollo limpia, moderna y enfocada en entregar aplicaciones funcionales de alto rendimiento.",
      proj1_cat: "Software & Firmware Development · Control Center + ESP32",
      proj2_cat: "Encargo Real · En Producción",
      proj3_cat: "Aplicación Web & Desktop · DAM + DAW",
      proj1_title: "BindDeck — Macro Pad & Control Center Desktop App",
      proj1_desc: "Aplicación de escritorio y software de control a medida para ejecución de macros complejas, comandos de sistema y control multimedia en tiempo real. Programado con protocolo serie de baja latencia vinculado a microcontrolador ESP32.",
      proj1_f1: "<strong>Programación Control Center:</strong> Aplicación Desktop para asignación de teclas y acciones.",
      proj1_f2: "<strong>Firmware C++/Arduino:</strong> Gestión de interrupciones y comunicación serie bidireccional en ESP32.",
      proj1_f3: "<strong>Modelado 3D CAD:</strong> Carcasa y botones 100% diseñados en CAD por Marc Sancho.",
      proj1_b1: "Código en GitHub <span class=\"arrow\">→</span>",
      proj1_b2: "Modelo 3D MakerWorld <span class=\"arrow\">↗</span>",
      proj1_b3: "Detalles técnicos",
      proj2_title: "Marta San Tattoo",
      proj2_desc: "Sitio web corporativo de presentación para estudio de tatuaje en Gandía. Incluye biografía, galería interactiva de trabajos realizados, catálogo de servicios y formulario de cita previa.",
      proj2_f1: "Diseño adaptado a dispositivos móviles desde Instagram",
      proj2_f2: "Galería dinámica de portfolio de trabajos",
      proj2_f3: "Formulario de solicitud de cita con selección de zona del cuerpo",
      proj2_b1: "Ver Web en Vivo <span class=\"arrow\">→</span>",
      proj3_title: "DevNotes & IT Dashboard",
      proj3_desc: "Herramienta de productividad para desarrolladores y técnicos IT. Incluye gestor de comandos de consola rápidos en 1-clic, tablero Kanban de tareas y bloc de notas con guardado local.",
      proj3_f1: "Librería de comandos (Git, SQL, CLI Windows, Python) con filtro instantáneo",
      proj3_f2: "Tablero Kanban de tareas interactivo",
      proj3_f3: "Almacenamiento persistente local (`localStorage`)",
      proj3_b1: "Probar App Interactiva <span class=\"arrow\">→</span>",
      edu1_title: "Doble Grado DAM + DAW",
      edu1_sub: "Universae — Desarrollo de Aplicaciones Multiplataforma y Web",
      edu1_desc: "Cursando la etapa final del doble grado oficial. Especialización en desarrollo web full-stack, software multiplataforma, bases de datos y arquitectura de sistemas.",
      edu2_title: "Grado Medio en Sistemas Microinformáticos y Redes",
      edu2_sub: "IES LLUÍS SIMARRO (Xátiva)",
      edu2_desc: "Graduado con Matrícula de Honor. Especialización en montaje y reparación de equipos, administración de redes locales, seguridad informática y atención a usuarios.",
      edu3_title: "Formación Profesional Inicial en Informática",
      edu3_sub: "IES CÁRCER",
      edu3_desc: "Bases fundamentales de hardware, montaje de equipos, sistemas operativos y conceptos iniciales de programación.",
      edu4_title: "Prácticas de Empresa e Incorporación Laboral",
      edu4_sub: "Búsqueda de Oportunidad Profesional",
      edu4_desc: "Disponible para prácticas en empresa o primera incorporación como desarrollador web o software junior. Alta capacidad de adaptación y aprendizaje continuo.",
      edu_present: "Actualidad",
      edu_target: "Objetivo Inmediato",
      edu_honor: "🏆 Matrícula de Honor",
    },
    va: {
      nav_about: "01 Sobre mi",
      nav_stack: "02 Stack",
      nav_lab: "03 El Lab",
      nav_projects: "04 Projectes",
      nav_education: "05 Formació",
      nav_contact: "06 Contacte",
      hero_badge: "Disponible per a pràctiques i incorporació immediata",
      hero_title_1: "DESENVOLUPADOR WEB",
      hero_title_2: "I MULTIPLATAFORMA",
      hero_sub_divider: "— Especialista en Suport IT (Matrícula d'Honor en SMR)",
      meta_loc_lbl: "Ubicació",
      meta_loc_val: "Xàtiva, València",
      meta_spec_lbl: "Especialitat",
      meta_spec_val: "Full-Stack i Software Desktop",
      meta_edu_lbl: "Formació",
      btn_projects: "Veure Projectes →",
      btn_cv: "📄 Descarregar CV (PDF)",
      btn_contact: "Parlem",
      eyebrow_about: "01 · SOBRE MI",
      title_about: "Trajectòria i Enfocament",
      stat_degrees: "Titulacions Oficials",
      stat_honor: "Matrícula d'Honor",
      stat_honor_sub: "Grau Mitjà en SMR",
      stat_langs: "Idiomes",
      stat_langs_sub: "Espanyol, Valencià, Anglès",
      story_heading: "⚡ Per què contractar-me: El valor d'un perfil híbrid",
      story_1_title: "50% Resolució IT i Diagnòstic Tècnic",
      story_1_desc: "Experiència real en la detecció ràpida d'avaries, administració de xarxes i atenció a usuaris. Sé com funciona un sistema operatiu i una xarxa per dins, la qual cosa em permet programar pensant en l'entorn d'execució real.",
      story_2_title: "50% Desenvolupament Full-Stack i Software",
      story_2_desc: "Formació sòlida en desenvolupament web (HTML5, CSS3, JavaScript, React, PHP) i software multiplataforma/escriptori (Java, Python, C++, MySQL). Enfocament en codi net, modular i centrat en l'experiència d'usuari.",
      eyebrow_stack: "02 · EINES I TECNOLOGIES",
      title_stack: "Stack Tècnic",
      filter_all: "Tots",
      filter_frontend: "Front-End",
      filter_backend: "Back-End",
      filter_datos: "Bases de Dades",
      filter_soporte: "Suport i Xarxes",
      filter_tools: "CMS i Git",
      filter_idiomas: "Idiomes",
      eyebrow_lab: "03 · EL LAB INTERACTIU",
      title_lab: "Consola CLI, Simulador SQL i REST API",
      eyebrow_projects: "04 · PROJECTES DESTACATS",
      title_projects: "Treballs i Desenvolupaments",
      eyebrow_education: "05 · TRAJECTÒRIA ACADÈMICA",
      title_education: "Formació",
      eyebrow_contact: "06 · CONTACTE DIRECTE",
      title_contact: "Parlem",
      contact_lead: "Busques a algú amb sòlida base tècnica, resolució de problemes i ganes d'aportar? Escriu-me, estic disponible per a incorporació immediata.",
      action_email_lbl: "CORREU ELECTRÒNIC",
      copy_hint: "Clic per a copiar al porta-retalls",
      btn_download_cv2: "📄 Descarregar Currículum en PDF ↓",
      form_heading: "✉️ Envia un missatge directe",
      ph_name: "El teu nom o empresa",
      ph_email: "El teu correu de contacte",
      ph_msg: "Hola Marc, ens agradaria contactar amb tu per a...",
      btn_send_msg: "Enviar Missatge Directe →",
      roles: [
        'Estudiant Doble Grau DAM · DAW',
        'Matrícula d\'Honor en SMR (Sistemes)',
        'Desenvolupador Web i Multiplataforma',
        'Especialista en Suport i Xarxes IT'
      ],
about_p1: "Hola! Sóc Marc Sancho. La meua trajectòria en la tecnologia va començar en l'àmbit de la microinformàtica i les xarxes, on em vaig graduar amb Matrícula d'Honor en SMR (Sistemes Microinformàtics i Xarxes).",
      about_p2: "Després de diversos anys resolent incidències en entorns reals de suport IT i telecomunicacions, vaig comprendre que la meua vertadera passió és crear el programari que prevé i soluciona eixos problemes. Per això, actualment estic cursant el Doble Grau en DAM i DAW (Desenvolupament d'Aplicacions Multiplataforma i Web) a Universae.",
      about_p3: "Combine una solidesa tècnica en diagnòstic amb una visió de desenvolupament neta, moderna i enfocada a entregar aplicacions funcionals d'alt rendiment.",
      proj1_cat: "Desenvolupament de Programari & Firmware · Control Center + ESP32",
      proj2_cat: "Encàrrec Real · En Producció",
      proj3_cat: "Aplicació Web & Desktop · DAM + DAW",
      proj1_title: "BindDeck — Macro Pad & Control Center Desktop App",
      proj1_desc: "Aplicació d'escriptori i programari de control a mida per a execució de macros complexes, comandaments de sistema i control multimèdia en temps real. Programat amb protocol sèrie de baixa latència vinculat a microcontrolador ESP32.",
      proj1_f1: "<strong>Programació Control Center:</strong> Aplicació Desktop per assignació de tecles i accions.",
      proj1_f2: "<strong>Firmware C++/Arduino:</strong> Gestió d'interrupcions i comunicació sèrie bidireccional en ESP32.",
      proj1_f3: "<strong>Modelatge 3D CAD:</strong> Carcassa i botons 100% dissenyats en CAD per Marc Sancho.",
      proj1_b1: "Codi en GitHub <span class=\"arrow\">→</span>",
      proj1_b2: "Model 3D MakerWorld <span class=\"arrow\">↗</span>",
      proj1_b3: "Detalls tècnics",
      proj2_title: "Marta San Tattoo",
      proj2_desc: "Lloc web corporatiu de presentació per a estudi de tatuatge a Gandia. Inclou biografia, galeria interactiva de treballs realitzats, catàleg de serveis i formulari de cita prèvia.",
      proj2_f1: "Disseny adaptat a dispositius mòbils des d'Instagram",
      proj2_f2: "Galeria dinàmica de portfolio de treballs",
      proj2_f3: "Formulari de sol·licitud de cita amb selecció de zona del cos",
      proj2_b1: "Veure Web en Viu <span class=\"arrow\">→</span>",
      proj3_title: "DevNotes & IT Dashboard",
      proj3_desc: "Eina de productivitat per a desenvolupadors i tècnics IT. Inclou gestor de comandaments de consola ràpids en 1-clic, tauler Kanban de tasques i bloc de notes amb guardat local.",
      proj3_f1: "Llibreria de comandaments (Git, SQL, CLI Windows, Python) amb filtre instantani",
      proj3_f2: "Tauler Kanban de tasques interactiu",
      proj3_f3: "Emmagatzematge persistent local (`localStorage`)",
      proj3_b1: "Provar App Interactiva <span class=\"arrow\">→</span>",
      edu1_title: "Doble Grau DAM + DAW",
      edu1_sub: "Universae — Desenvolupament d'Aplicacions Multiplataforma i Web",
      edu1_desc: "Cursant l'etapa final del doble grau oficial. Especialització en desenvolupament web full-stack, programari multiplataforma, bases de dades i arquitectura de sistemes.",
      edu2_title: "Grau Mitjà en Sistemes Microinformàtics i Xarxes",
      edu2_sub: "IES LLUÍS SIMARRO (Xàtiva)",
      edu2_desc: "Graduat amb Matrícula d'Honor. Especialització en muntatge i reparació d'equips, administració de xarxes locals, seguretat informàtica i atenció a usuaris.",
      edu3_title: "Formació Professional Inicial en Informàtica",
      edu3_sub: "IES CÀRCER",
      edu3_desc: "Bases fonamentals de maquinari, muntatge d'equips, sistemes operatius i conceptes inicials de programació.",
      edu4_title: "Pràctiques d'Empresa i Incorporació Laboral",
      edu4_sub: "Cerca d'Oportunitat Professional",
      edu4_desc: "Disponible per a pràctiques en empresa o primera incorporació com a desenvolupador web o programari júnior. Alta capacitat d'adaptació i aprenentatge continu.",
      edu_present: "Actualitat",
      edu_target: "Objectiu Immediat",
      edu_honor: "🏆 Matrícula d'Honor",
    },
    en: {
      nav_about: "01 About me",
      nav_stack: "02 Stack",
      nav_lab: "03 The Lab",
      nav_projects: "04 Projects",
      nav_education: "05 Education",
      nav_contact: "06 Contact",
      hero_badge: "Available for internships and immediate hiring",
      hero_title_1: "WEB & CROSS-PLATFORM",
      hero_title_2: "DEVELOPER",
      hero_sub_divider: "— IT Support Specialist (Honors in SMR)",
      meta_loc_lbl: "Location",
      meta_loc_val: "Xátiva, Valencia (Spain)",
      meta_spec_lbl: "Specialty",
      meta_spec_val: "Full-Stack & Desktop Software",
      meta_edu_lbl: "Education",
      btn_projects: "View Projects →",
      btn_cv: "📄 Download Resume (PDF)",
      btn_contact: "Let's Talk",
      eyebrow_about: "01 · ABOUT ME",
      title_about: "Career & Focus",
      stat_degrees: "Official Degrees",
      stat_honor: "Honors Distinction",
      stat_honor_sub: "Intermediate Degree in SMR",
      stat_langs: "Languages",
      stat_langs_sub: "Spanish, Catalan, English",
      story_heading: "⚡ Why hire me: The value of a hybrid profile",
      story_1_title: "50% IT Support & Technical Diagnosis",
      story_1_desc: "Real-world experience in troubleshooting, network administration, and IT user support. I know how operating systems and networks work internally, allowing me to build software tailored to the real runtime environment.",
      story_2_title: "50% Full-Stack & Software Development",
      story_2_desc: "Solid background in web development (HTML5, CSS3, JavaScript, React, PHP) and multiplatform/desktop software (Java, Python, C++, MySQL). Focused on clean, modular code centered on UX.",
      eyebrow_stack: "02 · TOOLS & TECHNOLOGIES",
      title_stack: "Technical Stack",
      filter_all: "All",
      filter_frontend: "Front-End",
      filter_backend: "Back-End",
      filter_datos: "Databases",
      filter_soporte: "Support & Networks",
      filter_tools: "CMS & Git",
      filter_idiomas: "Languages",
      eyebrow_lab: "03 · THE INTERACTIVE LAB",
      title_lab: "CLI Console, SQL Simulator & REST API",
      eyebrow_projects: "04 · FEATURED PROJECTS",
      title_projects: "Projects & Software",
      eyebrow_education: "05 · ACADEMIC JOURNEY",
      title_education: "Education",
      eyebrow_contact: "06 · DIRECT CONTACT",
      title_contact: "Let's Talk",
      contact_lead: "Looking for someone with a solid technical foundation, problem-solving skills, and eagerness to contribute? Contact me, I am available for immediate hiring.",
      action_email_lbl: "EMAIL ADDRESS",
      copy_hint: "Click to copy to clipboard",
      btn_download_cv2: "📄 Download Resume in PDF ↓",
      form_heading: "✉️ Send a direct message",
      ph_name: "Your name or company",
      ph_email: "Your contact email",
      ph_msg: "Hello Marc, we would like to get in touch with you to...",
      btn_send_msg: "Send Direct Message →",
      roles: [
        'Dual Degree Student DAM · DAW',
        'Honors Graduate in SMR (Systems)',
        'Web & Multiplatform Developer',
        'IT Support & Networks Specialist'
      ],
      about_p1: "Hello! I'm Marc Sancho. My journey in technology began in the field of microcomputing and networks, where I graduated with Honors in SMR (Microcomputer Systems and Networks).",
      about_p2: "After several years resolving issues in real IT support and telecommunications environments, I realized my true passion is creating the software that prevents and solves those problems. That is why I am currently pursuing a Dual Degree in DAM and DAW (Multiplatform and Web Application Development) at Universae.",
      about_p3: "I combine technical solid diagnostic skills with a clean, modern development vision focused on delivering high-performance, functional applications.",
      proj1_cat: "Software & Firmware Development · Control Center + ESP32",
      proj2_cat: "Real Client · In Production",
      proj3_cat: "Web & Desktop Application · DAM + DAW",
      proj1_title: "BindDeck — Macro Pad & Control Center Desktop App",
      proj1_desc: "Custom desktop application and control software for executing complex macros, system commands, and real-time media control. Programmed with a low-latency serial protocol linked to an ESP32 microcontroller.",
      proj1_f1: "<strong>Control Center Programming:</strong> Desktop application for key and action assignment.",
      proj1_f2: "<strong>C++/Arduino Firmware:</strong> Interrupt management and bidirectional serial communication on ESP32.",
      proj1_f3: "<strong>3D CAD Modeling:</strong> Case and buttons 100% CAD designed by Marc Sancho.",
      proj1_b1: "Code on GitHub <span class=\"arrow\">→</span>",
      proj1_b2: "3D Model on MakerWorld <span class=\"arrow\">↗</span>",
      proj1_b3: "Technical details",
      proj2_title: "Marta San Tattoo",
      proj2_desc: "Corporate presentation website for a tattoo studio in Gandia. Includes biography, interactive work gallery, service catalog, and an appointment request form.",
      proj2_f1: "Mobile-first design adapted for Instagram traffic",
      proj2_f2: "Dynamic interactive portfolio gallery",
      proj2_f3: "Appointment request form with body area selection",
      proj2_b1: "View Live Website <span class=\"arrow\">→</span>",
      proj3_title: "DevNotes & IT Dashboard",
      proj3_desc: "Productivity tool for developers and IT technicians. Includes a 1-click quick console command manager, Kanban task board, and a notepad with local storage.",
      proj3_f1: "Command library (Git, SQL, Windows CLI, Python) with instant filtering",
      proj3_f2: "Interactive Kanban task board",
      proj3_f3: "Persistent local storage (`localStorage`)",
      proj3_b1: "Try Interactive App <span class=\"arrow\">→</span>",
      edu1_title: "Dual Higher Degree: DAM + DAW",
      edu1_sub: "Universae — Multiplatform and Web Application Development",
      edu1_desc: "Currently in the final stage of the official dual degree. Specialization in full-stack web development, multiplatform software, databases, and systems architecture.",
      edu2_title: "Intermediate Degree in Microcomputer Systems and Networks",
      edu2_sub: "IES LLUÍS SIMARRO (Xátiva)",
      edu2_desc: "Graduated with Honors. Specialized in hardware assembly and repair, local network administration, cybersecurity, and user support.",
      edu3_title: "Initial Vocational Training in IT",
      edu3_sub: "IES CÁRCER",
      edu3_desc: "Fundamental hardware basics, equipment assembly, operating systems, and basic programming concepts.",
      edu4_title: "Internships and Job Placement",
      edu4_sub: "Seeking Professional Opportunity",
      edu4_desc: "Available for an internship or entry-level position as a junior web or software developer. High adaptability and continuous learning.",
      edu_present: "Present",
      edu_target: "Immediate Goal",
      edu_honor: "🏆 Honors"
    }
  };

  let currentLang = 'es';
  try {
    currentLang = localStorage.getItem('portfolio_lang') || 'es';
  } catch (e) {
    console.warn('[i18n] localStorage no disponible:', e);
  }
  
  const langSelect = document.getElementById('langSelect');

  function setLanguage(lang, showNotification = true) {
    console.log('[i18n] setLanguage called with:', lang);
    if (!translations[lang]) {
        console.error('[i18n] Translation not found for:', lang);
        return;
    }
    currentLang = lang;
    
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch (e) {
      console.warn('[i18n] No se pudo guardar en localStorage:', e);
    }

    if (langSelect) langSelect.value = lang;

    const dict = translations[lang];
    console.log('[i18n] Dictionary loaded. Updating elements...');

    let count = 0;
    // Actualizar elementos con data-i18n usando innerHTML para soportar HTML interno (ej. <strong>)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
        count++;
      }
    });
    console.log(`[i18n] Updated ${count} text elements.`);

    // Actualizar inputs placeholders
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const msgInput = document.getElementById('contactMessage');
    if (nameInput && dict.ph_name) nameInput.placeholder = dict.ph_name;
    if (emailInput && dict.ph_email) emailInput.placeholder = dict.ph_email;
    if (msgInput && dict.ph_msg) msgInput.placeholder = dict.ph_msg;

    // Reiniciar Typewriter con nuevos roles
    if (window.updateTypewriterRoles) {
      window.updateTypewriterRoles(dict.roles);
    }

    if (showNotification && typeof showToast === 'function') {
      const langNames = { es: 'Español (ES)', va: 'Valencià (VA)', en: 'English (EN)' };
      showToast(`🌐 Idioma cambiado a ${langNames[lang]}`);
    }
  }

  if (langSelect) {
    console.log('[i18n] Select found. Current lang:', currentLang);
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      console.log('[i18n] Select changed to:', e.target.value);
      setLanguage(e.target.value, true);
    });
  } else {
    console.error('[i18n] Element #langSelect NOT found in DOM!');
  }

  // Aplicar idioma inicial
  setLanguage(currentLang, false);

  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Scroll Progress Bar & Reading Indicator
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTopBtn = document.getElementById('backToTop');
  const progressCircle = document.querySelector('.progress-ring-circle');
  const circleRadius = 20;
  const circumference = 2 * Math.PI * circleRadius;

  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    if (progressCircle && docHeight > 0) {
      const offset = circumference - (scrollPercent / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Active Nav Link Highlighter on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // 4. Typewriter Engine for Hero Role
  const typewriterRole = document.getElementById('typewriterRole');
  if (typewriterRole) {
    let roles = translations[currentLang] ? translations[currentLang].roles : translations.es.roles;
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 70;
    let timerId = null;

    window.updateTypewriterRoles = function(newRoles) {
      if (!newRoles || !newRoles.length) return;
      roles = newRoles;
      roleIdx = 0;
      charIdx = 0;
      isDeleting = false;
      clearTimeout(timerId);
      type();
    };

    function type() {
      const currentRole = roles[roleIdx] || roles[0];

      if (isDeleting) {
        typewriterRole.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
        speed = 35;
      } else {
        typewriterRole.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
        speed = 70;
      }

      if (!isDeleting && charIdx === currentRole.length) {
        speed = 2200; // Pause at full sentence
        isDeleting = true;
      } else if (isDeleting && charIdx <= 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 400;
      }

      timerId = setTimeout(type, speed);
    }

    type();
  }

  // 5. Hero Mouse Spotlight Engine
  const heroSection = document.getElementById('top');
  const heroSpotlight = document.getElementById('heroSpotlight');

  if (heroSection && heroSpotlight) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroSpotlight.style.setProperty('--mouse-x', `${x}px`);
      heroSpotlight.style.setProperty('--mouse-y', `${y}px`);
    });
  }

  // 6. Stack Category Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const stackCards = document.querySelectorAll('.bento-stack-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      stackCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            if (card.dataset.category !== filter && filter !== 'all') {
              card.style.display = 'none';
            }
          }, 200);
        }
      });
    });
  });

  // 7. Toast Notification Engine
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✨</span> <div>${message}</div>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  window.showToast = showToast;

  // 8. CV Download / View Handler
  const downloadCvBtns = [
    document.getElementById('downloadCvBtn'),
    document.getElementById('downloadCvBtnNav'),
    document.getElementById('downloadCvBtn2')
  ];

  downloadCvBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        window.open('cv/Marc_Sancho_CV.pdf', '_blank');
        showToast("📄 Descargando CV de Marc Sancho...");
      });
    }
  });

  // 9. Email Click-to-Copy Handler
  const copyEmailBtn = document.getElementById('copyEmail');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.dataset.email || 'marcsancho46@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        showToast(`Email ${email} copied to clipboard!`);
      } catch (err) {
        showToast(`Email: ${email}`);
      }
    });
  }

  // 10. Dynamic Project Modal Controller
  const projectModal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  const modalTriggers = document.querySelectorAll('.btn-modal-trigger');

  const projectDetailsData = {
    'bind-deck': {
      tag: 'Software & Firmware Development · Desktop App + ESP32',
      title: 'BindDeck — Macro Pad & Control Center Desktop App',
      desc: 'Integral development of the Control Center desktop program and real-time control software for executing macros, keyboard shortcuts, and operating system multimedia control.',
      arch: 'Programming of the desktop program (Control Center) for interactive profile configuration and dynamic button assignment. Embedded firmware in C++/Arduino on ESP32 with low-latency bidirectional serial communication protocol, rotary encoder interrupt handling, and graphical interface rendering on OLED/LCD screen. Complemented with a 100% 3D CAD designed physical chassis.',
      highlights: [
        '✔ Complete development of desktop software (Control Center) and communication logic',
        '✔ Low-latency embedded C++/Arduino firmware programming on ESP32',
        '✔ Bidirectional Serial / WebSockets protocol for immediate state updates',
        '✔ 100% custom designed 3D CAD modeled casing and keys (MakerWorld)'
      ],
      btnText: 'View Code on GitHub',
      btnUrl: 'https://github.com/SanX18/BindDeck'
    },
    'marta-san-tattoo': {
      tag: 'Real Commission · In Production',
      title: 'Marta San Tattoo',
      desc: 'Custom corporate website created for the Marta San Tattoo studio in Gandía.',
      arch: 'Semantic HTML5 layout, custom CSS3 styles with fully responsive design, animation and DOM manipulation with JavaScript ES6+, continuously deployed on Vercel Edge.',
      highlights: [
        '✔ Interactive appointment booking form',
        '✔ Optimized for mobile devices and Instagram',
        '✔ Ultra-fast loading (99/100 Performance) and integrated SEO'
      ],
      btnText: 'Visit Website',
      btnUrl: 'https://www.martasantattoo.com/'
    }
  };

  function openModal(projectId) {
    if (!projectModal) return;

    const data = projectDetailsData[projectId] || projectDetailsData['marta-san-tattoo'];
    const modalTag = document.getElementById('modalTag');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalLinkBtn = document.getElementById('modalLinkBtn');

    if (modalTag) modalTag.textContent = data.tag;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalBody) {
      let highlightsHtml = data.highlights.map(h => `<span>${h}</span>`).join('');
      modalBody.innerHTML = `
        <p><strong>Detailed description:</strong> ${data.desc}</p>
        <p><strong>Architecture &amp; Stack:</strong> ${data.arch}</p>
        <div class="modal-highlights">${highlightsHtml}</div>
      `;
    }
    if (modalLinkBtn) {
      modalLinkBtn.textContent = data.btnText;
      modalLinkBtn.href = data.btnUrl;
    }

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (projectModal) {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.dataset.project;
      openModal(projectId);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeModal();
    }
  });

  // 11. Contact Form Submission Handler
  const contactForm = document.getElementById('cyberContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      showToast(`✨ Thank you ${name}! Your message has been successfully registered.`);
      contactForm.reset();
    });
  }

  // 12. Subtle 3D Tilt Physics Engine
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  // 13. High-Performance Hero Particle Canvas with Mouse Force-Field Physics
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let animationFrameId = null;
    let isCanvasVisible = true;
    let mouse = { x: -1000, y: -1000 };

    window.addEventListener('resize', () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });

    const heroEl = document.getElementById('top');
    if (heroEl) {
      heroEl.addEventListener('mousemove', (e) => {
        const rect = heroEl.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      heroEl.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
      });
    }

    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      originX: 0,
      originY: 0,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.8 + 0.8
    }));

    function renderParticles() {
      if (!isCanvasVisible) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Mouse interaction (gravitational repulsion)
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120) {
          const angle = Math.atan2(dyMouse, dxMouse);
          const force = (120 - distMouse) / 120;
          p.x += Math.cos(angle) * force * 3;
          p.y += Math.sin(angle) * force * 3;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.45)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderParticles);
    }

    const canvasObserver = new IntersectionObserver(([entry]) => {
      isCanvasVisible = entry.isIntersecting;
      if (isCanvasVisible) {
        cancelAnimationFrame(animationFrameId);
        renderParticles();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    }, { threshold: 0.1 });

    canvasObserver.observe(canvas);
  }

  // 14. Terminal CLI, Simulador SQL y REST API — migrados a estado de React en Lab.jsx

  // 15. Scroll Reveal Animations (IntersectionObserver)
  const revealElements = document.querySelectorAll('.section, .story-bento-card, .bento-stack-card, .project-showcase-card, .timeline-row, .contact-action-card, .api-playground-card');
  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}