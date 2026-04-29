import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight, Bot, BrainCircuit, ChartNoAxesCombined, CheckCircle2, Cpu,
  DatabaseZap, Gauge, MessageCircle, Network, ShieldCheck, Sparkles, Workflow, Zap
} from 'lucide-react'
import './styles.css'

const WHATSAPP_URL = 'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20automatizar%20processos%20com%20a%20To%2CDo.'

const services = [
  {
    icon: Workflow,
    title: 'Automação de processos',
    text: 'Reduza tarefas repetitivas, padronize fluxos internos e elimine retrabalho operacional.'
  },
  {
    icon: Bot,
    title: 'Agentes de IA',
    text: 'Crie assistentes inteligentes para atendimento, análise, organização e execução de rotinas.'
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Dashboards e dados',
    text: 'Transforme informações dispersas em painéis claros para tomada de decisão.'
  },
  {
    icon: DatabaseZap,
    title: 'Integrações',
    text: 'Conecte planilhas, sistemas, formulários, APIs e bancos de dados em uma operação única.'
  }
]

const benefits = [
  'Menos tarefas manuais',
  'Mais controle operacional',
  'Decisões baseadas em dados',
  'Integração entre equipes',
  'Padronização de processos',
  'Crescimento com previsibilidade'
]

const steps = [
  ['01', 'Diagnóstico', 'Mapeamos gargalos, tarefas repetitivas, riscos e oportunidades de automação.'],
  ['02', 'Arquitetura', 'Desenhamos o fluxo ideal, a solução técnica e a experiência de uso.'],
  ['03', 'Construção', 'Criamos sistemas, automações, integrações e painéis sob medida.'],
  ['04', 'Evolução', 'Medimos, ajustamos e ampliamos a solução conforme a operação cresce.']
]

function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="grid"></div>
      <div className="orb orb-a"></div>
      <div className="orb orb-b"></div>
      <div className="beam beam-a"></div>
      <div className="beam beam-b"></div>
      <div className="noise"></div>
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="To,Do">
        <img src="/logo-todo.png" alt="To,Do" />
      </a>

      <nav className="nav" aria-label="Navegação principal">
        <a href="#servicos">Soluções</a>
        <a href="#metodo">Método</a>
        <a href="#beneficios">Benefícios</a>
        <a href="#contato">Contato</a>
      </nav>

      <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        Fale conosco
      </a>
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="automation-core">
        <div className="core-ring ring-1"></div>
        <div className="core-ring ring-2"></div>
        <div className="core-ring ring-3"></div>
        <div className="core-icon"><Cpu size={54} /></div>
        <div className="node node-1"><BrainCircuit size={26} /></div>
        <div className="node node-2"><Network size={26} /></div>
        <div className="node node-3"><Gauge size={26} /></div>
        <div className="node node-4"><ShieldCheck size={26} /></div>
      </div>

      <div className="dashboard-card card-a">
        <span>Processos automatizados</span>
        <strong>+82%</strong>
        <div className="bar"><i style={{ width: '82%' }} /></div>
      </div>

      <div className="dashboard-card card-b">
        <span>Retrabalho reduzido</span>
        <strong>-64%</strong>
        <div className="bar"><i style={{ width: '64%' }} /></div>
      </div>

      <div className="floating-chip chip-a"><Zap size={16} /> Automação</div>
      <div className="floating-chip chip-b"><Sparkles size={16} /> IA aplicada</div>
    </div>
  )
}

function App() {
  return (
    <main>
      <Background />
      <Header />

      <section id="inicio" className="hero section">
        <div className="hero-content">
          <p className="eyebrow"><Sparkles size={16} /> Tecnologia para operações inteligentes</p>
          <h1>Automatize processos. Conecte pessoas. Evolua resultados.</h1>
          <p className="lead">
            A To,Do desenvolve automações, sistemas, dashboards e agentes de IA para empresas que querem ganhar tempo,
            organizar fluxos internos e crescer com mais controle.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Quero automatizar minha empresa <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#servicos">Ver soluções</a>
          </div>

          <div className="trust-row">
            <div><strong>Automação</strong><span>menos rotina manual</span></div>
            <div><strong>Integração</strong><span>dados conectados</span></div>
            <div><strong>IA</strong><span>mais inteligência operacional</span></div>
          </div>
        </div>

        <HeroVisual />
      </section>

      <section id="servicos" className="section">
        <div className="section-heading">
          <p className="eyebrow">O que fazemos</p>
          <h2>Soluções digitais para empresas que não querem mais operar no improviso.</h2>
          <p>
            Criamos tecnologia prática para transformar processos manuais em fluxos organizados, mensuráveis e escaláveis.
          </p>
        </div>

        <div className="service-grid">
          {services.map((item) => {
            const Icon = item.icon
            return (
              <article className="service-card" key={item.title}>
                <div className="icon-box"><Icon size={26} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Diagnóstico</p>
          <h2>O problema quase nunca é falta de equipe. É excesso de tarefa manual.</h2>
        </div>
        <div className="insight-card">
          <p>
            Quando a operação depende de planilhas soltas, mensagens, conferências manuais e retrabalho,
            a empresa perde velocidade, controle e previsibilidade. A To,Do organiza esse fluxo com tecnologia.
          </p>
          <ul>
            <li><CheckCircle2 size={18} /> Menos dependência de processos informais</li>
            <li><CheckCircle2 size={18} /> Mais clareza sobre o que acontece na operação</li>
            <li><CheckCircle2 size={18} /> Mais tempo para decisões realmente importantes</li>
          </ul>
        </div>
      </section>

      <section id="metodo" className="section">
        <div className="section-heading compact">
          <p className="eyebrow">Nosso método</p>
          <h2>Do caos operacional ao fluxo inteligente.</h2>
        </div>

        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="beneficios" className="section benefits-section">
        <div className="benefits-copy">
          <p className="eyebrow">Por que automatizar</p>
          <h2>Empresas organizadas crescem com menos atrito.</h2>
          <p>
            A tecnologia certa não complica a operação. Ela remove ruído, reduz esforço repetitivo e deixa os dados trabalharem a favor da empresa.
          </p>
        </div>

        <div className="benefit-list">
          {benefits.map((benefit) => (
            <div className="benefit" key={benefit}>
              <CheckCircle2 size={18} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="section cta-section">
        <div className="cta-card">
          <p className="eyebrow">Próximo passo</p>
          <h2>Sua empresa ainda opera no manual?</h2>
          <p>
            Vamos mapear quais processos podem ser automatizados e transformar sua operação em um sistema mais inteligente.
          </p>
          <a className="primary-button" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Chamar a To,Do no WhatsApp <MessageCircle size={18} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <img src="/logo-todo.png" alt="To,Do" />
        <p>Automatize. Conecte. Evolua.</p>
        <span>© {new Date().getFullYear()} To,Do. Todos os direitos reservados.</span>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
