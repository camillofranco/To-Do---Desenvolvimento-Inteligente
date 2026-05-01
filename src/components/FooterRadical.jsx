import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, MessageCircle, Linkedin, Github, Instagram, ArrowUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FooterRadical() {
  const containerRef = useRef(null)
  const backToTopRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer content on scroll
      gsap.fromTo(
        '.footer-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Back to top button visibility
      if (backToTopRef.current) {
        gsap.to(backToTopRef.current, {
          opacity: 0,
          scale: 0,
          duration: 0,
        })

        window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
            gsap.to(backToTopRef.current, { opacity: 1, scale: 1, duration: 0.3 })
          } else {
            gsap.to(backToTopRef.current, { opacity: 0, scale: 0, duration: 0.3 })
          }
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleBackToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: true },
      duration: 1,
      ease: 'power2.inOut',
    })
  }

  return (
    <>
      <footer ref={containerRef} className="relative bg-black border-t border-gray-800/50 py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Main footer content */}
          <div className="footer-content">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-black text-white mb-4">
                  To,<span className="text-green-400">Do</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Transformando PMEs com soluções de IA. Rápido, acessível e premium.
                </p>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Serviços</h4>
                <ul className="space-y-3">
                  {['Websites & Plataformas', 'CRM com IA', 'ERP com IA', 'Agentes IA'].map((service, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Empresa</h4>
                <ul className="space-y-3">
                  {['Sobre nós', 'Nosso processo', 'Contato', 'FAQ'].map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contato</h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/5511920787813"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    <MessageCircle size={16} />
                    (11) 92078-7813
                  </a>
                  <a
                    href="mailto:todofacilitiesoficial@gmail.com"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <Mail size={16} />
                    todofacilitiesoficial@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800/50 py-8">
              {/* Social links */}
              <div className="flex justify-center gap-6 mb-8">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Github, href: '#', label: 'GitHub' },
                ].map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-lg border border-gray-700 hover:border-green-400 bg-gray-900/50 hover:bg-green-500/10 flex items-center justify-center text-gray-400 hover:text-green-400 transition-all duration-300 group"
                      title={social.label}
                    >
                      <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    </a>
                  )
                })}
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  © 2025 To,Do. Todos os direitos reservados. Desenvolvido com IA e criatividade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        ref={backToTopRef}
        onClick={handleBackToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 z-50 opacity-0 scale-0"
        title="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </>
  )
}
