import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Treatments from './Treatments'
import Portfolio from './Portfolio'
import WhyChooseUs from './WhyChooseUs'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Treatments />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
