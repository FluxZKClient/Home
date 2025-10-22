
// Simple JS: reveal on scroll + mobile menu toggle
document.addEventListener('DOMContentLoaded',function(){
  // reveal elements
  const reveal = ()=>{
    document.querySelectorAll('.fade-up').forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < (window.innerHeight - 60)) el.classList.add('visible');
    });
  };
  reveal();
  window.addEventListener('scroll', reveal);
  // mobile menu toggle
  const btn = document.querySelector('.menu-toggle');
  if(btn){
    btn.addEventListener('click', ()=>{
      const nav = document.querySelector('.site-nav');
      nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    });
  }
});
