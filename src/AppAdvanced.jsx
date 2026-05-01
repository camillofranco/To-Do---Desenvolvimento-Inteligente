import React from 'react'
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
