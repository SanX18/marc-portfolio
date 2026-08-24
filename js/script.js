// ============================================
// MARC SANCHO PORTFOLIO — INTERACTIVE ENGINE
// ============================================

document.addEventListener('DOMContentLoaded', () => {

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
    const roles = [
      'Estudiante Doble Grado DAM · DAW',
      'Matrícula de Honor en SMR (Sistemas)',
      'Desarrollador Web & Multiplataforma',
      'Especialista en Soporte & Redes IT'
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 70;

    function type() {
      const currentRole = roles[roleIdx];

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
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 400;
      }

      setTimeout(type, speed);
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

  // 8. CV Download Handler
  const downloadCvBtns = [
    document.getElementById('downloadCvBtn'),
    document.getElementById('downloadCvBtnNav'),
    document.getElementById('downloadCvBtn2')
  ];

  downloadCvBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'cv/CV-Marc-Sancho.pdf';
        link.download = 'Marc-Sancho-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showToast('📄 Descarga de CV iniciada. ¡Gracias por tu interés!');
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
        showToast(`¡Correo ${email} copiado al portapapeles!`);
      } catch (err) {
        showToast(`Correo: ${email}`);
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
      tag: 'Desarrollo de Software & Firmware · Desktop App + ESP32',
      title: 'BindDeck — Macro Pad & Control Center Desktop App',
      desc: 'Desarrollo integral del programa de escritorio Control Center y software de control en tiempo real para ejecución de macros, atajos de teclado y control multimedia del sistema operativo.',
      arch: 'Programación del programa de escritorio (Control Center) para la configuración interactiva de perfiles y asignación dinámica de botones. Firmware embebido en C++/Arduino sobre ESP32 con protocolo de comunicación serie bidireccional de baja latencia, tratamiento de interrupciones del encoder rotatorio y renderizado de interfaz gráfica en pantalla OLED/LCD. Complementado con chasis físico 100% diseñado en 3D CAD.',
      highlights: [
        '✔ Desarrollo completo del software de escritorio (Control Center) y lógica de comunicación',
        '✔ Programación de Firmware embebido C++/Arduino con baja latencia en ESP32',
        '✔ Protocolo bidireccional Serial / WebSockets para actualización inmediata de estados',
        '✔ Carcasa y teclas en modelado 3D CAD de diseño 100% propio (MakerWorld)'
      ],
      btnText: 'Ver Código en GitHub',
      btnUrl: 'https://github.com/SanX18/BindDeck'
    },
    'marta-san-tattoo': {
      tag: 'Encargo Real · En Producción',
      title: 'Marta San Tattoo',
      desc: 'Sitio web corporativo creado a medida para el estudio de tatuajes Marta San Tattoo en Gandía.',
      arch: 'Maquetación semántica HTML5, estilos CSS3 personalizados con diseño totalmente responsive, animación y manejo del DOM con JavaScript ES6+, desplegado de forma continua en Vercel Edge.',
      highlights: [
        '✔ Formulario interactivo de reserva de citas',
        '✔ Optimizada para dispositivos móviles e Instagram',
        '✔ Carga ultra rápida (99/100 Performance) y SEO integrado'
      ],
      btnText: 'Visitar Sitio Web',
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
        <p><strong>Descripción detallada:</strong> ${data.desc}</p>
        <p><strong>Arquitectura &amp; Stack:</strong> ${data.arch}</p>
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
      showToast(`✨ ¡Gracias ${name}! Tu mensaje ha sido registrado correctamente.`);
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
        
        // Interacción con el ratón (repulsión gravitatoria)
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

  // 14. REST API Simulator Engine (El Lab)
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
        { degree: "Doble Grado DAM + DAW", status: "En curso final", school: "Universae" },
        { degree: "Grado Medio SMR", status: "Graduado con Matrícula de Honor", school: "IES Lluís Simarro" }
      ],
      availability: "Inmediata para prácticas e incorporación laboral",
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
        it_and_networks: ["Diagnóstico informático", "Redes LAN/WLAN", "Atención al cliente (Matrícula Honor SMR)"],
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

    // Simular latencia de servidor
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
        showToast('📋 ¡Respuesta JSON copiada al portapapeles!');
      } catch (err) {
        showToast('JSON copiado');
      }
    });
  }

  // Cargar endpoint inicial
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

});


