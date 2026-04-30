const WA = 'https://wa.me/5511920787813?text=Ol%C3%A1%2C%20quero%20construir%20um%20projeto%20premium%20com%20a%20To%2CDo.'

const css = `
  #dense-smoke{position:fixed;inset:0;z-index:12;pointer-events:none;mix-blend-mode:screen;filter:blur(5px) saturate(1.25);opacity:.58}
  .smoke{opacity:.18!important;z-index:11!important;filter:blur(4px) saturate(1.2)!important}
  .studio{height:auto!important;min-height:auto!important;padding-top:120px!important;padding-bottom:80px!important}
  .sticky{position:relative!important;top:auto!important;height:auto!important;overflow:visible!important;display:grid!important;grid-template-columns:.92fr 1.08fr!important;align-items:stretch!important;gap:28px!important}
  .story{width:100%!important;display:grid!important;grid-template-columns:1fr!important;gap:18px!important;transform:none!important}
  .story article{width:100%!important;min-height:auto!important;border:1px solid rgba(255,255,255,.12);background:rgba(8,13,29,.74);border-radius:28px;padding:26px;backdrop-filter:blur(22px);box-shadow:0 22px 80px rgba(0,0,0,.18)}
  .stage{height:auto!important;min-height:620px!important;position:sticky!important;top:112px!important}
  .serviceGrid{display:grid!important;grid-template-columns:1fr!important;gap:24px!important;max-width:1040px;margin:auto}
  .card{min-height:360px!important;display:grid!important;grid-template-columns:220px 1fr!important;align-items:center!important;gap:36px!important;padding:36px!important;border-radius:42px!important;background:linear-gradient(135deg,rgba(8,13,29,.78),rgba(10,28,48,.60))!important}
  .card .icon{margin:0!important;width:108px!important;height:108px!important;border-radius:32px!important;grid-row:1/5}
  .card>span{position:absolute!important;top:30px!important;left:34px!important;font-size:18px!important}
  .card h3{font-size:clamp(32px,4vw,54px)!important;letter-spacing:-.055em!important;margin-bottom:10px!important}
  .card p{font-size:20px!important;max-width:720px!important}
  .card a{font-size:18px!important;margin-top:8px!important}
  .showGrid{grid-template-columns:1fr!important;gap:22px!important}
  .showGrid>div{min-height:260px!important;border-radius:42px!important;background:linear-gradient(135deg,rgba(8,13,29,.78),rgba(14,52,66,.50))!important}
  .showGrid>div:after,.timeline article:after,.card:after{content:'';position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(92,244,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(92,244,255,.08) 1px,transparent 1px);background-size:36px 36px;mask-image:linear-gradient(135deg,#000,transparent 70%)}
  .method{align-items:start!important}
  .method .timeline article{min-height:190px!important;padding:34px!important;border-radius:34px!important;background:linear-gradient(135deg,rgba(8,13,29,.78),rgba(37,14,54,.48))!important}
  .contact .primary{background:linear-gradient(135deg,#25d366,#5cf4ff)!important;color:#02100a!important}
  @media(max-width:980px){#dense-smoke{display:none}.sticky,.card{grid-template-columns:1fr!important}.stage{position:relative!important;top:auto!important}.card .icon{grid-row:auto}.card>span{position:relative!important;top:auto!important;left:auto!important}}
`

document.head.appendChild(Object.assign(document.createElement('style'), { textContent: css }))

function linkWhatsApp(){
  document.querySelectorAll('a').forEach(a=>{
    const t=(a.textContent||'').toLowerCase()
    if(t.includes('começar')||t.includes('solicitar')) a.href=WA
  })
}

function startSmoke(){
  const existing = document.getElementById('dense-smoke')
  if(existing) existing.remove()
  const c=document.createElement('canvas')
  c.id='dense-smoke'
  document.body.appendChild(c)
  const ctx=c.getContext('2d')
  let dpr=1, parts=[], hue=185, last=0
  function resize(){dpr=Math.min(devicePixelRatio||1,1.25);c.width=innerWidth*dpr;c.height=innerHeight*dpr;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';ctx.setTransform(dpr,0,0,dpr,0,0)}
  function move(e){
    const now=performance.now(); if(now-last<18)return; last=now; hue=(hue+4)%360
    for(let i=0;i<4;i++) parts.push({x:e.clientX+(Math.random()-.5)*18,y:e.clientY+(Math.random()-.5)*18,vx:(Math.random()-.5)*.55,vy:(Math.random()-.5)*.55,r:24+Math.random()*48,life:.72,h:hue+Math.random()*65})
    if(parts.length>120) parts=parts.slice(-120)
  }
  function loop(){
    ctx.clearRect(0,0,innerWidth,innerHeight)
    ctx.globalCompositeOperation='screen'; parts=parts.filter(p=>p.life>.04)
    for(const p of parts){p.x+=p.vx;p.y+=p.vy;p.vx*=.985;p.vy*=.985;p.r*=1.01;p.life*=.94;const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);g.addColorStop(0,`hsla(${p.h},100%,72%,${p.life*.10})`);g.addColorStop(.35,`hsla(${p.h+35},100%,58%,${p.life*.05})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}
    requestAnimationFrame(loop)
  }
  resize(); addEventListener('resize',resize); addEventListener('mousemove',move,{passive:true}); loop()
}

setInterval(linkWhatsApp,700)
linkWhatsApp()
startSmoke()
