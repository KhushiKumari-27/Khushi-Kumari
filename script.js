/* ============================================================
   PORTFOLIO — script.js
   Handles: page fade-in · mobile nav · active nav link
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. PAGE FADE-IN
  ---------------------------------------------------------- */
  requestAnimationFrame(() => {
    document.body.classList.add('page-ready');
  });

  /* ----------------------------------------------------------
     2. ACTIVE NAV LINK
  ---------------------------------------------------------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-links a, .nav-mobile-overlay a');

  allNavLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (
      linkPage === currentPage ||
      (currentPage === '' && linkPage === 'index.html') ||
      (currentPage === 'index.html' && linkPage === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     3. MOBILE MENU TOGGLE
  ---------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobile-overlay');

  if (hamburger && mobileOverlay) {

    function openMenu() {
      hamburger.classList.add('open');
      mobileOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      hamburger.setAttribute('aria-expanded', 'true');
      mobileOverlay.setAttribute('aria-hidden', 'false');
    }

    function closeMenu() {
      hamburger.classList.remove('open');
      mobileOverlay.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
      mobileOverlay.setAttribute('aria-hidden', 'true');
    }

    hamburger.addEventListener('click', () => {
      hamburger.classList.contains('open') ? closeMenu() : openMenu();
    });

    mobileOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
  }

});
