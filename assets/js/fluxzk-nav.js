// fluxzk-nav.js - cria/injeta uma navbar minimalista baseada nas seções existentes, agora fofa!
document.addEventListener('DOMContentLoaded', function(){
  try{
    // Estilo "Cute" (Fofo)
    const cuteStyle = `
      .fluxzk-nav-cute {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px;
        background-color: #ffe4e1; /* Rosa claro/Pastel - Cor de Fundo */
        border-bottom: 3px solid #ffb6c1; /* Borda rosa mais forte */
        box-shadow: 0 4px 6px rgba(255, 182, 193, 0.4); /* Sombra suave */
        font-family: 'Comic Sans MS', 'Arial Rounded MT Bold', sans-serif; /* Fonte fofa (se disponível) */
        position: sticky;
        top: 0;
        z-index: 1000;
      }
      .fluxzk-nav-cute .brand {
        font-size: 24px;
        font-weight: bold;
        color: #ff69b4; /* Rosa Choque/Pink */
        letter-spacing: 1px;
      }
      .fluxzk-nav-cute .brand .fluxzk-link-accent {
        color: #8a2be2; /* Roxo suave */
      }
      .fluxzk-nav-cute .links a {
        text-decoration: none;
        color: #4b0082; /* Roxo escuro */
        margin-left: 20px;
        padding: 8px 15px;
        border-radius: 20px; /* Bordas arredondadas para um visual suave */
        transition: background-color 0.3s, color 0.3s, transform 0.2s;
        font-weight: 600;
      }
      .fluxzk-nav-cute .links a:hover {
        background-color: #ffb6c1; /* Cor de destaque ao passar o mouse */
        color: #ffffff;
        transform: translateY(-2px); /* Efeito "pulo" suave */
      }
      @media (max-width: 768px) {
        .fluxzk-nav-cute {
          flex-direction: column;
          text-align: center;
        }
        .fluxzk-nav-cute .links a {
          margin: 5px 10px;
          display: inline-block;
        }
        .fluxzk-nav-cute .brand {
          margin-bottom: 10px;
        }
      }
    `;

    // 1. Injetar o estilo fofo no <head>
    const styleEl = document.createElement('style');
    styleEl.textContent = cuteStyle;
    document.head.appendChild(styleEl);

    // coletar seções com id
    const sections = Array.from(document.querySelectorAll('section[id], [id^="section"], [data-section]')).filter(s => s.id);
    const links = sections.map(s => ({id: s.id, title: (s.getAttribute('data-title') || (s.querySelector('h1,h2,h3') && s.querySelector('h1,h2,h3').innerText) || s.id)}));

    // criar navbar HTML
    const nav = document.createElement('nav');
    // 2. Alteração: Adicionar a nova classe 'fluxzk-nav-cute'
    nav.className = 'fluxzk-nav-cute';
    const brand = document.createElement('div');
    brand.className = 'brand';
    // 3. Alteração: Adicionar um emoji fofo 🐻
    brand.innerHTML = '<span class="fluxzk-link-accent">🐻 FluxZK</span> <span style="font-weight:500">Client</span>';
    const linksDiv = document.createElement('div');
    linksDiv.className = 'links';

    // Home link
    const homeA = document.createElement('a');
    homeA.href = '#';
    homeA.innerText = '✨ Home'; // Adicionando um emoji na Home
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
    document.querySelectorAll('.fluxzk-nav-cute a').forEach(a=>{
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
