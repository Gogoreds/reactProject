import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import OurTechnology from '../components/Technology'
import Footer from '../components/Footer'

const Technology = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Our Technology' text='THE FUTURE OF MULTIPLANETARY CONSTRUCTION' />
        <OurTechnology />
        <Footer />
    </div>
  )
}

export default Technology