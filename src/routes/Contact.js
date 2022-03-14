import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Contact Us' text='WE WILL GET BACK TO YOU AS SOON AS POSSIBLE'/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact