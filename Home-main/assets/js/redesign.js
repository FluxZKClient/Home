
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if(btn && links){
    btn.addEventListener('click', function(){
      links.classList.toggle('open');
      if(links.classList.contains('open')){
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))';
        links.style.padding = '0.75rem';
        links.style.borderRadius = '8px';
      } else {
        links.style.display = '';
        links.style.flexDirection = '';
        links.style.padding = '';
      }
    });
  }
});
