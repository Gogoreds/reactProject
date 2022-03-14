import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Inquiry</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='Tell us more about your inquiry...' />
            <button className='btn'>Submit</button>
        </form>

    </div>
  )
}

export default Form