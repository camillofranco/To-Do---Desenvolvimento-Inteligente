import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import WebGLSceneAdvanced from './WebGLSceneAdvanced'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroAdvanced() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Split text animation
    const titleText = titleRef.current
    if (!titleText) return

    const letters = titleText.querySelectorAll('.letter')
    gsap.fromTo(
      letters,
      { opacity: 0, y: 20, rotationZ: -10 },
      {
        opacity: 1,
        y: 0,
        rotationZ: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'back.out',
      }
    )

    // Subtitle fade in
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    )

    // CTA button animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: 'elastic.out' }
    )
  }, [])

  return (
    <section className="hero-advanced">
      <div className="hero-background">
        <WebGLSceneAdvanced />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          {'IA que entende seu negócio'.split('').map((char, i) => (
            <span key={i} className={`letter ${char === ' ' ? 'space' : ''}`}>
              {char}
            </span>
          ))}
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          Automação inteligente de atendimento. 24/7, sem limites, com luxo.
        </p>

        <div ref={ctaRef} className="hero-cta">
          <button className="btn btn-primary">
            Comece Agora
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Empresas Premium</span>
          </div>
          <div className="stat">
            <span className="stat-number">2M+</span>
            <span className="stat-label">Atendimentos/mês</span>
          </div>
          <div className="stat">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Uptime Garantido</span>
          </div>
        </div>
      </div>
    </section>
  )
}
