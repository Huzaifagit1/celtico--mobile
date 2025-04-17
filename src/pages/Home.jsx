import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PlansSection from '../components/PlansSection'
import FeaturesSection from '../components/FeatureSection'
import BenefitsSection from '../components/BenefitsSection'
import HowItWorksSection from '../components/HowItWorksSection'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer.jsx'
import InfoSection from '../components/SportsMobileFeatures.jsx'

function Home() {
  return (
      <div>
        <Navbar />
        <HeroSection />
        <PlansSection />
        <FeaturesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <InfoSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
  )
}

export default Home