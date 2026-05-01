import React, { useState } from 'react'
import { gsap } from 'gsap'

export default function FormRadical() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const questions = [
    {
      q: 'Qual é seu maior desafio?',
      options: ['Automação de processos', 'Gestão de clientes', 'Análise de dados', 'Outro'],
    },
    {
      q: 'Qual é seu setor?',
      options: ['E-commerce', 'Serviços', 'Manufatura', 'Outro'],
    },
    {
      q: 'Qual é seu timeline?',
      options: ['ASAP (semanas)', 'Próximos 2 meses', '3-6 meses', 'Flexível'],
    },
    {
      q: 'Qual é seu orçamento?',
      options: ['Até R$10k', 'R$10-50k', 'R$50-100k', 'Sem limite'],
    },
    {
      q: 'Melhor forma de contato?',
      options: ['WhatsApp', 'Email', 'Ligação', 'Agendar call'],
    },
  ]

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [step]: answer }
    setAnswers(newAnswers)

    if (step < questions.length - 1) {
      gsap.to('.form-container', { opacity: 0.5, duration: 0.3 })
      setTimeout(() => {
        setStep(step + 1)
        gsap.to('.form-container', { opacity: 1, duration: 0.3 })
      }, 150)
    }
  }

  const isComplete = Object.keys(answers).length === questions.length

  return (
    <section className="relative min-h-screen bg-black py-20 flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 w-full">
        <div className="form-container transition-opacity duration-300">
          <h2 className="text-5xl md:text-6xl font-black font-grotesk text-white text-center mb-2">
            Perguntas <span className="text-purple-400">Estratégicas</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            {Object.keys(answers).length} de {questions.length} respostas
          </p>

          {!isComplete ? (
            <div className="p-8 md:p-12 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm">
              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question */}
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                {questions[step].q}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 gap-4">
                {questions[step].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/20 hover:border-purple-400 text-white font-semibold transition-all duration-300 text-left hover:translate-x-2"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Current answers preview */}
              {step > 0 && (
                <div className="mt-8 p-4 rounded-lg bg-gray-900/50 border border-gray-700">
                  <p className="text-sm text-gray-400 mb-2">Sua última resposta:</p>
                  <p className="text-purple-400 font-semibold">{answers[step - 1]}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-12 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-cyan-500/5 backdrop-blur-sm text-center">
              <div className="mb-6">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold text-white mb-4">Perfeito!</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Agora vamos entrar em contato para discutir sua solução
                </p>
              </div>

              {/* Summary */}
              <div className="bg-black/50 p-6 rounded-lg mb-8 text-left">
                {questions.map((q, idx) => (
                  <div key={idx} className="py-2 border-b border-gray-700 last:border-0">
                    <p className="text-sm text-gray-400">{q.q}</p>
                    <p className="text-green-400 font-semibold">{answers[idx]}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/5511920787813"
                  className="p-4 rounded-lg bg-green-500 text-black font-bold hover:bg-green-400 transition-all"
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="mailto:todofacilitiesoficial@gmail.com"
                  className="p-4 rounded-lg border-2 border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-500/10 transition-all"
                >
                  📧 Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
