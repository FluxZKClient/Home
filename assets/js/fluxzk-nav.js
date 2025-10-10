
// fluxzk-nav.js - cria/injeta uma navbar minimalista baseada nas seções existentes
document.addEventListener('DOMContentLoaded', function(){
  try{
    // coletar seções com id
    const sections = Array.from(document.querySelectorAll('section[id], [id^="section"], [data-section]')).filter(s => s.id);
    const links = sections.map(s => ({id: s.id, title: (s.getAttribute('data-title') || (s.querySelector('h1,h2,h3') && s.querySelector('h1,h2,h3').innerText) || s.id)}));
    // criar navbar HTML
    const nav = document.createElement('nav');
    nav.className = 'fluxzk-nav';
    const brand = document.createElement('div');
    brand.className = 'brand';
    brand.innerHTML = '<span class="fluxzk-link-accent">FluxZK</span> <span style="font-weight:500">Client</span>';
    const linksDiv = document.createElement('div');
    linksDiv.className = 'links';
    // Home link
    const homeA = document.createElement('a');
    homeA.href = '#';
    homeA.innerText = 'Home';
    linksDiv.appendChild(homeA);
    links.forEach(l => {
      const a = document.createElement('a');
      a.href = '#'+l.id;
      a.innerText = l.title || l.id;
      linksDiv.appendChild(a);
    });
    nav.appendChild(brand);
    nav.appendChild(linksDiv);
    // substituir nav existente ou inserir no topo do body
    const existingNav = document.querySelector('nav');
    if(existingNav){
      existingNav.parentNode.replaceChild(nav, existingNav);
    } else {
      document.body.insertBefore(nav, document.body.firstChild);
    }
    // small smooth scroll
    document.querySelectorAll('.fluxzk-nav a').forEach(a=>{
      a.addEventListener('click', function(e){
        if(this.hash && document.querySelector(this.hash)){
          e.preventDefault();
          document.querySelector(this.hash).scrollIntoView({behavior:'smooth'});
        }
      });
    });
  }catch(e){
    console.warn('FluxZK nav injection failed', e);
  }
});
