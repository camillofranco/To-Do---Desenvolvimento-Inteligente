import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, Linkedin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CTAAdvanced() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%',
        },
      }
    )
  }, [])

  return (
    <section ref={ref} className="cta-advanced">
      <div className="container">
        <h2>Pronto para Transformar seu Atendimento?</h2>
        <p>
          Agende uma demo gratuita de 30 minutos com nossa equipe. Sem compromisso.
        </p>

        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="seu@email.com" required />
          <button type="submit" className="btn btn-primary">
            Agendar Demo
          </button>
        </form>

        <div className="cta-contact">
          <a href="mailto:todofacilitiesoficial@gmail.com" className="contact-link">
            <Mail size={20} />
            todofacilitiesoficial@gmail.com
          </a>
          <a href="tel:+5585999999999" className="contact-link">
            <Phone size={20} />
            +55 85 9 9999-9999
          </a>
          <a href="#" className="contact-link">
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
