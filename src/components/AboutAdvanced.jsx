import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutAdvanced() {
  const ref = useRef(null)

  useEffect(() => {
    const elements = ref.current?.querySelectorAll('.about-item')
    if (!elements) return

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={ref} className="about-advanced">
      <div className="container">
        <div className="about-header">
          <h2>
            <span className="gradient-text-gold">Automação inteligente</span> que entende seu negócio
          </h2>
          <p className="about-subtitle">
            Combinamos tecnologia de ponta com compreensão profunda do atendimento ao cliente.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-item">
            <div className="about-icon">🤖</div>
            <h3>Tecnologia IA Avançada</h3>
            <p>Machine learning que aprende com cada interação e melhora continuamente</p>
          </div>

          <div className="about-item">
            <div className="about-icon">⚡</div>
            <h3>Implementação Rápida</h3>
            <p>Deploy em dias, não meses. Pronto para produção em 48 horas</p>
          </div>

          <div className="about-item">
            <div className="about-icon">🔒</div>
            <h3>Segurança Premium</h3>
            <p>Criptografia military-grade, LGPD compliant, backups redundantes</p>
          </div>

          <div className="about-item">
            <div className="about-icon">📊</div>
            <h3>Analytics em Tempo Real</h3>
            <p>Dashboard intuitivo com métricas detalhadas e insights acionáveis</p>
          </div>

          <div className="about-item">
            <div className="about-icon">💬</div>
            <h3>Suporte 24/7 Premium</h3>
            <p>Equipe dedicada respondendo em minutos, não horas</p>
          </div>

          <div className="about-item">
            <div className="about-icon">🚀</div>
            <h3>Escalabilidade Ilimitada</h3>
            <p>Cresce com seu negócio, de 100 a 1 milhão de atendimentos/mês</p>
          </div>
        </div>
      </div>
    </section>
  )
}
