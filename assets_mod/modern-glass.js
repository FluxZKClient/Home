
// Modern UI small scripts
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if(btn && nav){
    btn.addEventListener('click', ()=> {
      nav.classList.toggle('visible');
      nav.style.display = nav.classList.contains('visible') ? 'flex' : '';
    });
  }

  // Simple reveal on scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('fadeUp');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.card, .header-hero, .brand').forEach(el=>obs.observe(el));
});
