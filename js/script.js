// ============================================
// MARC SANCHO PORTFOLIO — INTERACTIVE ENGINE
// ============================================

document.addEventListener('DOMContentLoaded', () => {

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
      ]
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
      ]
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
      ]
    }
  };

  let currentLang = localStorage.getItem('portfolio_lang') || 'es';
  const langSelect = document.getElementById('langSelect');

  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    if (langSelect) langSelect.value = lang;

    const dict = translations[lang];

    // Actualizar elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Actualizar inputs placeholders
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const msgInput = document.getElementById('contactMessage');
    if (nameInput) nameInput.placeholder = dict.ph_name;
    if (emailInput) emailInput.placeholder = dict.ph_email;
    if (msgInput) msgInput.placeholder = dict.ph_msg;

    // Reiniciar Typewriter con nuevos roles
    if (window.updateTypewriterRoles) {
      window.updateTypewriterRoles(dict.roles);
    }

    const langNames = { es: 'Español 🇪🇸', va: 'Valencià 🦇', en: 'English 🇬🇧' };
    showToast(`🌐 Idioma cambiado a ${langNames[lang]}`);
  }

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
        window.open('cv/index.html', '_blank');
        showToast('📄 Opening Marc Sancho's official Resume...');
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

  // 14. Terminal CLI Engine (El Lab)
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalBody = document.getElementById('terminalBody');
  const termChips = document.querySelectorAll('.term-chip');

  const cliCommands = {
    help: () => `
<div class="term-line-output term-success">📋 Available commands:</div>
<div class="term-line-output">  <span class="term-cmd">whoami</span>    - Marc Sancho's professional summary</div>
<div class="term-line-output">  <span class="term-cmd">stack</span>     - Main technologies and tools</div>
<div class="term-line-output">  <span class="term-cmd">contacto</span>  - Direct contact details</div>
<div class="term-line-output">  <span class="term-cmd">matrix</span>    - Neon cyberpunk rain mode</div>
<div class="term-line-output">  <span class="term-cmd">clear</span>     - Clear the terminal screen</div>
`,
    whoami: () => `
<div class="term-line-output term-highlight">👤 Marc Sancho Pastor</div>
<div class="term-line-output">🎓 Double Degree Student in DAM (Cross-Platform Development) and DAW (Web Development).</div>
<div class="term-line-output">🏆 Graduated with Honors in Microcomputer Systems and Networks (SMR).</div>
<div class="term-line-output">📍 Xátiva, Valencia | 🟢 Available for immediate incorporation.</div>
`,
    stack: () => `
<div class="term-line-output term-success">🛠️ Technical Stack:</div>
<div class="term-line-output">  • Front-end: HTML5, CSS3 Vanilla, JavaScript ES6+, React</div>
<div class="term-line-output">  • Back-end:  PHP, Java, Python</div>
<div class="term-line-output">  • Data:      MySQL, SQL Server</div>
<div class="term-line-output">  • Tools:     Git, GitHub, GitKraken, WordPress, IT Support</div>
`,
    contacto: () => `
<div class="term-line-output term-highlight">📬 Direct Contact:</div>
<div class="term-line-output">  • Email: <span class="term-cmd">marcsancho46@gmail.com</span></div>
<div class="term-line-output">  • GitHub: https://github.com/SanX18</div>
<div class="term-line-output">  • LinkedIn: Marc Sancho Pastor</div>
`,
    matrix: () => `
<div class="term-line-output term-success">💚 Wake up, Neo... The matrix is active. Explore the portfolio freely!</div>
`,
    clear: () => null
  };

  function executeCliCommand(cmdStr) {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd || !terminalOutput) return;

    if (cleanCmd === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-line-output';
    cmdLine.innerHTML = `<span class="term-prompt">ms@sancho-dev:~$</span> <span class="term-cmd">${cleanCmd}</span>`;
    terminalOutput.appendChild(cmdLine);

    if (cliCommands[cleanCmd]) {
      const resultHtml = cliCommands[cleanCmd]();
      if (resultHtml) {
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = resultHtml;
        terminalOutput.appendChild(resultDiv);
      }
    } else {
      const errDiv = document.createElement('div');
      errDiv.className = 'term-line-output term-highlight';
      errDiv.textContent = `bash: comando no encontrado: ${cleanCmd}. Escribe 'help' para ver opciones.`;
      terminalOutput.appendChild(errDiv);
    }

    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCliCommand(terminalInput.value);
        terminalInput.value = '';
      }
    });
  }

  termChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      if (terminalInput) terminalInput.value = cmd;
      executeCliCommand(cmd);
      if (terminalInput) terminalInput.value = '';
    });
  });

  // 15. SQL Simulator Engine
  const sqlPresets = document.querySelectorAll('.sql-preset-btn');
  const sqlTableWrapper = document.getElementById('sqlTableWrapper');

  const sqlDbTables = {
    education: {
      headers: ['id', 'degree', 'school', 'period', 'grade'],
      rows: [
        ['1', 'Double Degree DAM + DAW', 'Universae', 'Present', 'Final year'],
        ['2', 'Intermediate Degree SMR', 'IES Lluís Simarro', '2019 - 2021', '🏆 Graduated with Honors'],
        ['3', 'IT Vocational Training', 'IES Cárcer', '2017 - 2019', 'Passed']
      ]
    },
    skills: {
      headers: ['id', 'technology', 'category', 'level'],
      rows: [
        ['1', 'HTML5 & CSS3', 'Front-end', 'Solid'],
        ['2', 'JavaScript (ES6+)', 'Front-end', 'Intermediate'],
        ['3', 'React', 'Front-end', 'Basic'],
        ['4', 'PHP', 'Back-end', 'Basic / Intermediate'],
        ['5', 'Java', 'Back-end', 'Basic'],
        ['6', 'MySQL & SQL Server', 'Databases', 'Intermediate']
      ]
    },
    experience: {
      headers: ['id', 'role', 'field', 'key_skill'],
      rows: [
        ['1', 'IT & Network Support', 'Telecommunications / IT', 'Diagnostics & Customer Service'],
        ['2', 'Freelance Web Developer', 'Front-end Web', 'Layout & Vercel Deployment']
      ]
    },
    languages: {
      headers: ['id', 'language', 'level'],
      rows: [
        ['1', 'Spanish', 'Native'],
        ['2', 'Valencian', 'Native'],
        ['3', 'English', 'Intermediate (B1/B2)']
      ]
    }
  };

  function renderSqlTable(tableName) {
    const tableData = sqlDbTables[tableName];
    if (!tableData || !sqlTableWrapper) return;

    let html = '<table class="sql-table"><thead><tr>';
    tableData.headers.forEach(h => html += `<th>${h}</th>`);
    html += '</tr></thead><tbody>';

    tableData.rows.forEach(row => {
      html += '<tr>';
      row.forEach(cell => html += `<td>${cell}</td>`);
      html += '</tr>';
    });

    html += '</tbody></table>';
    sqlTableWrapper.innerHTML = html;
  }

  sqlPresets.forEach(btn => {
    btn.addEventListener('click', () => {
      sqlPresets.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSqlTable(btn.dataset.query);
    });
  });

  renderSqlTable('education');

  // 16. REST API Simulator Engine (El Lab)
  const apiTabs = document.querySelectorAll('.api-tab');
  const jsonOutput = document.getElementById('jsonOutput');
  const apiLatency = document.getElementById('apiLatency');
  const copyJsonBtn = document.getElementById('copyJsonBtn');

  const apiResponsesData = {
    profile: {
      status: 200,
      developer: "Marc Sancho Pastor",
      role: "Full-Stack Developer & IT Specialist",
      location: "Xátiva, Valencia, España",
      education: [
        { degree: "Doble Grado DAM + DAW", status: "Final year", school: "Universae" },
        { degree: "Grado Medio SMR", status: "Graduated with Honors", school: "IES Lluís Simarro" }
      ],
      availability: "Immediate for internship and job incorporation",
      contact: {
        email: "marcsancho46@gmail.com",
        github: "https://github.com/SanX18",
        linkedin: "Marc Sancho Pastor"
      }
    },
    stack: {
      status: 200,
      categories: {
        frontend: ["HTML5", "CSS3", "JavaScript ES6+", "React"],
        backend: ["PHP", "Java", "Python"],
        databases: ["MySQL", "SQL Server"],
        it_and_networks: ["IT Diagnostics", "LAN/WLAN Networks", "Customer Service (SMR Honors)"],
        tools: ["Git", "GitHub", "GitKraken", "WordPress"]
      }
    },
    projects: {
      status: 200,
      total_featured: 3,
      items: [
        {
          name: "BindDeck — Macro Pad & Control Center",
          tech: ["C++ / ESP32", "Desktop App", "Serial Communication", "3D CAD"],
          makerworld_published: true,
          github: "https://github.com/SanX18/BindDeck"
        },
        {
          name: "Marta San Tattoo",
          tech: ["HTML5", "CSS3", "JavaScript", "Vercel Edge"],
          status: "Live in production",
          url: "https://www.martasantattoo.com/"
        },
        {
          name: "DevNotes & IT Dashboard",
          tech: ["HTML5", "CSS3", "JavaScript (DOM)", "LocalStorage"],
          type: "Desktop & Web App"
        }
      ]
    }
  };

  function highlightJsonSyntax(jsonObj) {
    const jsonStr = JSON.stringify(jsonObj, null, 2);
    return jsonStr
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'json-num';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'json-key';
          } else {
            cls = 'json-str';
          }
        } else if (/true|false/.test(match)) {
          cls = 'json-bool';
        }
        return `<span class="${cls}">${match}</span>`;
      });
  }

  function loadEndpoint(endpointKey) {
    if (!jsonOutput) return;
    const data = apiResponsesData[endpointKey] || apiResponsesData['profile'];

    // Simulate server latency
    const randomLatency = Math.floor(Math.random() * 8) + 10;
    if (apiLatency) apiLatency.textContent = `LATENCY: ${randomLatency}ms`;

    jsonOutput.innerHTML = `<code>${highlightJsonSyntax(data)}</code>`;
  }

  apiTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      apiTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const endpoint = tab.dataset.endpoint;
      loadEndpoint(endpoint);
    });
  });

  if (copyJsonBtn) {
    copyJsonBtn.addEventListener('click', async () => {
      const activeTab = document.querySelector('.api-tab.active');
      const endpointKey = activeTab ? activeTab.dataset.endpoint : 'profile';
      const dataStr = JSON.stringify(apiResponsesData[endpointKey], null, 2);

      try {
        await navigator.clipboard.writeText(dataStr);
        showToast('📋 JSON response copied to clipboard!');
      } catch (err) {
        showToast('JSON copied');
      }
    });
  }

  // Load initial endpoint
  loadEndpoint('profile');

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

  // Inicializar idioma guardado o por defecto (silencioso al cargar)
  if (translations[currentLang]) {
    if (currentLangLabel) currentLangLabel.textContent = currentLang.toUpperCase();
    langOpts.forEach(opt => {
      if (opt.dataset.lang === currentLang) opt.classList.add('active');
      else opt.classList.remove('active');
    });
    const dict = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const msgInput = document.getElementById('contactMessage');
    if (nameInput) nameInput.placeholder = dict.ph_name;
    if (emailInput) emailInput.placeholder = dict.ph_email;
    if (msgInput) msgInput.placeholder = dict.ph_msg;
  }

});


