import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      }
    )

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      }
    )
  }, [])

  return (
    <section ref={containerRef} className="cta">
      <div className="container">
        <h2 ref={titleRef} className="section-title">Pronto para transformar seu atendimento?</h2>
        
        <form ref={formRef} className="cta-form">
          <div className="form-group">
            <Mail size={20} />
            <input type="email" placeholder="seu@email.com" required />
          </div>
          <button type="submit" className="cta-button cta-primary">
            Agendar Demo
          </button>
        </form>

        <p className="cta-subtext">Sem compromisso. Respon​deremos em 2 horas.</p>
      </div>
    </section>
  )
}
