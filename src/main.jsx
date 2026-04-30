import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Bot, BrainCircuit, ChartNoAxesCombined, Check, Cpu, DatabaseZap, Fingerprint, Gauge, Network, Orbit, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react'
import './styles.css'

const services = [
  { n: '01', title: 'Processos vivos', text: 'Fluxos que não ficam parados: recebem dados, executam rotinas, disparam alertas e criam histórico.', icon: Workflow },
  { n: '02', title: 'IA operacional', text: 'Agentes para triagem, atendimento, análise de documentos, organização e execução assistida.', icon: Bot },
  { n: '03', title: 'Painéis de decisão', text: 'Dashboards com indicadores, gargalos, alertas e visão executiva da operação.', icon: ChartNoAxesCombined },
  { n: '04', title: 'Integrações reais', text: 'Planilhas, APIs, formulários, bancos e sistemas conversando dentro da mesma lógica.', icon: DatabaseZap }
]

const story = [
  { label: 'Diagnóstico', title: 'Sua empresa não precisa de mais uma tela.', text: 'Ela precisa de um sistema que entenda o que acontece entre pessoas, dados, tarefas e decisões.', tag: '01 / leitura do caos' },
  { label: 'Arquitetura', title: 'Transformamos operação em fluxo.', text: 'Cada etapa vira um módulo: entrada de dados, validação, decisão, ação, alerta e registro.', tag: '02 / desenho do sistema' },
  { label: 'Execução', title: 'O processo começa a se mover sozinho.', text: 'O que era manual passa a rodar com automação, IA, dashboards e integrações conectadas.', tag: '03 / operação inteligente' }
]

function PointerGlow() {
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const sx = useSpring(x, { stiffness: 130, damping: 24 })
  const sy = useSpring(y, { stiffness: 130, damping: 24 })

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX - 240)
      y.set(event.clientY - 240)
      document.documentElement.style.setProperty('--mx', `${(event.clientX / innerWidth) * 100}%`)
      document.documentElement.style.setProperty('--my', `${(event.clientY / innerHeight) * 100}%`)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return <motion.div className="pointer-glow" style={{ x: sx, y: sy }} />
}

function NeuralCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let points = []
    let raf
    const pointer = { x: -9999, y: -9999 }

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      canvas.width = innerWidth * dpr
      canvas.height = innerHeight * dpr
      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const amount = Math.min(190, Math.floor((innerWidth * innerHeight) / 7800))
      points = Array.from({ length: amount }, (_, i) => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        vx: (Math.random() - 0.5) * 0.36,
        vy: (Math.random() - 0.5) * 0.36,
        r: Math.random() * 1.7 + 0.8,
        phase: i * 0.19
      }))
    }

    const move = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, innerWidth, innerHeight)
      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -40 || p.x > innerWidth + 40) p.vx *= -1
        if (p.y < -40 || p.y > innerHeight + 40) p.vy *= -1

        const dx = p.x - pointer.x
        const dy = p.y - pointer.y
        const dist = Math.hypot(dx, dy)
        if (dist < 180 && dist > 1) {
          p.x += (dx / dist) * 0.5
          p.y += (dy / dist) * 0.5
        }

        const pulse = Math.sin(time * 0.0018 + p.phase) * 0.5 + 0.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + pulse * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(93, 207, 255, ${0.18 + pulse * 0.26})`
        ctx.fill()
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i]
          const b = points[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 142) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(93, 207, 255, ${(1 - d / 142) * 0.25})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw(0)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', move)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return <canvas ref={ref} className="neural" aria-hidden="true" />
}

function Header() {
  return (
    <header className="nav-bar">
      <a className="brand" href="#top"><span>✓</span>To<b>,</b>Do</a>
      <nav>
        <a href="#story">Experiência</a>
        <a href="#suite">Soluções</a>
        <a href="#lab">Lab</a>
        <a href="#contact">Contato</a>
      </nav>
      <a href="#contact" className="small-cta">Desenhar sistema</a>
    </header>
  )
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.35])

  return (
    <section id="top" className="hero-shell">
      <motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}><Sparkles size={16}/> To,Do · Intelligent Operating Layer</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>Sua operação merece uma interface que parece pensar.</motion.h1>
        <motion.p className="lead" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }}>
          Criamos experiências digitais, automações, agentes de IA e dashboards que conectam pessoas, dados e decisões em um ecossistema vivo.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }}>
          <a href="#story" className="primary">Explorar experiência <ArrowRight size={18}/></a>
          <a href="#suite" className="secondary">Ver soluções</a>
        </motion.div>
      </motion.div>

      <SystemGalaxy />

      <div className="scroll-hint"><span>scroll</span><i /></div>
    </section>
  )
}

function SystemGalaxy() {
  const rings = useMemo(() => [0, 1, 2, 3], [])
  return (
    <motion.div className="galaxy" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
      {rings.map((ring) => <div key={ring} className={`galaxy-ring ring-${ring}`} />)}
      <motion.div className="galaxy-core" animate={{ rotate: [0, 3, -3, 0] }} transition={{ duration: 6, repeat: Infinity }}>
        <Cpu size={66}/>
        <strong>To,Do OS</strong>
      </motion.div>
      <FloatingNode className="g-a" icon={<BrainCircuit />} label="IA" />
      <FloatingNode className="g-b" icon={<Network />} label="APIs" />
      <FloatingNode className="g-c" icon={<Gauge />} label="Dados" />
      <FloatingNode className="g-d" icon={<ShieldCheck />} label="Controle" />
      <motion.div className="metric-card m-a" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4.5 }}>
        <span>tarefas manuais</span><strong>-64%</strong><i><em style={{ width: '64%' }}/></i>
      </motion.div>
      <motion.div className="metric-card m-b" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 5.2 }}>
        <span>fluxos conectados</span><strong>+82%</strong><i><em style={{ width: '82%' }}/></i>
      </motion.div>
    </motion.div>
  )
}

function FloatingNode({ className, icon, label }) {
  return <motion.div className={`floating-node ${className}`} animate={{ y: [0, -16, 0] }} transition={{ repeat: Infinity, duration: 5.4 }}>{icon}<span>{label}</span></motion.div>
}

function Story() {
  const target = useRef(null)
  const { scrollYProgress } = useScroll({ target, offset: ['start start', 'end end'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60])
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-38%'])

  return (
    <section id="story" ref={target} className="story-section">
      <div className="story-sticky">
        <motion.div className="story-stage" style={{ rotate }}>
          <div className="story-orbit" />
          <div className="story-orbit small" />
          <div className="story-card main-card">
            <span>LIVE OPERATION</span>
            <strong>Manual → Connected → Intelligent</strong>
          </div>
          <div className="mini-panel p1">dados</div>
          <div className="mini-panel p2">rotinas</div>
          <div className="mini-panel p3">decisão</div>
        </motion.div>
        <motion.div className="horizontal-copy" style={{ x }}>
          {story.map((item) => <article key={item.title}><span>{item.tag}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}
        </motion.div>
      </div>
    </section>
  )
}

function Suite() {
  return (
    <section id="suite" className="section suite-section">
      <div className="section-head">
        <p className="eyebrow"><Orbit size={16}/> Product suite</p>
        <h2>Um ecossistema de construção para empresas que precisam sair do manual.</h2>
      </div>
      <div className="suite-grid">
        {services.map(({ n, title, text, icon: Icon }, index) => (
          <motion.article className="suite-card" key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -12, rotate: index % 2 ? -1.2 : 1.2 }}>
            <span>{n}</span>
            <div className="suite-icon"><Icon size={28}/></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#contact">construir módulo <ArrowRight size={15}/></a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Lab() {
  const modules = ['CRM', 'WhatsApp', 'Planilhas', 'Financeiro', 'Operação', 'Relatórios', 'Suporte', 'IA']
  return (
    <section id="lab" className="section lab-section">
      <div className="lab-copy">
        <p className="eyebrow"><Fingerprint size={16}/> To,Do Lab</p>
        <h2>Uma camada inteligente conectando o que já existe.</h2>
        <p>Não partimos da tela. Partimos do ecossistema: onde o dado nasce, quem precisa agir, qual decisão deve ser tomada e como o processo aprende com isso.</p>
      </div>
      <div className="lab-board">
        <div className="lab-core"><Zap/>Core</div>
        {modules.map((module, index) => <motion.div key={module} className={`lab-module lm-${index}`} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 + index * .22 }}>{module}</motion.div>)}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <motion.div className="contact-card" initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
        <p className="eyebrow"><Check size={16}/> Próximo passo</p>
        <h2>Vamos desenhar a versão inteligente da sua operação?</h2>
        <p>Mapeamos seus processos e transformamos a operação em um ecossistema digital com automação, IA e indicadores reais.</p>
        <a className="primary" href="mailto:contato@todo.com.br?subject=Quero%20desenhar%20um%20sistema%20inteligente">Falar com a To,Do <ArrowRight size={18}/></a>
      </motion.div>
    </section>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <NeuralCanvas />
      <PointerGlow />
      <div className="ambient" />
      <motion.div className="loader" animate={{ opacity: loaded ? 0 : 1, pointerEvents: loaded ? 'none' : 'auto' }} transition={{ duration: .5 }}><span>To,Do</span><i/></motion.div>
      <Header />
      <main>
        <Hero />
        <Story />
        <Suite />
        <Lab />
        <Contact />
      </main>
      <footer className="footer">To,Do — Automatize. Conecte. Evolua.</footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
