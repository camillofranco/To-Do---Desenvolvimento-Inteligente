import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, DollarSign, Award, Rocket } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function BenefitsRadical() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.benefit-card',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const benefits = [
    {
      icon: Zap,
      title: 'Rápido',
      description: 'Implementamos em semanas, não meses. Sua solução pronta para usar rapidinho.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: DollarSign,
      title: 'Acessível',
      description: 'Preços justos para PMEs. Sem cobranças escondidas. ROI garantido.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Premium',
      description: 'Qualidade enterprise. Mesmo que você é uma pequena empresa, sua solução é classe A.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Transformador',
      description: 'Suas métricas vão mudar. Eficiência, custos, satisfação do cliente. Tudo melhora.',
      color: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black font-grotesk text-white text-center mb-4">
          Por Quê <span className="text-green-400">To,Do?</span>
        </h2>
        <p className="text-center text-gray-300 text-xl mb-16 max-w-2xl mx-auto">
          4 razões pelas quais nossa agência é diferente
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="benefit-card p-8 rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900 to-black hover:border-gray-600 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-3">{benefit.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed">{benefit.description}</p>

                {/* Accent line */}
                <div className={`h-1 w-12 bg-gradient-to-r ${benefit.color} mt-6 rounded-full group-hover:w-24 transition-all`}></div>
              </div>
            )
          })}
        </div>

        {/* Comparison */}
        <div className="mt-16 p-8 rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900 to-black">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Comparado com outras agências</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-black text-red-400 mb-2">❌</div>
              <p className="text-gray-300 font-semibold">Outros: Demoram 6+ meses</p>
            </div>
            <div>
              <div className="text-4xl font-black text-green-400 mb-2">✅</div>
              <p className="text-white font-semibold">To,Do: 4-8 semanas</p>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">⚡</div>
              <p className="text-gray-300 font-semibold">10x mais rápido e 50% mais barato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
