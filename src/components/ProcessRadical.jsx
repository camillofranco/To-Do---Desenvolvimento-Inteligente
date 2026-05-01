import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageSquare, Lightbulb, Rocket, Trophy } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ProcessRadical() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Connecting arrows animation
      gsap.fromTo(
        '.arrow-connector',
        { strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'none',
          repeat: -1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      icon: MessageSquare,
      number: '1',
      title: 'Conversa Estratégica',
      description: 'Entendemos seus desafios, objetivos e timeline',
      time: '1 Semana',
    },
    {
      icon: Lightbulb,
      number: '2',
      title: 'Ideação + Design',
      description: 'Criamos a solução perfeita para você',
      time: '1-2 Semanas',
    },
    {
      icon: Rocket,
      number: '3',
      title: 'Implementação Rápida',
      description: 'Desenvolvimento acelerado com IA',
      time: '2-4 Semanas',
    },
    {
      icon: Trophy,
      number: '4',
      title: 'Transformação',
      description: 'Seu negócio está mais rápido e eficiente',
      time: 'Ongoing',
    },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black font-grotesk text-white text-center mb-4">
          Como <span className="text-orange-400">Funcionamos</span>
        </h2>
        <p className="text-center text-gray-300 text-xl mb-16 max-w-2xl mx-auto">
          4 passos simples para transformar sua empresa
        </p>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="process-step relative">
                <div className="p-8 rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/5 to-transparent backdrop-blur-sm hover:border-orange-400 transition-all h-full group">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center font-bold text-black text-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{step.description}</p>
                  <div className="text-xs font-semibold text-orange-400">⏱️ {step.time}</div>
                </div>

                {/* Arrow connector (hidden on last item) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 w-12">
                    <svg viewBox="0 0 48 2" className="w-full">
                      <line x1="0" y1="1" x2="48" y2="1" stroke="#f97316" strokeWidth="2" className="arrow-connector" strokeDasharray="100" />
                      <polygon points="48,1 42,0 42,2" fill="#f97316" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Timeline estimate */}
        <div className="mt-16 p-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 text-center">
          <p className="text-gray-300 text-lg">
            <span className="font-bold text-yellow-400">Total: 4-8 Semanas</span> para sua solução estar 100% pronta e em produção
          </p>
        </div>
      </div>
    </section>
  )
}
