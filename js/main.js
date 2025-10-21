const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');
const modal = document.getElementById('modal');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

// ScrollReveal Animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: true
});

sr.reveal('.hero-content h1', { origin: 'top', distance: '50px', duration: 800 });
sr.reveal('.hero-content p', { origin: 'top', distance: '50px', duration: 800, delay: 200 });
sr.reveal('.hero-buttons', { origin: 'bottom', distance: '50px', duration: 800, delay: 400 });
sr.reveal('.feature-card', { interval: 200 });




// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Fecha todos os itens
      faqItems.forEach(faqItem => {
        faqItem.classList.remove('active');
      });
      
      // Abre o item clicado se ele não estava ativo
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});
 

document.addEventListener('keydown', function(e) {
  if (e.key === "F12") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
  }

  if (e.ctrlKey && (e.key.toLowerCase() === 'c' || e.key.toLowerCase() === 'x')) {
    e.preventDefault();
  }
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function openVagasModal() {
  document.getElementById("vagasModal").style.display = "flex";
}

function closeVagasModal() {
  document.getElementById("vagasModal").style.display = "none";
}