import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, Mail, Calendar } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ContactRadical() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-option',
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
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black py-20 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-5xl md:text-6xl font-black font-grotesk text-white text-center mb-4">
          Vamos <span className="text-green-400">Conversar?</span>
        </h2>
        <p className="text-center text-gray-300 text-xl mb-16 max-w-2xl mx-auto">
          Escolha a melhor forma para você. Estamos prontos!
        </p>

        {/* Triple CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5511920787813"
            target="_blank"
            rel="noreferrer"
            className="contact-option group p-8 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent hover:border-green-400 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
            <p className="text-gray-300 mb-6">Chat direto conosco. Resposta rápida, conversa descontraída.</p>
            <div className="text-green-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
              <span>(11) 92078-7813</span>
              <span className="text-2xl">→</span>
            </div>
          </a>

          {/* Email + Form */}
          <div className="contact-option group p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent hover:border-cyan-400 transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
            <p className="text-gray-300 mb-6">Prefere mail? Envie sua mensagem e responderemos em 24h.</p>
            <a
              href="mailto:todofacilitiesoficial@gmail.com"
              className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all"
            >
              <span>todofacilitiesoficial@gmail.com</span>
              <span className="text-2xl">→</span>
            </a>
          </div>

          {/* Calendar */}
          <div className="contact-option group p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent hover:border-purple-400 transition-all duration-300">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calendar size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Agendar Call</h3>
            <p className="text-gray-300 mb-6">30 min de estratégia. Sem compromisso. Vamos alinhados.</p>
            <button className="text-purple-400 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
              <span>Agendar agora</span>
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl border border-gray-700/50 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-purple-500/10 text-center">
          <p className="text-gray-300 text-lg mb-4">
            Sua empresa merece estar em um nível premium.
          </p>
          <p className="text-white text-2xl font-bold">
            Vamos começar? <span className="text-green-400">Escolha um canal acima</span> e conversa marca!
          </p>
        </div>
      </div>
    </section>
  )
}
