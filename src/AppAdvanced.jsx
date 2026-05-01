import React, { useEffect } from 'react'
import HeroRadical from './components/HeroRadical'
import SolutionsRadical from './components/SolutionsRadical'
import JourneyRadical from './components/JourneyRadical'
import ProcessRadical from './components/ProcessRadical'
import FormRadical from './components/FormRadical'
import BenefitsRadical from './components/BenefitsRadical'
import ContactRadical from './components/ContactRadical'
import FooterRadical from './components/FooterRadical'
import './styles-premium.css'
import './hero-premium.css'

export default function AppAdvanced() {
  useEffect(() => {
    // Custom cursor radical - agora com segurança máxima
    const initCursor = () => {
      try {
        if (!document || !document.body) return

        const cursor = document.createElement('div')
        cursor.className = 'cursor'
        cursor.style.position = 'fixed'
        cursor.style.width = '24px'
        cursor.style.height = '24px'
        cursor.style.border = '2px solid #00FF88'
        cursor.style.borderRadius = '50%'
        cursor.style.pointerEvents = 'none'
        cursor.style.zIndex = '9999'
        cursor.style.mixBlendMode = 'screen'
        cursor.style.transition = 'width 0.3s, height 0.3s'
        cursor.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)'
        document.body.appendChild(cursor)

        let mouseX = 0,
          mouseY = 0

        const handleMouseMove = (e) => {
          mouseX = e.clientX
          mouseY = e.clientY
          cursor.style.left = mouseX - 12 + 'px'
          cursor.style.top = mouseY - 12 + 'px'
        }

        const handleMouseOver = () => {
          cursor.style.width = '32px'
          cursor.style.height = '32px'
          cursor.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.8)'
        }

        const handleMouseOut = () => {
          cursor.style.width = '24px'
          cursor.style.height = '24px'
          cursor.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)'
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseenter', handleMouseOver)
        document.addEventListener('mouseleave', handleMouseOut)

        return () => {
          window.removeEventListener('mousemove', handleMouseMove)
          document.removeEventListener('mouseenter', handleMouseOver)
          document.removeEventListener('mouseleave', handleMouseOut)
          try {
            if (document.body && cursor.parentNode === document.body) {
              document.body.removeChild(cursor)
            }
          } catch (e) {
            // Silent fail
          }
        }
      } catch (e) {
        console.error('Cursor initialization error:', e)
        return () => {}
      }
    }

    const cleanup = initCursor()
    return cleanup
  }, [])

  return (
    <main className="app-advanced">
      <HeroRadical />
      <SolutionsRadical />
      <JourneyRadical />
      <ProcessRadical />
      <FormRadical />
      <BenefitsRadical />
      <ContactRadical />
      <FooterRadical />
    </main>
  )
}
