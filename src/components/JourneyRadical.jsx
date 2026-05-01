import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function JourneyRadical() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journey-item',
        { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
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

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black font-grotesk text-white text-center mb-4">
          A Jornada de <span className="text-green-400">Camillo Franco</span>
        </h2>
        <p className="text-center text-gray-300 text-xl mb-16 max-w-2xl mx-auto">
          De 20 anos de frustração à criação da solução que sempre desejei
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-cyan-500"></div>

          {/* Journey items */}
          <div className="space-y-12">
            {[
              {
                title: 'Os 20 Anos',
                description:
                  'Empreendi em diversos setores. Em cada um, enfrentava o mesmo problema: falta de automação e processos lentos que absorviam meus melhores talentos.',
                year: '2005-2025',
                side: 'left',
              },
              {
                title: 'A Epifania',
                description:
                  'Percebi que a IA era a resposta. Mas não havia soluções rápidas e acessíveis para PMEs. Isso era um gap enorme no mercado.',
                year: '2025',
                side: 'right',
              },
              {
                title: 'A Criação',
                description:
                  'Montei um time experiente. Começamos a desenvolver soluções que fossem rápidas, acessíveis e premium. To,Do nasceu.',
                year: '2025',
                side: 'left',
              },
              {
                title: 'A Missão',
                description:
                  'Transformar PMEs com soluções de IA. Ajudá-las a focar no que realmente importa: crescimento e inovação.',
                year: 'Agora',
                side: 'right',
              },
            ].map((item, idx) => (
              <div key={idx} className={`journey-item flex ${item.side === 'right' ? 'flex-row-reverse' : ''} gap-8`}>
                {/* Content */}
                <div className="w-1/2">
                  <div
                    className={`p-6 rounded-xl border ${
                      item.side === 'left'
                        ? 'border-green-500/30 bg-green-500/5'
                        : 'border-cyan-500/30 bg-cyan-500/5'
                    } backdrop-blur-sm hover:border-opacity-100 transition-all`}
                  >
                    <div className="text-sm font-bold text-green-400 mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-fit flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-400 border-4 border-black shadow-lg shadow-green-500/50"></div>
                </div>

                {/* Empty space */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Rápido', description: 'Semanas, não meses' },
            { title: 'Acessível', description: 'Preço justo para PMEs' },
            { title: 'Premium', description: 'Qualidade enterprise' },
          ].map((value, idx) => (
            <div key={idx} className="text-center p-8 rounded-xl border border-purple-500/30 bg-purple-500/5 hover:border-purple-400 transition-all">
              <h4 className="text-2xl font-bold text-purple-400 mb-2">{value.title}</h4>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
