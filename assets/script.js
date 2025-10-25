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


/* === Particles injected === */

// --- Particles background for FluxZK Client (lightweight) ---
(function(){
  const url = "https://github.com/FluxZKClient/Data/releases/tag/Download";
  // gentle check not to run twice
  if(window._fluxzk_particles_loaded) return;
  window._fluxzk_particles_loaded = true;

  function createCanvas(){
    const canvas = document.getElementById('particles-canvas');
    if(!canvas) return null;
    const ctx = canvas.getContext('2d');
    function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize(); window.addEventListener('resize', resize);
    return {canvas, ctx};
  }

  const ctxObj = createCanvas();
  if(!ctxObj) return;
  const canvas = ctxObj.canvas, ctx = ctxObj.ctx;
  let particles = [];
  const PARTICLE_COUNT = Math.max(30, Math.floor((window.innerWidth*window.innerHeight)/80000));
  const colors = ['rgba(255,45,149,0.95)','rgba(139,92,246,0.95)'];
  function rand(min,max){ return Math.random()*(max-min)+min; }
  for(let i=0;i<PARTICLE_COUNT;i++){
    particles.push({
      x: rand(0, canvas.width),
      y: rand(0, canvas.height),
      vx: rand(-0.15,0.15),
      vy: rand(-0.3,0.3),
      r: rand(1.2,3.8),
      alpha: rand(0.05,0.9),
      col: colors[Math.floor(Math.random()*colors.length)],
      life: rand(60,240)
    });
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // soft dark overlay for depth
    //ctx.fillStyle = 'rgba(6,6,8,0.2)'; ctx.fillRect(0,0,canvas.width,canvas.height);
    for(let p of particles){
      // glow
      ctx.beginPath();
      ctx.fillStyle = p.col.replace('0.95', String(0.07 * p.alpha));
      ctx.arc(p.x, p.y, p.r*4, 0, Math.PI*2);
      ctx.fill();
      // core
      ctx.beginPath();
      ctx.fillStyle = p.col.replace('0.95', String(0.95 * p.alpha));
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      p.life--;
      if(p.x < -20) p.x = canvas.width+20;
      if(p.x > canvas.width+20) p.x = -20;
      if(p.y < -20) p.y = canvas.height+20;
      if(p.y > canvas.height+20) p.y = -20;
      if(p.life <= 0){ // respawn
        p.x = rand(0, canvas.width); p.y = rand(0, canvas.height);
        p.vx = rand(-0.15,0.15); p.vy = rand(-0.3,0.3);
        p.life = rand(60,240); p.r = rand(1.2,3.8);
      }
    }
    requestAnimationFrame(draw);
  }

  // Gentle parallax on mouse move
  let mx = 0, my = 0;
  window.addEventListener('pointermove', (e)=>{ mx = (e.clientX - canvas.width/2) * 0.0006; my = (e.clientY - canvas.height/2) * 0.0006; for(let p of particles){ p.x += mx; p.y += my; } });

  draw();
})();
