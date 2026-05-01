import React, { useEffect, useRef } from 'react'
import HeroAdvanced from './components/HeroAdvanced'
import FeaturesAdvanced from './components/FeaturesAdvanced'
import AboutAdvanced from './components/AboutAdvanced'
import PricingAdvanced from './components/PricingAdvanced'
import BlogAdvanced from './components/BlogAdvanced'
import FAQAdvanced from './components/FAQAdvanced'
import CTAAdvanced from './components/CTAAdvanced'
import FooterAdvanced from './components/FooterAdvanced'
import './styles-premium.css'
import './hero-premium.css'

export default function AppAdvanced() {
  const cursorRef = useRef(null)

  useEffect(() => {
    // Custom cursor premium
    const cursor = document.createElement('div')
    cursor.className = 'cursor'
    cursor.style.position = 'fixed'
    cursor.style.width = '24px'
    cursor.style.height = '24px'
    cursor.style.border = '2px solid #D4AF37'
    cursor.style.borderRadius = '50%'
    cursor.style.pointerEvents = 'none'
    cursor.style.zIndex = '9999'
    cursor.style.mixBlendMode = 'screen'
    cursor.style.transition = 'width 0.3s, height 0.3s'
    cursor.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.5)'
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
      cursor.style.boxShadow = '0 0 40px rgba(212, 175, 55, 0.8)'
    }

    const handleMouseOut = () => {
      cursor.style.width = '24px'
      cursor.style.height = '24px'
      cursor.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.5)'
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseOut)
      document.body.removeChild(cursor)
    }
  }, [])

  return (
    <main className="app-advanced">
      <HeroAdvanced />
      <FeaturesAdvanced />
      <AboutAdvanced />
      <PricingAdvanced />
      <BlogAdvanced />
      <FAQAdvanced />
      <CTAAdvanced />
      <FooterAdvanced />
    </main>
  )
}
