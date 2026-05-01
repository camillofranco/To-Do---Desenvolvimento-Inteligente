import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { number: '01', title: 'Análise', description: 'Entendemos seus processos' },
  { number: '02', title: 'Customização', description: 'Adaptamos a IA ao seu negócio' },
  { number: '03', title: 'Integração', description: 'Implementação sem fricção' },
  { number: '04', title: 'Otimização', description: 'Monitoramento e melhoria contínua' },
]

export default function Process() {
  const containerRef = useRef(null)

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1,
      },
    })

    const cards = containerRef.current.querySelectorAll('.process-card')
    cards.forEach((card, i) => {
      timeline.fromTo(
        card,
        { opacity: 0.3, x: 100 },
        { opacity: 1, x: 0, duration: 1 },
        i * 0.3
      )
    })
  }, [])

  return (
    <section ref={containerRef} className="process">
      <div className="container">
        <h2 className="section-title">Como funciona</h2>
        
        <div className="process-grid">
          {steps.map((step, i) => (
            <div key={i} className="process-card">
              <div className="process-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {i < steps.length - 1 && <div className="process-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
