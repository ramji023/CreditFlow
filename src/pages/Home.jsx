import React from 'react'
import HeroSection from '../components/landing page/HeroSection'
import Features01 from '../components/landing page/Features01'
import Features02 from '../components/landing page/Features02'
import Features03 from '../components/landing page/Features03'
import Features04 from '../components/landing page/Features04'
import TestimonialsSection from '../components/landing page/TestimonialsSection'
const Home = () => {
  return (
    <>
      <HeroSection />
      <Features01 />
      <Features02 />
      <Features03 />
      <Features04 />
      <TestimonialsSection />
    </>
  )
}

export default Home