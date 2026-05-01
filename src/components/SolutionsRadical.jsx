import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, Database, Zap, MessageSquare } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function SolutionsRadical() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards 3D hover animation
      gsap.utils.toArray('.solution-card').forEach((card) => {
        gsap.set(card, { transformOrigin: '50% 50%', force3D: true })

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            rotationX: -15,
            rotationY: 15,
            z: 100,
            boxShadow: '0 50px 100px rgba(0, 255, 136, 0.3)',
            duration: 0.6,
            ease: 'power2.out',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            z: 0,
            boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
            duration: 0.6,
            ease: 'power2.out',
          })
        })
      })

      // Scroll trigger animations
      gsap.fromTo(
        '.solution-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const solutions = [
    {
      icon: Globe,
      title: 'Websites & Plataformas',
      description:
        'Plataformas web premium com IA integrada. Rápidas, escaláveis e focadas em conversão.',
      color: 'from-green-500 to-cyan-500',
      accent: 'green',
    },
    {
      icon: Database,
      title: 'CRM com IA',
      description:
        'Gerencie clientes com inteligência. Automação de vendas, insights automáticos.',
      color: 'from-cyan-500 to-blue-500',
      accent: 'cyan',
    },
    {
      icon: Database,
      title: 'ERP com IA',
      description:
        'Integre toda sua operação. Gestão inteligente de estoque, financeiro, RH.',
      color: 'from-purple-500 to-pink-500',
      accent: 'purple',
    },
    {
      icon: MessageSquare,
      title: 'Agentes IA',
      description:
        'Atendimento 24/7 com IA. Chatbots que conversam naturalmente e resolvem problemas.',
      color: 'from-orange-500 to-red-500',
      accent: 'orange',
    },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black font-grotesk text-white mb-4">
            O Poder das <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            4 serviços premium que transformam sua empresa com IA
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon
            return (
              <div
                key={idx}
                className={`solution-card p-8 rounded-2xl border border-${solution.accent}-500/30 bg-gradient-to-br from-${solution.accent}-500/5 to-transparent backdrop-blur-sm hover:border-${solution.accent}-400 transition-all duration-300 cursor-pointer group`}
              >
                {/* Icon with gradient */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} p-3 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{solution.description}</p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-green-400 font-semibold group-hover:gap-4 transition-all">
                  <span>Saiba mais</span>
                  <span className="text-2xl">→</span>
                </div>

                {/* Decorative element */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
              </div>
            )
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5">
            <div className="text-3xl font-black text-green-400 mb-2">4x</div>
            <p className="text-gray-300">Mais rápido que concorrentes</p>
          </div>
          <div className="p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
            <div className="text-3xl font-black text-cyan-400 mb-2">50%</div>
            <p className="text-gray-300">Redução de custos operacional</p>
          </div>
          <div className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5">
            <div className="text-3xl font-black text-purple-400 mb-2">100%</div>
            <p className="text-gray-300">Customizado para você</p>
          </div>
        </div>
      </div>
    </section>
  )
}
