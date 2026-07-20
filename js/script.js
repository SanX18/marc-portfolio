// ============================================
// Mobile nav toggle
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
// Click-to-copy email
// ============================================
const copyEmailBtn = document.getElementById('copyEmail');
const copyHint = document.getElementById('copyHint');

if (copyEmailBtn && copyHint) {
  const defaultHint = copyHint.textContent;

  copyEmailBtn.addEventListener('click', async () => {
    const email = copyEmailBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyHint.textContent = '¡Copiado!';
    } catch (err) {
      copyHint.textContent = email;
    }
    setTimeout(() => { copyHint.textContent = defaultHint; }, 2000);
  });
}

// ============================================
// Scroll reveal for sections
// ============================================
const revealTargets = document.querySelectorAll(
  '.about-grid, .stack-cat, .project-card, .timeline-item, .contact-grid'
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
