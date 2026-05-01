import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WebGLScene from './WebGLScene'
import { ArrowRight, Sparkles } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Animar título
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    // Animar subtítulo
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
    )

    // Animar CTA
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.4, ease: 'power3.out' }
    )

    // Hover animation
    const buttons = document.querySelectorAll('.cta-button')
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3 })
      })
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3 })
      })
    })
  }, [])

  return (
    <section className="hero">
      <div className="hero-background">
        <WebGLScene />
      </div>
      
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <div className="badge">
          <Sparkles size={16} />
          <span>Inteligência Artificial para Atendimento</span>
        </div>

        <h1 ref={titleRef} className="hero-title">
          IA que <span className="gradient-text">entende</span> seu negócio
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          Automação inteligente de atendimento ao cliente. 24/7, com 100% de qualidade. 
          Reduzimos seus custos em até 70% enquanto aumentamos a satisfação.
        </p>

        <div ref={ctaRef} className="hero-ctas">
          <button className="cta-button cta-primary">
            Comece Agora
            <ArrowRight size={20} />
          </button>
          <button className="cta-button cta-secondary">
            Ver Demo
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Empresas</span>
          </div>
          <div className="stat">
            <span className="stat-number">2M+</span>
            <span className="stat-label">Atendimentos/mês</span>
          </div>
          <div className="stat">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-indicator" />
        <span>Scroll para descobrir</span>
      </div>
    </section>
  )
}
