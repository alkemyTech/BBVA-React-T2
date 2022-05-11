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

      <div>
        <h4>Nuestros datos de contacto:</h4>
        <ul>
          <li>Email: somosfundacionmas@gmail.com</li>
          <li>Instagram: SomosMás</li>
          <li>Facebook: Somos_Más</li>
          <li>Teléfono de contacto: 1160112988</li>
        </ul>
      </div>

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