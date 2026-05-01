import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroRadical() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const problemsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline principal - entrada
      const tl = gsap.timeline()

      // Título - split letter animation
      const letters = titleRef.current?.querySelectorAll('.letter')
      if (letters) {
        tl.fromTo(
          letters,
          { opacity: 0, y: 30, rotationZ: -15 },
          {
            opacity: 1,
            y: 0,
            rotationZ: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'back.out',
          },
          0
        )
      }

      // Problemas - reveal com delay
      gsap.fromTo(
        '.problem-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.3,
        }
      )

      // CTA buttons
      gsap.fromTo(
        '.cta-button',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.6,
        }
      )

      // Stats - count animation
      const stats = containerRef.current?.querySelectorAll('.stat-number')
      if (stats) {
        stats.forEach((stat) => {
          const finalValue = parseInt(stat.dataset.value || '0')
          gsap.fromTo(
            { value: 0 },
            { value: finalValue, duration: 2, delay: 1, ease: 'power2.out' },
            {
              onUpdate: function () {
                stat.textContent = Math.floor(this.targets()[0].value).toLocaleString()
              },
            }
          )
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const problems = [
    'Falta de automação IA',
    'Processos lentos e manuais',
    'Custo operacional alto',
    'Equipe focada em tarefas repetitivas',
  ]

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Title - "A Epifania" */}
        <div className="mb-12">
          <h1
            ref={titleRef}
            className="text-7xl md:text-8xl font-black font-grotesk tracking-tighter leading-none mb-6"
          >
            {'20 Anos de'.split('').map((char, i) => (
              <span key={i} className="letter inline-block">
                {char === ' ' ? ' ' : char}
              </span>
            ))}
            <br />
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              {'Frustração'.split('').map((char, i) => (
                <span key={i + 'f'} className="letter inline-block">
                  {char === ' ' ? ' ' : char}
                </span>
              ))}
            </span>
            <br />
            {'→ 1 Solução'.split('').map((char, i) => (
              <span key={i + 's'} className="letter inline-block">
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Depois de 20 anos enfrentando os mesmos problemas em minhas empresas, criei a To,Do.
            <br />
            <span className="text-green-400 font-semibold">Soluções rápidas. Acessíveis. Premium.</span>
          </p>
        </div>

        {/* Problems Grid */}
        <div
          ref={problemsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12 max-w-2xl mx-auto"
        >
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="problem-item p-4 rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/5 to-cyan-500/5 hover:border-green-400/60 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 group-hover:scale-150 transition-transform"></div>
                <p className="text-sm md:text-base text-gray-200 font-medium">{problem}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-12">
          <button className="cta-button px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-2 group">
            Descubra as Soluções
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </button>
          <button className="cta-button px-8 py-4 rounded-lg border-2 border-cyan-400/50 text-cyan-300 font-bold text-lg hover:bg-cyan-500/10 hover:border-cyan-300 transition-all duration-300 flex items-center gap-2 group">
            Agendar Conversa
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto text-center">
          <div>
            <div className="stat-number text-4xl md:text-5xl font-black text-green-400" data-value="500">
              0
            </div>
            <p className="text-xs md:text-sm text-gray-400 mt-2">Empresas Transformadas</p>
          </div>
          <div>
            <div className="stat-number text-4xl md:text-5xl font-black text-cyan-400" data-value="20">
              0
            </div>
            <p className="text-xs md:text-sm text-gray-400 mt-2">Anos de Experiência</p>
          </div>
          <div>
            <div className="stat-number text-4xl md:text-5xl font-black text-purple-400" data-value="99">
              0
            </div>
            <p className="text-xs md:text-sm text-gray-400 mt-2">% Satisfação</p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-gray-400 text-sm mb-2">Scroll para descobrir</div>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
