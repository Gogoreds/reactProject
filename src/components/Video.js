import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'
import marsVideo from '../assets/Mars.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={marsVideo} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>Marsha</h1>
        <p>Mankind's First Habitat on Mars</p>

    <div>
        <Link to='/projects' className='btn'>Projects</Link>
        <Link to='/contact' className='btn btn-light'>Contact</Link>
    </div>
    </div>
    </div>
  )
}

export default Video