import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <main className="app">
      <Hero />
      <Features />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
