import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona a implementação?',
    answer: 'A implementação leva 24-48 horas. Criamos uma customização leve da IA para sua empresa, integramos seus sistemas, treinamos a equipe e colocamos em produção.',
  },
  {
    question: 'Qual é o tempo de retorno (ROI)?',
    answer: 'Clientes típicos veem ROI positivo em 3-6 meses. A redução de custos com atendimento compensa o investimento rapidamente, especialmente em operações de alto volume.',
  },
  {
    question: 'Como é garantida a qualidade?',
    answer: 'Temos 3 camadas: IA treinada em melhores práticas, validação humana em respostas críticas, e feedback loop contínuo que melhora a IA automaticamente.',
  },
  {
    question: 'Seus dados ficam seguros?',
    answer: 'Criptografia AES-256 end-to-end, servidores em múltiplas regiões, backups automáticos, LGPD compliant, e audits de segurança mensais.',
  },
  {
    question: 'Posso usar em múltiplos canais?',
    answer: 'Sim! Suportamos Chat, Email, WhatsApp, Instagram, e qualquer canal customizado. Uma única IA gerencia todos simultaneamente.',
  },
  {
    question: 'E se a IA não entender algo?',
    answer: 'Escala automática para humanos. Quando a IA detecta que não consegue resolver, passa para seu time imediatamente, sem perder contexto.',
  },
]

export default function FAQAdvanced() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const faqItems = ref.current?.querySelectorAll('.faq-item')
    if (!faqItems) return

    faqItems.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={ref} className="faq-advanced">
      <div className="container">
        <h2 className="section-title">
          Dúvidas <span className="gradient-text">Frequentes</span>
        </h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <ChevronDown
                  size={24}
                  style={{
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                />
              </div>
              {openIndex === i && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
