// ===== MENU MOBILE =====
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Fermer le menu si on clique en dehors
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.burger');
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// ===== FORMULAIRE DE RÉSERVATION =====
function handleSubmit(e) {
  e.preventDefault();

  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;

  // Simulation d'envoi
  setTimeout(() => {
    e.target.style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
  }, 1200);
}

// ===== DATE MINIMUM = aujourd'hui =====
window.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
});

// ===== ANIMATION D'ENTRÉE AU SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

window.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.card, .review-card, .stat, .contact-item');
  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
