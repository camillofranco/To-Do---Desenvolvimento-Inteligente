import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'Starter',
    price: '299',
    description: 'Perfeito para começar',
    features: [
      'Até 1.000 atendimentos/mês',
      'Chat + Email',
      'Analytics básico',
      'Suporte por email',
      'Integração 1 canal',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '999',
    description: 'Para crescimento rápido',
    features: [
      'Até 50.000 atendimentos/mês',
      'Chat + Email + WhatsApp',
      'Analytics avançado',
      'Suporte prioritário 24/7',
      'Integrações ilimitadas',
      'API customizada',
      'Team collaboration',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Para operações em escala',
    features: [
      'Atendimentos ilimitados',
      'Todos os canais + custom',
      'Analytics + BI integration',
      'Suporte dedicado 24/7',
      'SLA 99.99% uptime',
      'Deployment on-premise',
      'Team ilimitado',
      'Consultoria incluída',
    ],
    highlight: false,
  },
]

export default function PricingAdvanced() {
  const ref = useRef(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.pricing-card')
    if (!cards) return

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'back.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={ref} className="pricing-advanced">
      <div className="container">
        <h2 className="section-title">
          Preços <span className="gradient-text">Transparentes</span> e Justos
        </h2>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
              {plan.highlight && <div className="badge-highlight">MAIS POPULAR</div>}
              
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="period">/mês</span>}
              </div>

              <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                Começar Agora
              </button>

              <ul className="features-list">
                {plan.features.map((feature, fi) => (
                  <li key={fi}>
                    <Check size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
