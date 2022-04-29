import React from 'react'
import Navbar from '../components/Navbar'
import ProjectsElements from '../components/Projects'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'


const Projects = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='Our Projects' text='LEARN MORE ABOUT US'/>
        <ProjectsElements />
        <Footer />
    </div>
  )
}


export default Projects