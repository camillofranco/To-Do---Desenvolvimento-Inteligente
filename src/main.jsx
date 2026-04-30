import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import * as THREE from 'three'
import { ArrowRight, Bot, BrainCircuit, ChartNoAxesCombined, CheckCircle2, Code2, Cpu, DatabaseZap, Globe2, MousePointer2, Palette, RadioTower, Sparkles, Store, Workflow, Zap } from 'lucide-react'
import './styles.css'

const services = [
  { n: '01', title: 'Sites profissionais', text: 'Sites institucionais, landing pages e experiências digitais com design premium, SEO técnico e narrativa comercial.', icon: Globe2 },
  { n: '02', title: 'WebApps e sistemas', text: 'Portais, CRMs, dashboards, áreas de cliente e sistemas internos desenhados para processos reais.', icon: Code2 },
  { n: '03', title: 'Automação operacional', text: 'Rotinas, integrações, alertas e fluxos que reduzem esforço manual e retrabalho.', icon: Workflow },
  { n: '04', title: 'Agentes de IA', text: 'Assistentes para atendimento, triagem, análise, documentos, relatórios e execução assistida.', icon: Bot },
  { n: '05', title: 'Dashboards vivos', text: 'Indicadores, gráficos, monitoramento, gargalos e visão executiva em tempo real.', icon: ChartNoAxesCombined },
  { n: '06', title: 'Branding digital', text: 'Direção visual, identidade aplicada, design system e linguagem para marcas que querem parecer referência.', icon: Palette },
  { n: '07', title: 'Integrações de dados', text: 'APIs, planilhas, bancos de dados, formulários e sistemas conectados em uma arquitetura única.', icon: DatabaseZap },
  { n: '08', title: 'Funis e conversão', text: 'Páginas, campanhas, jornadas e estruturas digitais para transformar atenção em venda.', icon: Store }
]

const manifesto = [
  ['01', 'Visual não é decoração.', 'É percepção de valor. Um site precisa fazer a empresa parecer mais forte antes mesmo da primeira reunião.'],
  ['02', 'Interação não é enfeite.', 'É narrativa. A pessoa precisa sentir que está navegando por um produto vivo, não por um folder digital.'],
  ['03', 'Automação não é moda.', 'É operação. O que se repete deve ser sistematizado, medido, melhorado e conectado.']
]

function FluidWebGL() {
  const ref = useRef(null)
  useEffect(() => {
    const mount = ref.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 1000)
    camera.position.z = 7.2

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2))
    renderer.setSize(innerWidth, innerHeight)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const count = 1800
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const speeds = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const lane = Math.random() > 0.55 ? 1 : -1
      const r = 1.3 + Math.random() * 4.6
      const a = Math.random() * Math.PI * 2
      positions[i * 3] = Math.cos(a) * r + (Math.random() - 0.5) * 1.6
      positions[i * 3 + 1] = Math.sin(a) * r * 0.58 + (Math.random() - 0.5) * 1.6
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4.8
      colors[i * 3] = lane > 0 ? 0.12 : 0.48
      colors[i * 3 + 1] = lane > 0 ? 0.84 : 0.25
      colors[i * 3 + 2] = 1
      speeds[i] = lane * (0.006 + Math.random() * 0.024)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const material = new THREE.PointsMaterial({ size: 0.026, vertexColors: true, transparent: true, opacity: 0.92 })
    const cloud = new THREE.Points(geometry, material)
    group.add(cloud)

    const curves = []
    for (let i = 0; i < 32; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-4.5 + Math.random() * 2, -2 + Math.random() * 4, -1 + Math.random() * 2),
        new THREE.Vector3(-1.5 + Math.random() * 3, -1.6 + Math.random() * 3.2, -1 + Math.random() * 2),
        new THREE.Vector3(1.3 + Math.random() * 3, -1.8 + Math.random() * 3.6, -1 + Math.random() * 2),
        new THREE.Vector3(4.5 - Math.random() * 2, -2 + Math.random() * 4, -1 + Math.random() * 2)
      ])
      const tube = new THREE.TubeGeometry(curve, 72, 0.005, 6, false)
      const mat = new THREE.MeshBasicMaterial({ color: i % 2 ? 0x72e7ff : 0x7c5cff, transparent: true, opacity: 0.16 })
      const mesh = new THREE.Mesh(tube, mat)
      mesh.userData.speed = 0.008 + Math.random() * 0.02
      mesh.userData.phase = Math.random() * Math.PI * 2
      curves.push(mesh)
      group.add(mesh)
    }

    const mouse = { x: 0, y: 0 }
    const move = e => {
      mouse.x = (e.clientX / innerWidth - 0.5) * 2
      mouse.y = (e.clientY / innerHeight - 0.5) * 2
    }
    const resize = () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    }
    addEventListener('mousemove', move)
    addEventListener('resize', resize)

    let raf
    const tick = t => {
      const pos = geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        const ix = i * 3
        const x = pos[ix]
        const y = pos[ix + 1]
        const a = Math.atan2(y, x) + speeds[i] * 5.5
        const r = Math.hypot(x, y)
        pos[ix] = Math.cos(a) * r
        pos[ix + 1] = Math.sin(a) * r
        pos[ix + 2] += speeds[i] * 7
        if (pos[ix + 2] > 3.2) pos[ix + 2] = -3.2
        if (pos[ix + 2] < -3.2) pos[ix + 2] = 3.2
      }
      geometry.attributes.position.needsUpdate = true
      group.rotation.y += (mouse.x * 0.28 - group.rotation.y) * 0.035
      group.rotation.x += (-mouse.y * 0.18 - group.rotation.x) * 0.035
      cloud.rotation.z += 0.0025
      curves.forEach((mesh, index) => {
        mesh.rotation.z += mesh.userData.speed
        mesh.position.y = Math.sin(t * 0.001 + mesh.userData.phase) * 0.1
        mesh.material.opacity = 0.10 + Math.sin(t * 0.002 + index) * 0.04 + 0.08
      })
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick(0)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('mousemove', move)
      removeEventListener('resize', resize)
      mount.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      curves.forEach(mesh => { mesh.geometry.dispose(); mesh.material.dispose() })
      renderer.dispose()
    }
  }, [])
  return <div className="webgl" ref={ref} />
}

function SmokeCursor() {
  const canvas = useRef(null)
  useEffect(() => {
    const c = canvas.current
    const ctx = c.getContext('2d')
    let particles = []
    let hue = 190
    const resize = () => { c.width = innerWidth; c.height = innerHeight }
    const move = e => {
      hue = (hue + 4) % 360
      for (let i = 0; i < 9; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 18,
          y: e.clientY + (Math.random() - 0.5) * 18,
          vx: (Math.random() - 0.5) * 2.2,
          vy: (Math.random() - 0.5) * 2.2,
          r: 18 + Math.random() * 44,
          life: 1,
          hue: hue + Math.random() * 36
        })
      }
      document.documentElement.style.setProperty('--mx', `${(e.clientX / innerWidth) * 100}%`)
      document.documentElement.style.setProperty('--my', `${(e.clientY / innerHeight) * 100}%`)
    }
    const loop = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      ctx.globalCompositeOperation = 'lighter'
      particles = particles.filter(p => p.life > 0.02).slice(-260)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.r *= 1.018
        p.life *= 0.94
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r)
        g.addColorStop(0, `hsla(${p.hue}, 100%, 68%, ${p.life * 0.18})`)
        g.addColorStop(0.38, `hsla(${p.hue + 22}, 100%, 58%, ${p.life * 0.08})`)
        g.addColorStop(1, `hsla(${p.hue + 40}, 100%, 50%, 0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      requestAnimationFrame(loop)
    }
    resize(); loop()
    addEventListener('resize', resize)
    addEventListener('mousemove', move)
    return () => { removeEventListener('resize', resize); removeEventListener('mousemove', move) }
  }, [])
  return <canvas ref={canvas} className="smoke" />
}

function Header() {
  return <header className="nav"><a className="brand" href="#top"><span>To<b>,</b>Do</span></a><div><a href="#studio">Studio</a><a href="#services">Serviços</a><a href="#method">Método</a><a href="#contact">Contato</a></div><a className="navCta" href="#contact">Começar projeto</a></header>
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, .22], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, .22], [1, .25])
  return <section id="top" className="hero"><motion.div className="heroText" style={{ y, opacity }}><p className="eyebrow"><Sparkles size={16}/> websites, systems & intelligent automation</p><h1>Experiências digitais que fazem sua empresa parecer anos à frente.</h1><p className="lead">Criamos sites profissionais, WebApps, automações, agentes de IA, dashboards e ecossistemas digitais com estética premium, movimento, performance e clareza comercial.</p><div className="actions"><a className="primary" href="#services">Explorar soluções <ArrowRight size={18}/></a><a className="secondary" href="#studio">Ver experiência</a></div></motion.div><motion.div className="heroPanel" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1}}><div className="orb o1"/><div className="orb o2"/><div className="orb o3"/><div className="engine"><Cpu size={56}/><strong>To,Do Engine</strong></div><div className="chip c1">Sites premium</div><div className="chip c2">WebApps</div><div className="chip c3">IA</div><div className="chip c4">Dashboards</div></motion.div></section>
}

function Studio() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end end'] })
  const x = useTransform(scrollYProgress, [0,1], ['0%','-44%'])
  return <section id="studio" ref={ref} className="studio"><div className="sticky"><div className="stage"><div className="scan"/><div className="stageCore"><span>LIVE STUDIO</span><strong>Brand → Experience → System → Intelligence</strong></div><div className="tag t1">UI motion</div><div className="tag t2">WebGL</div><div className="tag t3">Automação</div><div className="tag t4">IA</div></div><motion.div className="story" style={{x}}>{manifesto.map(([n,t,p])=><article key={n}><span>{n}</span><h2>{t}</h2><p>{p}</p></article>)}</motion.div></div></section>
}

function Services(){return <section id="services" className="section"><div className="head"><p className="eyebrow"><Orbit size={16}/> serviços</p><h2>Do site que vende ao sistema que opera.</h2><p>Construímos a presença, a experiência e a infraestrutura digital para empresas que precisam crescer com tecnologia.</p></div><div className="serviceGrid">{services.map(({n,title,text,icon:Icon},i)=><motion.article className="card" key={title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.045}} whileHover={{y:-14}}><span>{n}</span><div className="icon"><Icon/></div><h3>{title}</h3><p>{text}</p><a href="#contact">solicitar <ArrowRight size={14}/></a></motion.article>)}</div></section>}
function Showcase(){return <section className="section showcase"><p className="eyebrow"><RadioTower size={16}/> experiências possíveis</p><div className="showGrid"><motion.div className="wide" whileHover={{scale:1.015}}><h2>Site institucional que parece produto global.</h2><p>Hero cinematográfico, narrativa de venda, WebGL, SEO, performance e CTAs claros.</p></motion.div><motion.div whileHover={{scale:1.02}}><h3>Portal interno</h3><p>Usuários, permissões, dashboards e fluxo de trabalho.</p></motion.div><motion.div whileHover={{scale:1.02}}><h3>Agente IA</h3><p>Atendimento, análise, leitura e execução assistida.</p></motion.div></div></section>}
function Method(){const steps=['Imersão estratégica','Narrativa e arquitetura','Design system e motion','Desenvolvimento e integrações','Automação, IA e deploy','Evolução contínua'];return <section id="method" className="section method"><div><p className="eyebrow"><MousePointer2 size={16}/> método</p><h2>Uma construção de produto, não um template.</h2></div><div className="timeline">{steps.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{i===0?'Entendemos mercado, oferta, público e operação.':'Cada etapa transforma estética, tecnologia e estratégia em uma experiência publicável.'}</p></article>)}</div></section>}
function Contact(){return <section id="contact" className="section contact"><motion.div initial={{opacity:0,scale:.94}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}><p className="eyebrow"><CheckCircle2 size={16}/> próximo passo</p><h2>Vamos construir o site que seus concorrentes vão usar como referência?</h2><p>Começamos por uma leitura do seu negócio e desenhamos uma experiência digital com visual, tecnologia e conversão.</p><a className="primary" href="mailto:contato@todo.com.br?subject=Quero%20um%20projeto%20premium%20com%20a%20ToDo">Começar agora <ArrowRight size={18}/></a></motion.div></section>}
function App(){const[load,setLoad]=useState(true);useEffect(()=>{const t=setTimeout(()=>setLoad(false),1000);return()=>clearTimeout(t)},[]);return <><FluidWebGL/><SmokeCursor/><div className="ambient"/><motion.div className="loader" animate={{opacity:load?1:0,pointerEvents:load?'auto':'none'}}><span>To,Do</span><i/></motion.div><Header/><main><Hero/><Studio/><Services/><Showcase/><Method/><Contact/></main><footer>To,Do — Automatize. Conecte. Evolua.</footer></>}
createRoot(document.getElementById('root')).render(<App/>);