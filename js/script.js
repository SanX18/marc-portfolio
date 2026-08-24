// ============================================
// 1. Mobile Nav Toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// 2. Scroll Progress & Active Nav Link & Back To Top
// ============================================
const scrollProgress = document.getElementById('scrollProgress');
const backToTopBtn = document.getElementById('backToTop');
const progressCircle = document.querySelector('.progress-ring-circle');
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const circleRadius = 20;
const circleCircumference = 2 * Math.PI * circleRadius; // ~125.66

if (progressCircle) {
  progressCircle.style.strokeDasharray = `${circleCircumference} ${circleCircumference}`;
  progressCircle.style.strokeDashoffset = circleCircumference;
}

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  // Actualizar barra superior
  if (scrollProgress) {
    scrollProgress.style.width = `${scrollPercent}%`;
  }

  // Actualizar anillo del botón flotante
  if (progressCircle) {
    const offset = circleCircumference - (scrollPercent / 100) * circleCircumference;
    progressCircle.style.strokeDashoffset = offset;
  }

  // Visibilidad del botón flotante
  if (backToTopBtn) {
    if (scrollTop > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  // Destacar sección activa en navegación
  let currentSec = '';
  sections.forEach((sec) => {
    const top = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    if (scrollTop >= top && scrollTop < top + height) {
      currentSec = sec.getAttribute('id');
    }
  });

  navAnchors.forEach((a) => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${currentSec}`) {
      a.classList.add('active');
    }
  });
});

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// 3. Typewriter Effect en Hero
// ============================================
const typewriterEl = document.getElementById('typewriterRole');
if (typewriterEl) {
  const roles = [
    'Desarrollador Web & Multiplataforma',
    'Estudiante Doble Grado DAM · DAW',
    'Especialista en Soporte IT & Redes'
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function typeStep() {
    const currentRole = roles[roleIdx];
    if (isDeleting) {
      typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // Pausa al completar la frase
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeStep, typingSpeed);
  }

  typeStep();
}

// ============================================
// 4. Hero Particle Canvas Engine
// ============================================
const canvas = document.getElementById('heroCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 140 };

  function resizeCanvas() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    initParticles();
  }

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.size = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#00f5ff' : '#ff2e88';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Interacción con mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= Math.cos(angle) * force * 2;
          this.y -= Math.sin(angle) * force * 2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 14000), 65);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  let isCanvasVisible = true;
  let animId = null;

  if ('IntersectionObserver' in window) {
    const canvasObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isCanvasVisible = entry.isIntersecting;
        if (isCanvasVisible && !animId) {
          animateCanvas();
        }
      });
    }, { threshold: 0.05 });
    canvasObserver.observe(canvas);
  }

  function animateCanvas() {
    if (!isCanvasVisible) {
      animId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // Conectar partículas cercanas con líneas
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(157, 78, 221, ${1 - dist / 110})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    animId = requestAnimationFrame(animateCanvas);
  }

  resizeCanvas();
  animateCanvas();
}

// ============================================
// 5. Stack Category Filter
// ============================================
const filterBtns = document.querySelectorAll('.filter-btn');
const stackCats = document.querySelectorAll('.stack-cat');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    stackCats.forEach((cat) => {
      if (filter === 'all' || cat.dataset.category === filter) {
        cat.style.display = 'block';
        setTimeout(() => {
          cat.style.opacity = '1';
          cat.style.transform = 'scale(1)';
        }, 10);
      } else {
        cat.style.opacity = '0';
        cat.style.transform = 'scale(0.9)';
        setTimeout(() => {
          cat.style.display = 'none';
        }, 200);
      }
    });
  });
});

// ============================================
// 6. Efecto 3D Tilt en Tarjetas
// ============================================
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
});

// ============================================
// 7. Toast & Email Copy System
// ============================================
const copyEmailBtn = document.getElementById('copyEmail');
const toastContainer = document.getElementById('toastContainer');

function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = copyEmailBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast(`¡Correo ${email} copiado al portapapeles!`);
    } catch (err) {
      showToast(`Correo: ${email}`);
    }
  });
}

// ============================================
// 8. Modal de Proyectos
// ============================================
const projectModal = document.getElementById('projectModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalTriggers = document.querySelectorAll('.btn-modal-trigger');

function openModal() {
  if (projectModal) {
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  if (projectModal) {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

modalTriggers.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
    closeModal();
  }
});

// ============================================
// 9. Scroll reveal for sections
// ============================================
const revealTargets = document.querySelectorAll(
  '.about-grid, .stack-cat, .project-card, .timeline-item, .contact-grid, .story-card, .terminal-card, .sql-card'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ============================================
// 10. Descarga de CV Handler
// ============================================
const cvBtns = [document.getElementById('downloadCvBtn'), document.getElementById('downloadCvBtn2')];
cvBtns.forEach((btn) => {
  if (btn) {
    btn.addEventListener('click', () => {
      showToast('📄 Preparando CV actualizado... ¡Escríbeme por email para recibirlo al instante!');
    });
  }
});

// ============================================
// 11. Terminal CLI Engine
// ============================================
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const terminalBody = document.getElementById('terminalBody');
const termChips = document.querySelectorAll('.term-chip');

const commands = {
  help: () => `
<div class="term-line-output term-success">📋 Comandos disponibles:</div>
<div class="term-line-output">  <span class="term-cmd">whoami</span>    - Resumen profesional de Marc Sancho</div>
<div class="term-line-output">  <span class="term-cmd">stack</span>     - Tecnologías y herramientas principales</div>
<div class="term-line-output">  <span class="term-cmd">contacto</span>  - Datos de contacto directo</div>
<div class="term-line-output">  <span class="term-cmd">cv</span>        - Información sobre solicitud de currículum</div>
<div class="term-line-output">  <span class="term-cmd">matrix</span>    - Modo lluvioso cyberpunk neón</div>
<div class="term-line-output">  <span class="term-cmd">clear</span>     - Limpiar la pantalla de la terminal</div>
`,
  whoami: () => `
<div class="term-line-output term-highlight">👤 Marc Sancho Pastor</div>
<div class="term-line-output">🎓 Estudiante de Doble Grado en DAM (Desarrollo Multiplataforma) y DAW (Desarrollo Web).</div>
<div class="term-line-output">🏆 Matrícula de Honor en Sistemas Microinformáticos y Redes (SMR).</div>
<div class="term-line-output">📍 Xátiva, Valencia | 🟢 Disponible para incorporación inmediata.</div>
`,
  stack: () => `
<div class="term-line-output term-success">🛠️ Stack Técnico:</div>
<div class="term-line-output">  • Front-end: HTML5, CSS3 Vanilla, JavaScript ES6+</div>
<div class="term-line-output">  • Back-end:  PHP, Java, Python</div>
<div class="term-line-output">  • Datos:     MySQL, SQL Server</div>
<div class="term-line-output">  • Herramientas: Git, GitHub, GitKraken, WordPress, Soporte IT</div>
`,
  contacto: () => `
<div class="term-line-output term-highlight">📬 Contacto Directo:</div>
<div class="term-line-output">  • Email: <span class="term-cmd">marcsancho46@gmail.com</span></div>
<div class="term-line-output">  • GitHub: https://github.com/SanX18</div>
<div class="term-line-output">  • LinkedIn: Marc Sancho Pastor</div>
`,
  cv: () => `
<div class="term-line-output term-info">📄 Solicitud de CV: Puedes descargarlo o solicitar la versión más reciente enviando un correo a marcsancho46@gmail.com</div>
`,
  matrix: () => `
<div class="term-line-output term-success">💚 Wake up, Neo... La matriz está activa. ¡Explora el portfolio libremente!</div>
`,
  clear: () => null
};

function executeCommand(cmdStr) {
  const cleanCmd = cmdStr.trim().toLowerCase();
  if (!cleanCmd) return;

  if (cleanCmd === 'clear') {
    if (terminalOutput) terminalOutput.innerHTML = '';
    return;
  }

  // Imprimir línea de comando ingresada
  const cmdLine = document.createElement('div');
  cmdLine.className = 'term-line-output';
  cmdLine.innerHTML = `<span class="term-prompt">ms@sancho-dev:~$</span> <span class="term-cmd">${cleanCmd}</span>`;
  terminalOutput.appendChild(cmdLine);

  // Ejecutar comando
  if (commands[cleanCmd]) {
    const resultHtml = commands[cleanCmd]();
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

  // Scroll al final
  if (terminalBody) {
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

if (terminalInput) {
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });
}

termChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const cmd = chip.dataset.cmd;
    if (terminalInput) terminalInput.value = cmd;
    executeCommand(cmd);
    if (terminalInput) terminalInput.value = '';
  });
});

// ============================================
// 12. SQL Simulator Engine
// ============================================
const sqlPresets = document.querySelectorAll('.sql-preset-btn');
const sqlCurrentTable = document.getElementById('sqlCurrentTable');
const sqlTableWrapper = document.getElementById('sqlTableWrapper');

const dbTables = {
  estudios: {
    headers: ['id', 'titulacion', 'centro', 'periodo', 'nota_destacada'],
    rows: [
      ['1', 'Doble Grado DAM + DAW', 'Universae', 'Actualidad', 'En curso final'],
      ['2', 'Grado Medio SMR', 'IES Lluís Simarro', '2019 - 2021', '🏆 Matrícula de Honor'],
      ['3', 'FP Informática', 'IES Cárcer', '2017 - 2019', 'Aprobado']
    ]
  },
  habilidades: {
    headers: ['id', 'tecnologia', 'categoria', 'nivel'],
    rows: [
      ['1', 'HTML5 & CSS3', 'Front-end', 'Sólido'],
      ['2', 'JavaScript (ES6+)', 'Front-end', 'Básico / Intermedio'],
      ['3', 'PHP', 'Back-end', 'Básico'],
      ['4', 'Java', 'Back-end / Multiplataforma', 'Básico'],
      ['5', 'MySQL & SQL Server', 'Bases de Datos', 'Medio']
    ]
  },
  experiencia: {
    headers: ['id', 'rol', 'ambito', 'habilidad_clave'],
    rows: [
      ['1', 'Soporte IT & Redes', 'Telecomunicaciones / IT', 'Diagnóstico & Atención Cliente'],
      ['2', 'Desarrollador Web Freelance', 'Front-end Web', 'Maquetación & Despliegue Vercel']
    ]
  },
  idiomas: {
    headers: ['id', 'idioma', 'nivel'],
    rows: [
      ['1', 'Español', 'Nativo'],
      ['2', 'Valencià', 'Nativo'],
      ['3', 'Inglés', 'Medio']
    ]
  }
};

function renderSqlTable(tableName) {
  const tableData = dbTables[tableName];
  if (!tableData || !sqlTableWrapper) return;

  if (sqlCurrentTable) sqlCurrentTable.textContent = tableName;

  let html = '<table class="sql-table"><thead><tr>';
  tableData.headers.forEach((h) => {
    html += `<th>${h}</th>`;
  });
  html += '</tr></thead><tbody>';

  tableData.rows.forEach((row) => {
    html += '<tr>';
    row.forEach((cell) => {
      html += `<td>${cell}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  sqlTableWrapper.innerHTML = html;
}

sqlPresets.forEach((btn) => {
  btn.addEventListener('click', () => {
    sqlPresets.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const query = btn.dataset.query;
    renderSqlTable(query);
  });
});

// Cargar tabla inicial
renderSqlTable('estudios');

// ============================================
// 13. Scroll Reveal Animations (IntersectionObserver)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.section, .story-card, .project-card, .stack-cat, .stat');

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

// ============================================
// 14. Hero Mouse Spotlight Engine
// ============================================
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

// ============================================
// 15. Web Audio API Synth Sound Engine (Opcional)
// ============================================
const soundToggle = document.getElementById('soundToggle');
let isSoundEnabled = false;
let audioCtx = null;

function playSynthClick(freq = 800, duration = 0.04) {
  if (!isSoundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Silencioso si no es soportado
  }
}

if (soundToggle) {
  soundToggle.addEventListener('click', () => {
    isSoundEnabled = !isSoundEnabled;
    if (isSoundEnabled) {
      soundToggle.classList.add('active');
      soundToggle.textContent = '🔊 FX: ON';
      playSynthClick(1200, 0.08);
      showToast('🔊 Efectos de sonido synth ACTIVADOS');
    } else {
      soundToggle.classList.remove('active');
      soundToggle.textContent = '🔊 FX: OFF';
      showToast('🔇 Efectos de sonido synth DESACTIVADOS');
    }
  });
}

// Escuchar clicks en botones para sonido synth
document.addEventListener('click', (e) => {
  if (e.target.closest('button, a, .term-chip, .filter-btn, .sql-preset-btn')) {
    playSynthClick(750, 0.04);
  }
});

// ============================================
// 16. Cyber Form Submit Handler
// ============================================
const cyberForm = document.getElementById('cyberContactForm');
if (cyberForm) {
  cyberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    showToast(`✨ ¡Gracias ${name}! Tu mensaje ha sido enviado correctamente.`);
    cyberForm.reset();
  });
}


