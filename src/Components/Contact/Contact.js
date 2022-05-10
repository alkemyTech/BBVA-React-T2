import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
      <h3>¿Queres contribuir?</h3>
      <button type='button'>
        <Link to='/'>
          Contribuir
        </Link>
      </button>

      <h1>¡Contactate con nosotros!</h1>
      <ContactForm/>

      <button type='button'>
        <Link to='/'>
          Ir al inicio  
        </Link>
      </button>
    </>
  )
}

export default Contact