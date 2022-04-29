import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectsStyles.css'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='card-container'>
            <div className='card'>
                <h3>Mars Habitat</h3>
                <span className='loc'>Marsha</span>
                <p>Marsha's functional areas are spread over four levels identified by a unique interior atmosphere that encourages mobility and averts monotony. Via the large skylight above and intermittent windows, the space between the two shells acts as light-well connecting all levels with diffuse natural light. This unique space allows for a stair to arc gently from floor to floor, adding dimension to daily life.</p>
                <p>- 2030 -</p>
                <Link to='/contact' className='btn'>Learn More</Link>
            </div>
            <div className='card'>
                <h3>Earth Habitat</h3>
                <span className='loc'>Tera</span>
                <p>Tera's functional areas are spread over four levels identified by a unique interior atmosphere that encourages mobility and averts monotony. Via the large skylight above and intermittent windows, the space between the two shells acts as light-well connecting all levels with diffuse natural light. This unique space allows for a stair to arc gently from floor to floor, adding dimension to daily life.</p>
                <p>- Today -</p>
                <Link to='/contact' className='btn'>Learn More</Link>
            </div>
                <div className='card'>
                <h3>Moon Habitat</h3>
                <span className='loc'>Luna</span>
                <p>Luna's functional areas are spread over four levels identified by a unique interior atmosphere that encourages mobility and averts monotony. Via the large skylight above and intermittent windows, the space between the two shells acts as light-well connecting all levels with diffuse natural light. This unique space allows for a stair to arc gently from floor to floor, adding dimension to daily life.</p>
                <p>- 2032 -</p>
                <Link to='/contact' className='btn'>Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default Projects