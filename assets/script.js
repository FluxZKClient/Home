// assets/script.js - small interactions
function handleSubmit(e){
  e.preventDefault();
  const f = e.target;
  alert('Mensagem enviada! (demo) — Obrigado, ' + (f.name.value || 'amigo'));
  f.reset();
}

// Simple smooth scrolling for anchor links
document.addEventListener('click', function(e){
  const a = e.target.closest('a[href^="#"]');
  if(a){
    e.preventDefault();
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }
});
