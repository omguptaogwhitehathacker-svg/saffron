// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    const isOpen = mobileNav.classList.contains('open');
    hamburger.innerHTML = isOpen
      ? '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6L18 18M18 6L6 18"/></svg>'
      : '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
  });
}

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('header nav a, .mobile-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Reservation form mailto
const resForm = document.getElementById('reservation-form');
if (resForm) {
  resForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fd = new FormData(this);
    const subject = encodeURIComponent('Reservation request — ' + fd.get('name'));
    const body = encodeURIComponent(
      'Name: ' + fd.get('name') + '\nEmail: ' + fd.get('email') + '\nPhone: ' + fd.get('phone') +
      '\nDate: ' + fd.get('date') + '\nTime: ' + fd.get('time') + '\nGuests: ' + fd.get('guests') +
      '\n\nNotes:\n' + fd.get('notes')
    );
    window.location.href = 'mailto:theunnamedproject@protonmail.me?subject=' + subject + '&body=' + body;
  });
}

// Contact form mailto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fd = new FormData(this);
    const subject = encodeURIComponent(fd.get('subject') || 'Message from ' + fd.get('name'));
    const body = encodeURIComponent(
      'Name: ' + fd.get('name') + '\nEmail: ' + fd.get('email') + '\n\n' + fd.get('message')
    );
    window.location.href = 'mailto:theunnamedproject@protonmail.me?subject=' + subject + '&body=' + body;
  });
}

// Footer year
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
