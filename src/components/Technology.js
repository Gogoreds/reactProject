import React from 'react'
import './TechnologyStyles.css'
import { Link } from 'react-router-dom'
import Zep from '../assets/Zep.jpg'

const Technology = () => {
  return (
    <div className='technology'>
        <div className='left'>
            <h1>FULL-STACK 3D PRINTING</h1>
            <p>Space Architects' most innovative technology is its complete automation of 3D printing construction. Innovations in robotics,  control algorithms, materials, and design, result in a state-of-the-art, full-service 3D printing construction service that results in less expensive, more sustainable, and safer buildings.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>    
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Zep} className='img' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technology