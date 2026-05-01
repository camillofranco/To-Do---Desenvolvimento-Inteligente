import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Brain, Lock, Gauge } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Brain,
    title: 'IA Inteligente',
    description: 'Machine learning que evolui com cada interação',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    icon: Gauge,
    title: 'Real-time Analytics',
    description: 'Dashboard com dados instantâneos e precisos',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Ultra Rápido',
    description: 'Latência sub-milissegundos garantida',
    gradient: 'from-cyan-500 to-green-500',
  },
  {
    icon: Lock,
    title: 'Segurança Premium',
    description: 'Criptografia militar + LGPD compliant',
    gradient: 'from-green-500 to-yellow-500',
  },
]

export default function FeaturesAdvanced() {
  const containerRef = useRef(null)

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.feature-card')
    if (!cards) return

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotationX: 20 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          delay: i * 0.15,
          ease: 'back.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Hover 3D tilt effect
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          rotationX: -10,
          rotationY: 10,
          y: -20,
          boxShadow: '0 40px 80px rgba(212, 175, 55, 0.4)',
          duration: 0.4,
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          y: 0,
          boxShadow: '0 20px 40px rgba(127, 90, 240, 0.2)',
          duration: 0.4,
        })
      })
    })
  }, [])

  return (
    <section ref={containerRef} className="features-advanced">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Tecnologia Premium</span> de Próxima Geração
        </h2>

        <div className="features-grid">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="feature-card" style={{ perspective: '1000px' }}>
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
