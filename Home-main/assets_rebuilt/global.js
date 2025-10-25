
document.addEventListener('DOMContentLoaded', function(){
  // simple mobile toggle for nav (if present)
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if(toggle && nav){
    toggle.addEventListener('click', ()=> {
      nav.classList.toggle('open');
      nav.style.display = nav.classList.contains('open') ? 'flex' : '';
    });
  }
});
