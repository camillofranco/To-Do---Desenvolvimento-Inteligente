import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'
import { ArrowRight, Bot, BrainCircuit, ChartNoAxesCombined, CheckCircle2, Code2, Cpu, DatabaseZap, Globe2, Layers3, Palette, RadioTower, Sparkles, Store, Workflow, Zap } from 'lucide-react'
import './styles.css'

const services = [
  { n: '01', title: 'Sites profissionais', text: 'Sites institucionais, landing pages e experiências digitais com estética premium, SEO técnico e narrativa comercial.', icon: Globe2 },
  { n: '02', title: 'WebApps e sistemas', text: 'Portais, CRMs, áreas de cliente, ferramentas internas e produtos digitais sob medida.', icon: Code2 },
  { n: '03', title: 'Automação operacional', text: 'Rotinas, alertas, integrações e fluxos que reduzem esforço manual e retrabalho.', icon: Workflow },
  { n: '04', title: 'Agentes de IA', text: 'IA para atendimento, triagem, leitura de documentos, relatórios e execução assistida.', icon: Bot },
  { n: '05', title: 'Dashboards vivos', text: 'Indicadores, gráficos, monitoramento, gargalos e visão executiva em tempo real.', icon: ChartNoAxesCombined },
  { n: '06', title: 'Branding digital', text: 'Direção visual, identidade aplicada, design system e linguagem para marcas que querem parecer referência.', icon: Palette },
  { n: '07', title: 'Integrações de dados', text: 'APIs, planilhas, bancos de dados, formulários e sistemas conectados em uma arquitetura única.', icon: DatabaseZap },
  { n: '08', title: 'Funis e conversão', text: 'Páginas, campanhas, jornadas e estruturas digitais para transformar atenção em venda.', icon: Store }
]

const manifesto = [
  ['01', 'Visual não é decoração.', 'É percepção de valor. A primeira impressão precisa vender confiança antes da primeira reunião.'],
  ['02', 'Movimento não é enfeite.', 'É condução. O visitante precisa sentir uma narrativa, não apenas rolar uma página.'],
  ['03', 'Automação não é recurso.', 'É uma camada operacional: processo, dado, decisão, execução e evolução contínua.']
]

function Logo() {
  return <div className="logoType"><strong>To<b>,</b>Do</strong><span>Automatize. Conecte. Evolua.</span></div>
}

function WebGLNetwork() {
  const ref = useRef(null)

  useEffect(() => {
    const mount = ref.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1000)
    camera.position.z = 6.8

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5))
    renderer.setSize(innerWidth, innerHeight)
    mount.appendChild(renderer.domElement)

    const isMobile = innerWidth < 760
    const count = isMobile ? 260 : 760
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const velocity = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const ix = i * 3
      positions[ix] = (Math.random() - 0.5) * 11
      positions[ix + 1] = (Math.random() - 0.5) * 6.5
      positions[ix + 2] = (Math.random() - 0.5) * 5
      velocity[ix] = 0.035 + Math.random() * 0.08
      velocity[ix + 1] = (Math.random() - 0.5) * 0.012
      velocity[ix + 2] = (Math.random() - 0.5) * 0.02
      const alt = Math.random() > 0.55
      colors[ix] = alt ? 0.08 : 0.78
      colors[ix + 1] = alt ? 0.82 : 0.22
      colors[ix + 2] = 1
    }

    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const particleMat = new THREE.PointsMaterial({ size: isMobile ? 0.035 : 0.028, vertexColors: true, transparent: true, opacity: 0.95 })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    const lineCount = isMobile ? 90 : 260
    const linePositions = new Float32Array(lineCount * 2 * 3)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMat = new THREE.LineBasicMaterial({ color: 0x5cf4ff, transparent: true, opacity: 0.16 })
    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    const mouse = { x: 0, y: 0 }
    const onMove = e => {
      mouse.x = (e.clientX / innerWidth - 0.5) * 1.4
      mouse.y = (e.clientY / innerHeight - 0.5) * 1.0
    }
    const onResize = () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    }
    addEventListener('mousemove', onMove, { passive: true })
    addEventListener('resize', onResize)

    let raf
    const draw = () => {
      const p = particleGeo.attributes.position.array
      for (let i = 0; i < count; i++) {
        const ix = i * 3
        p[ix] += velocity[ix]
        p[ix + 1] += velocity[ix + 1]
        p[ix + 2] += velocity[ix + 2]
        if (p[ix] > 6.2) p[ix] = -6.2
        if (p[ix + 1] > 3.7) p[ix + 1] = -3.7
        if (p[ix + 1] < -3.7) p[ix + 1] = 3.7
        if (p[ix + 2] > 2.7) p[ix + 2] = -2.7
        if (p[ix + 2] < -2.7) p[ix + 2] = 2.7
      }
      particleGeo.attributes.position.needsUpdate = true

      const lp = lineGeo.attributes.position.array
      for (let i = 0; i < lineCount; i++) {
        const a = (i * 7) % count
        const b = (a + 19 + (i % 37)) % count
        const ai = a * 3
        const bi = b * 3
        const li = i * 6
        lp[li] = p[ai]
        lp[li + 1] = p[ai + 1]
        lp[li + 2] = p[ai + 2]
        lp[li + 3] = p[bi]
        lp[li + 4] = p[bi + 1]
        lp[li + 5] = p[bi + 2]
      }
      lineGeo.attributes.position.needsUpdate = true

      particles.rotation.y += 0.0035 + mouse.x * 0.0008
      particles.rotation.x += (mouse.y * 0.08 - particles.rotation.x) * 0.03
      lines.rotation.copy(particles.rotation)
      renderer.render(scene, camera)
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('mousemove', onMove)
      removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      particleGeo.dispose(); particleMat.dispose(); lineGeo.dispose(); lineMat.dispose(); renderer.dispose()
    }
  }, [])

  return <div className="webgl" ref={ref} aria-hidden="true" />
}

function SmokeCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let hue = 188
    let last = 0
    let raf

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 1.4)
      canvas.width = innerWidth * dpr
      canvas.height = innerHeight * dpr
      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const move = e => {
      const now = performance.now()
      if (now - last < 14) return
      last = now
      hue = (hue + 9) % 360
      document.documentElement.style.setProperty('--mx', `${(e.clientX / innerWidth) * 100}%`)
      document.documentElement.style.setProperty('--my', `${(e.clientY / innerHeight) * 100}%`)
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 1.7,
          vy: (Math.random() - 0.5) * 1.7,
          r: 24 + Math.random() * 52,
          life: 1,
          hue: hue + Math.random() * 55
        })
      }
      if (particles.length > 170) particles = particles.slice(-170)
    }

    const loop = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight)
      ctx.globalCompositeOperation = 'lighter'
      particles = particles.filter(p => p.life > 0.025)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.r *= 1.012
        p.life *= 0.935
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        g.addColorStop(0, `hsla(${p.hue},100%,68%,${p.life * 0.16})`)
        g.addColorStop(0.42, `hsla(${p.hue + 25},100%,56%,${p.life * 0.07})`)
        g.addColorStop(1, `hsla(${p.hue + 50},100%,48%,0)`)
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill()
      }
      raf = requestAnimationFrame(loop)
    }

    resize(); loop()
    addEventListener('resize', resize)
    addEventListener('mousemove', move, { passive: true })
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); removeEventListener('mousemove', move) }
  }, [])

  return <canvas ref={ref} className="smoke" aria-hidden="true" />
}

function Header() {
  return <header className="nav"><a className="brand" href="#top"><Logo /></a><div><a href="#studio">Studio</a><a href="#services">Serviços</a><a href="#method">Método</a><a href="#contact">Contato</a></div><a className="navCta" href="#contact">Começar projeto</a></header>
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, .22], [0, -90])
  const opacity = useTransform(scrollYProgress, [0, .22], [1, .36])
  return <section id="top" className="hero"><motion.div className="heroText" style={{ y, opacity }}><p className="eyebrow"><Sparkles size={16}/> websites, systems & intelligent automation</p><h1>Experiências digitais que fazem sua empresa parecer anos à frente.</h1><p className="lead">Criamos sites profissionais, WebApps, automações, agentes de IA, dashboards e ecossistemas digitais com estética premium, movimento, performance e clareza comercial.</p><div className="actions"><a className="primary" href="#services">Explorar soluções <ArrowRight size={18}/></a><a className="secondary" href="#studio">Ver experiência</a></div></motion.div><motion.div className="heroPanel" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8}}><div className="orb o1"/><div className="orb o2"/><div className="orb o3"/><div className="engine"><Cpu size={54}/><strong>To,Do Engine</strong></div><div className="chip c1">Sites premium</div><div className="chip c2">WebApps</div><div className="chip c3">IA</div><div className="chip c4">Dashboards</div></motion.div></section>
}

function Studio() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end end'] })
  const x = useTransform(scrollYProgress, [0,1], ['0%','-44%'])
  return <section id="studio" ref={ref} className="studio"><div className="sticky"><div className="stage"><div className="scan"/><div className="stageCore"><span>LIVE STUDIO</span><strong>Brand → Experience → System → Intelligence</strong></div><div className="tag t1">UI motion</div><div className="tag t2">WebGL</div><div className="tag t3">Automação</div><div className="tag t4">IA</div></div><motion.div className="story" style={{x}}>{manifesto.map(([n,t,p])=><article key={n}><span>{n}</span><h2>{t}</h2><p>{p}</p></article>)}</motion.div></div></section>
}

function Services(){return <section id="services" className="section"><div className="head"><p className="eyebrow"><RadioTower size={16}/> serviços</p><h2>Do site que vende ao sistema que opera.</h2><p>Construímos a presença, a experiência e a infraestrutura digital para empresas que precisam crescer com tecnologia.</p></div><div className="serviceGrid">{services.map(({n,title,text,icon:Icon},i)=><motion.article className="card" key={title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} whileHover={{y:-12}}><span>{n}</span><div className="icon"><Icon/></div><h3>{title}</h3><p>{text}</p><a href="#contact">solicitar <ArrowRight size={14}/></a></motion.article>)}</div></section>}
function Showcase(){return <section className="section showcase"><p className="eyebrow"><Layers3 size={16}/> experiências possíveis</p><div className="showGrid"><motion.div className="wide" whileHover={{scale:1.015}}><h2>Site institucional que parece produto global.</h2><p>Hero cinematográfico, narrativa de venda, WebGL, SEO, performance e CTAs claros.</p></motion.div><motion.div whileHover={{scale:1.02}}><h3>Portal interno</h3><p>Usuários, permissões, dashboards e fluxo de trabalho.</p></motion.div><motion.div whileHover={{scale:1.02}}><h3>Agente IA</h3><p>Atendimento, análise, leitura e execução assistida.</p></motion.div></div></section>}
function Method(){const steps=['Imersão estratégica','Narrativa e arquitetura','Design system e motion','Desenvolvimento e integrações','Automação, IA e deploy','Evolução contínua'];return <section id="method" className="section method"><div><p className="eyebrow"><Zap size={16}/> método</p><h2>Uma construção de produto, não um template.</h2></div><div className="timeline">{steps.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{i===0?'Entendemos mercado, oferta, público e operação.':'Cada etapa transforma estética, tecnologia e estratégia em uma experiência publicável.'}</p></article>)}</div></section>}
function Contact(){return <section id="contact" className="section contact"><motion.div initial={{opacity:0,scale:.94}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}><p className="eyebrow"><CheckCircle2 size={16}/> próximo passo</p><h2>Vamos construir o site que seus concorrentes vão usar como referência?</h2><p>Começamos por uma leitura do seu negócio e desenhamos uma experiência digital com visual, tecnologia e conversão.</p><a className="primary" href="mailto:contato@todo.com.br?subject=Quero%20um%20projeto%20premium%20com%20a%20ToDo">Começar agora <ArrowRight size={18}/></a></motion.div></section>}
function App(){const[load,setLoad]=useState(true);useEffect(()=>{const t=setTimeout(()=>setLoad(false),780);return()=>clearTimeout(t)},[]);return <><WebGLNetwork/><SmokeCursor/><div className="ambient"/><motion.div className="loader" animate={{opacity:load?1:0,pointerEvents:load?'auto':'none'}} transition={{duration:.35}}><Logo/><i/></motion.div><Header/><main><Hero/><Studio/><Services/><Showcase/><Method/><Contact/></main><footer>To,Do — Automatize. Conecte. Evolua.</footer></>}
createRoot(document.getElementById('root')).render(<App/>);