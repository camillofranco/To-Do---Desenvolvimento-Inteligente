import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import * as THREE from 'three'
import { ArrowRight, Bot, BrainCircuit, ChartNoAxesCombined, Check, Code2, Cpu, DatabaseZap, Fingerprint, Globe2, Layers3, Network, Orbit, Palette, ShieldCheck, Sparkles, Store, Workflow, Zap } from 'lucide-react'
import './styles.css'

const services = [
  { n: '01', title: 'Sites profissionais', text: 'Landing pages, sites institucionais e experiências premium com visual de marca grande, SEO e performance.', icon: Globe2 },
  { n: '02', title: 'WebApps e sistemas', text: 'Portais, dashboards, CRMs, ferramentas internas e sistemas sob medida para operação real.', icon: Code2 },
  { n: '03', title: 'Automação de processos', text: 'Fluxos que executam tarefas repetitivas, conectam dados e reduzem falhas operacionais.', icon: Workflow },
  { n: '04', title: 'Agentes de IA', text: 'IA para atendimento, análise de documentos, triagem, organização e execução assistida.', icon: Bot },
  { n: '05', title: 'Dashboards inteligentes', text: 'Painéis vivos para indicadores, gargalos, alertas e visão executiva da operação.', icon: ChartNoAxesCombined },
  { n: '06', title: 'Branding digital', text: 'Direção visual, identidade aplicada e design system para marcas que precisam parecer referência.', icon: Palette },
  { n: '07', title: 'Integrações', text: 'Planilhas, APIs, formulários, bancos e sistemas conversando dentro da mesma arquitetura.', icon: DatabaseZap },
  { n: '08', title: 'E-commerce e funis', text: 'Estruturas de venda, páginas de conversão, campanhas e jornadas digitais de aquisição.', icon: Store }
]

const cases = [
  ['Site premium', 'Experiência visual com narrativa, movimento, SEO e CTA claro.'],
  ['Portal interno', 'Acesso por usuários, dashboards, permissões e fluxo operacional.'],
  ['Automação IA', 'Rotinas manuais convertidas em agentes, validações e integrações.']
]

function WebGLScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 7

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const count = 520
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 1.5 + Math.random() * 3.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      colors[i * 3] = 0.15
      colors[i * 3 + 1] = 0.65 + Math.random() * 0.25
      colors[i * 3 + 2] = 1
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.9 })
    const points = new THREE.Points(geometry, material)
    group.add(points)

    const linePositions = []
    for (let i = 0; i < 160; i++) {
      const a = Math.floor(Math.random() * count)
      const b = Math.floor(Math.random() * count)
      linePositions.push(positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2])
      linePositions.push(positions[b * 3], positions[b * 3 + 1], positions[b * 3 + 2])
    }
    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x58b6ff, transparent: true, opacity: 0.14 })
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    group.add(lines)

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(2.3, 0.008, 16, 160),
      new THREE.MeshBasicMaterial({ color: 0x72e7ff, transparent: true, opacity: 0.45 })
    )
    const torus2 = torus.clone()
    torus2.rotation.x = Math.PI / 2
    group.add(torus, torus2)

    const mouse = { x: 0, y: 0 }
    const onMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.8
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.8
    }
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', onResize)

    let raf
    const tick = () => {
      group.rotation.y += 0.0025
      group.rotation.x += 0.001
      group.rotation.y += (mouse.x - group.rotation.y * 0.06) * 0.004
      group.rotation.x += (-mouse.y - group.rotation.x * 0.06) * 0.004
      points.rotation.z += 0.0015
      lines.rotation.z -= 0.0008
      torus.rotation.z += 0.003
      torus2.rotation.y += 0.002
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      geometry.dispose()
      lineGeometry.dispose()
      material.dispose()
      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <div className="webgl" ref={mountRef} aria-hidden="true" />
}

function PointerGlow() {
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const sx = useSpring(x, { stiffness: 130, damping: 24 })
  const sy = useSpring(y, { stiffness: 130, damping: 24 })
  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX - 260)
      y.set(event.clientY - 260)
      document.documentElement.style.setProperty('--mx', `${(event.clientX / innerWidth) * 100}%`)
      document.documentElement.style.setProperty('--my', `${(event.clientY / innerHeight) * 100}%`)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])
  return <motion.div className="pointer-glow" style={{ x: sx, y: sy }} />
}

function Header() {
  return <header className="nav-bar"><a className="brand" href="#top"><span>✓</span>To<b>,</b>Do</a><nav><a href="#story">Experiência</a><a href="#services">Serviços</a><a href="#method">Método</a><a href="#contact">Contato</a></nav><a href="#contact" className="small-cta">Construir projeto</a></header>
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.22], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.35])
  return <section id="top" className="hero-shell"><motion.div className="hero-copy" style={{ y, opacity }}><p className="eyebrow"><Sparkles size={16}/> Desenvolvimento inteligente para marcas e operações</p><h1>Sites, sistemas e automações com experiência de produto global.</h1><p className="lead">A To,Do cria sites profissionais, interfaces premium, webapps, agentes de IA, dashboards e automações para empresas que querem parecer maiores, vender melhor e operar com mais inteligência.</p><div className="hero-actions"><a href="#services" className="primary">Explorar serviços <ArrowRight size={18}/></a><a href="#story" className="secondary">Ver experiência</a></div></motion.div><SystemDeck/><div className="scroll-hint"><span>scroll</span><i/></div></section>
}

function SystemDeck() {
  return <motion.div className="deck" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}><div className="deck-orbit o1"/><div className="deck-orbit o2"/><div className="deck-orbit o3"/><div className="deck-core"><Cpu size={64}/><strong>To,Do Engine</strong></div><Floating className="d-a" icon={<Globe2/>} label="Sites"/><Floating className="d-b" icon={<BrainCircuit/>} label="IA"/><Floating className="d-c" icon={<ChartNoAxesCombined/>} label="Dados"/><Floating className="d-d" icon={<ShieldCheck/>} label="Controle"/><motion.div className="deck-panel p-a" animate={{ y: [0,-12,0] }} transition={{ repeat: Infinity, duration: 4.8 }}><span>percepção de marca</span><strong>10x</strong></motion.div><motion.div className="deck-panel p-b" animate={{ y: [0,12,0] }} transition={{ repeat: Infinity, duration: 5.2 }}><span>operação manual</span><strong>-64%</strong></motion.div></motion.div>
}
function Floating({ className, icon, label }) { return <motion.div className={`floating ${className}`} animate={{ y: [0, -16, 0] }} transition={{ repeat: Infinity, duration: 5.4 }}>{icon}<span>{label}</span></motion.div> }

function Story() {
  const target = useRef(null)
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-45%'])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 80])
  return <section id="story" ref={target} className="story-section"><div className="story-sticky"><motion.div className="story-visual" style={{ rotate }}><div className="visual-grid"/><div className="story-main"><span>LIVE DIGITAL ECOSYSTEM</span><strong>Brand → Product → Operation → Intelligence</strong></div><div className="mini m1">site premium</div><div className="mini m2">webapp</div><div className="mini m3">IA</div><div className="mini m4">dados</div></motion.div><motion.div className="story-copy-row" style={{ x }}><article><span>01 / Marca</span><h2>Primeiro, a empresa precisa parecer inevitável.</h2><p>Sites genéricos não posicionam. Criamos presença digital com narrativa, estética, movimento e clareza comercial.</p></article><article><span>02 / Produto</span><h2>Depois, a experiência precisa ser útil.</h2><p>Transformamos ideias em interfaces, sistemas, portais e fluxos que resolvem problemas reais.</p></article><article><span>03 / Operação</span><h2>Por fim, o processo precisa trabalhar sozinho.</h2><p>Automação, IA, integrações e dashboards conectam a empresa em uma camada operacional inteligente.</p></article></motion.div></div></section>
}

function Services() {
  return <section id="services" className="section services-section"><div className="section-head"><p className="eyebrow"><Orbit size={16}/> Serviços</p><h2>Uma stack criativa e técnica para construir empresas mais fortes.</h2><p>Do site ao sistema interno. Da identidade ao agente de IA. Da página comercial ao painel operacional.</p></div><div className="service-grid">{services.map(({n,title,text,icon:Icon},i)=><motion.article className="service-card" key={title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} whileHover={{y:-12}}><span>{n}</span><div className="service-icon"><Icon/></div><h3>{title}</h3><p>{text}</p><a href="#contact">solicitar <ArrowRight size={15}/></a></motion.article>)}</div></section>
}

function Cases() { return <section className="section cases-section"><div className="section-head"><p className="eyebrow"><Layers3 size={16}/> Construções possíveis</p><h2>Projetos que deixam de ser “site” e viram experiência.</h2></div><div className="case-grid">{cases.map(([t,p],i)=><motion.div className="case-card" key={t} whileHover={{scale:1.02}}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></motion.div>)}</div></section> }

function Method() { const steps=[['Imersão','Entendemos negócio, oferta, público, operação e nível de maturidade digital.'],['Arquitetura','Desenhamos narrativa, experiência, stack, dados, automações e roadmap.'],['Construção','Criamos interface, animações, código, integrações e camada operacional.'],['Evolução','Medimos, refinamos e ampliamos o produto conforme o negócio cresce.']]; return <section id="method" className="section method-section"><div><p className="eyebrow"><Fingerprint size={16}/> Método</p><h2>Não começamos pelo layout. Começamos pelo sistema.</h2></div><div className="method-list">{steps.map(([t,p],i)=><motion.article className="method-item" key={t} initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><span>0{i+1}</span><h3>{t}</h3><p>{p}</p></motion.article>)}</div></section> }

function Contact() { return <section id="contact" className="section contact-section"><motion.div className="contact-card" initial={{opacity:0,scale:.94}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}><p className="eyebrow"><Check size={16}/> Projeto To,Do</p><h2>Vamos construir algo que pareça impossível para o seu mercado?</h2><p>Me chame para desenharmos um site, sistema, automação ou ecossistema completo com experiência visual de alto impacto.</p><a className="primary" href="mailto:contato@todo.com.br?subject=Quero%20construir%20um%20projeto%20com%20a%20ToDo">Começar projeto <ArrowRight size={18}/></a></motion.div></section> }

function App(){const[loaded,setLoaded]=useState(false);useEffect(()=>{const t=setTimeout(()=>setLoaded(true),1000);return()=>clearTimeout(t)},[]);return <><WebGLScene/><PointerGlow/><div className="ambient"/><motion.div className="loader" animate={{opacity:loaded?0:1,pointerEvents:loaded?'none':'auto'}}><span>To,Do</span><i/></motion.div><Header/><main><Hero/><Story/><Services/><Cases/><Method/><Contact/></main><footer className="footer">To,Do — Automatize. Conecte. Evolua.</footer></>}

createRoot(document.getElementById('root')).render(<App/>)
