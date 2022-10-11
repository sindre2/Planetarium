import React from 'react'
import "./formstyle.css"
function Form() {
  return (
    <form className='form'>
         <label htmlFor='name'>Name</label>
         <input className='marginspace' id='name' placeholder='Please enter your name'/>
         <label htmlFor='email'>Email</label>
         <input className='marginspace' id='email' placeholder='Please enter your email'/>
         <label htmlFor='phone'>Phone Nr</label>
         <input className='marginspace' id='phone' placeholder='Please enter your phone'/>
         <button type='submit'>Send Message</button>
    </form>
  )
}

export {Form} 