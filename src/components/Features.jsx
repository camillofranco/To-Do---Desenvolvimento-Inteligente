import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Brain, Clock, Shield } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Brain,
    title: 'IA Inteligente',
    description: 'Aprende com cada interação para melhorar continuamente',
  },
  {
    icon: Clock,
    title: '24/7 Disponível',
    description: 'Atendimento sem pausa, sem descanso, sem limites',
  },
  {
    icon: Zap,
    title: 'Respostas Instantâneas',
    description: 'Latência mínima, máxima precisão em cada resposta',
  },
  {
    icon: Shield,
    title: 'Segurança Premium',
    description: 'Criptografia end-to-end, LGPD compliant, 99.9% uptime',
  },
]

export default function Features() {
  const containerRef = useRef(null)

  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card')
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={containerRef} className="features">
      <div className="container">
        <h2 className="section-title">Por que nos escolher?</h2>
        
        <div className="features-grid">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="feature-card">
                <div className="feature-icon">
                  <Icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
