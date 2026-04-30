import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Bot, BrainCircuit, ChartNoAxesCombined, Cpu, DatabaseZap, Gauge, Layers3, MousePointer2, Network, Orbit, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react'
import './styles.css'

const services = [
  ['01', 'Automação de processos', 'Fluxos que executam tarefas repetitivas, reduzem falhas e criam previsibilidade operacional.', Workflow],
  ['02', 'Agentes de IA', 'Assistentes treinados para atendimento, análise, triagem, organização e execução de rotinas.', Bot],
  ['03', 'Dashboards inteligentes', 'Painéis vivos para leitura de operação, performance, gargalos e oportunidades.', ChartNoAxesCombined],
  ['04', 'Integrações', 'Sistemas, planilhas, formulários, APIs e dados conectados em uma arquitetura única.', DatabaseZap]
]

const chapters = [
  ['Manual', 'A operação depende de pessoas lembrando, copiando, conferindo e atualizando dados.'],
  ['Conectado', 'As informações começam a circular entre setores, sistemas e pontos de decisão.'],
  ['Inteligente', 'A tecnologia passa a sugerir, alertar, executar e evoluir com a operação.']
]

function NeuralBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let points = []
    let raf
    const pointer = { x: -9999, y: -9999, active: false }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(170, Math.floor((window.innerWidth * window.innerHeight) / 9000))
      points = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 1.8 + 0.9,
        phase: i * 0.13
      }))
    }

    const move = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      pointer.active = true
      document.documentElement.style.setProperty('--mx', `${(event.clientX / window.innerWidth) * 100}%`)
      document.documentElement.style.setProperty('--my', `${(event.clientY / window.innerHeight) * 100}%`)
    }

    const render = (time) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -30 || p.x > window.innerWidth + 30) p.vx *= -1
        if (p.y < -30 || p.y > window.innerHeight + 30) p.vy *= -1

        const dx = p.x - pointer.x
        const dy = p.y - pointer.y
        const dist = Math.hypot(dx, dy)
        if (pointer.active && dist < 190 && dist > 1) {
          p.x += (dx / dist) * 0.56
          p.y += (dy / dist) * 0.56
        }

        const pulse = Math.sin(time * 0.0015 + p.phase) * 0.45 + 0.55
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + pulse * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(82, 183, 255, ${0.22 + pulse * 0.22})`
        ctx.fill()
      }

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i]
          const b = points[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 150) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(82, 183, 255, ${(1 - d / 150) * 0.24})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(render)
    }

    resize()
    render(0)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', move)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />
}

function Header() {
  return (
    <header className="header">
      <a href="#top" className="logo" aria-label="To,Do">
        <span className="logo-mark">✓</span>
        <span>To<b>,</b>Do</span>
      </a>
      <nav>
        <a href="#experience">Experiência</a>
        <a href="#solutions">Soluções</a>
        <a href="#ecosystem">Ecossistema</a>
        <a href="#contact">Contato</a>
      </nav>
      <a className="nav-cta" href="#contact">Começar</a>
    </header>
  )
}

function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -90])
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.86])

  return (
    <section id="top" className="hero section-shell">
      <motion.div className="hero-copy" style={{ y }}>
        <p className="eyebrow"><Sparkles size={16} /> Desenvolvimento inteligente</p>
        <h1>Construímos sistemas que fazem sua operação parecer viva.</h1>
        <p className="lead">
          A To,Do transforma processos manuais em experiências digitais inteligentes: automação, IA, dados e interfaces que evoluem com o negócio.
        </p>
        <div className="hero-actions">
          <a className="primary" href="#contact">Desenhar minha automação <ArrowRight size={18} /></a>
          <a className="secondary" href="#experience">Ver experiência</a>
        </div>
        <div className="micro-grid">
          <div><strong>Processos</strong><span>mapeados e automatizados</span></div>
          <div><strong>Dados</strong><span>visíveis em tempo real</span></div>
          <div><strong>IA</strong><span>aplicada à operação</span></div>
        </div>
      </motion.div>

      <motion.div className="system-stage" style={{ scale }}>
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
        <div className="orbit orbit-c" />
        <motion.div className="system-core" animate={{ rotate: [0, 4, -4, 0] }} transition={{ duration: 7, repeat: Infinity }}>
          <Cpu size={62} />
        </motion.div>
        <motion.div className="stage-node node-a" animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity }}><BrainCircuit /></motion.div>
        <motion.div className="stage-node node-b" animate={{ x: [0, 16, 0] }} transition={{ duration: 5.6, repeat: Infinity }}><Network /></motion.div>
        <motion.div className="stage-node node-c" animate={{ y: [0, 14, 0] }} transition={{ duration: 4.8, repeat: Infinity }}><Gauge /></motion.div>
        <motion.div className="stage-node node-d" animate={{ x: [0, -14, 0] }} transition={{ duration: 6.4, repeat: Infinity }}><ShieldCheck /></motion.div>
        <motion.div className="console console-a" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <span>fluxo automatizado</span><strong>82%</strong><i><em style={{ width: '82%' }} /></i>
        </motion.div>
        <motion.div className="console console-b" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <span>retrabalho reduzido</span><strong>64%</strong><i><em style={{ width: '64%' }} /></i>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="scrolly">
      <div className="sticky-visual">
        <div className="story-screen">
          <div className="screen-header"><span /> <span /> <span /></div>
          <div className="flow-map">
            <motion.div className="flow-dot f1" animate={{ scale: [1, 1.35, 1] }} transition={{ duration: 2.6, repeat: Infinity }} />
            <motion.div className="flow-dot f2" animate={{ scale: [1, 1.35, 1] }} transition={{ duration: 2.8, repeat: Infinity, delay: .4 }} />
            <motion.div className="flow-dot f3" animate={{ scale: [1, 1.35, 1] }} transition={{ duration: 3, repeat: Infinity, delay: .8 }} />
            <div className="flow-line one" />
            <div className="flow-line two" />
            <div className="signal-card top"><Layers3 size={18}/> Processos</div>
            <div className="signal-card mid"><BrainCircuit size={18}/> IA</div>
            <div className="signal-card bottom"><ChartNoAxesCombined size={18}/> Decisão</div>
          </div>
        </div>
      </div>
      <div className="story-copy">
        {chapters.map(([title, text], index) => (
          <motion.article className="chapter" key={title} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.55 }}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="solutions" className="section-shell block-section">
      <div className="section-heading">
        <p className="eyebrow"><Orbit size={16} /> Soluções</p>
        <h2>Não entregamos apenas telas. Entregamos fluxo, controle e evolução.</h2>
      </div>
      <div className="service-grid">
        {services.map(([num, title, text, Icon], index) => (
          <motion.article className="service-card" key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
            <span>{num}</span>
            <div className="icon-box"><Icon /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Ecosystem() {
  const modules = ['Atendimento', 'Operação', 'Dados', 'IA', 'Financeiro', 'Gestão']
  return (
    <section id="ecosystem" className="section-shell ecosystem-section">
      <div>
        <p className="eyebrow"><MousePointer2 size={16} /> Ecossistema To,Do</p>
        <h2>Uma camada inteligente por cima da sua empresa.</h2>
        <p>
          Imagine cada área conectada a um núcleo operacional: dados entram, processos rodam, alertas aparecem e decisões ficam mais simples.
        </p>
      </div>
      <div className="ecosystem-board">
        <div className="ecosystem-core"><Zap size={34} /> To,Do OS</div>
        {modules.map((module, index) => (
          <motion.div className={`eco-module eco-${index}`} key={module} animate={{ y: [0, -10, 0] }} transition={{ duration: 4 + index * 0.25, repeat: Infinity }}>
            {module}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <motion.div className="contact-card" initial={{ opacity: 0, scale: .95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
        <p className="eyebrow"><Sparkles size={16} /> Próximo passo</p>
        <h2>Sua empresa ainda opera no manual?</h2>
        <p>Vamos transformar sua operação em um sistema mais conectado, automatizado e inteligente.</p>
        <a className="primary" href="mailto:contato@todo.com.br?subject=Quero%20automatizar%20minha%20empresa">Falar com a To,Do <ArrowRight size={18} /></a>
      </motion.div>
    </section>
  )
}

function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <NeuralBackground />
      <div className="ambient" />
      <motion.div className="loader" animate={{ opacity: ready ? 0 : 1, pointerEvents: ready ? 'none' : 'auto' }}>
        <span>To,Do</span>
        <i />
      </motion.div>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Services />
        <Ecosystem />
        <Contact />
      </main>
      <footer className="footer section-shell">To,Do — Automatize. Conecte. Evolua.</footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
