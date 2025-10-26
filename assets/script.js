
// FluxZK final script: particles + simple scroll reveal
(function(){
  // particles (lightweight)
  const canvas = document.getElementById('particles-canvas');
  if(canvas && canvas.getContext){
    const ctx = canvas.getContext('2d');
    function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
    resize(); window.addEventListener('resize', resize);
    let parts = [];
    const COUNT = Math.max(30, Math.floor((innerWidth*innerHeight)/120000));
    for(let i=0;i<COUNT;i++){
      parts.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*3+1, vx:(Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2, c: i%2? 'rgba(29,195,255,0.9)':'rgba(20,150,200,0.8)'});
    }
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(let p of parts){
        ctx.beginPath();
        ctx.fillStyle = p.c.replace('0.9','0.06');
        ctx.arc(p.x,p.y,p.r*4,0,Math.PI*2); ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = p.c; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if(p.x<-20) p.x=canvas.width+20; if(p.x>canvas.width+20) p.x=-20;
        if(p.y<-20) p.y=canvas.height+20; if(p.y>canvas.height+20) p.y=-20;
      }
      requestAnimationFrame(draw);
    }
    draw();
    // parallax gentle on pointer
    window.addEventListener('pointermove', (ev)=>{
      const cx = (ev.clientX - innerWidth/2)*0.0006;
      const cy = (ev.clientY - innerHeight/2)*0.0006;
      for(let p of parts){ p.x += cx; p.y += cy; }
    });
  }

  // scroll reveal simple
  const obs = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting) e.target.style.opacity = 1, e.target.style.transform = 'translateY(0)';
    }
  }, {threshold:0.12});
  document.querySelectorAll('.bvLyTh, .thumb, .gkmkBo, .drCVgC .bvLyTh').forEach(el=>{
    el.style.opacity=0; el.style.transform='translateY(18px)'; el.style.transition='all 650ms cubic-bezier(.2,.8,.2,1)';
    obs.observe(el);
  });
})();