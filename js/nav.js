// ============================================
// jake.info — Shared Navigation
// ============================================

// Scroll border
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Page transitions
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-entered');
});

document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    // Skip external links, anchors, downloads
    if (!href || href.startsWith('#') || href.startsWith('http') || link.hasAttribute('download')) return;
    // Skip if same page
    if (link.classList.contains('active')) { e.preventDefault(); return; }

    e.preventDefault();
    document.body.classList.add('page-exit');
    setTimeout(() => { window.location.href = href; }, 100);
  });
});
