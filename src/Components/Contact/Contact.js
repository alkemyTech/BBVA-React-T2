import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import ContactForm from './ContactForm'

const Contact = (props) => {
  return (
    <>
      <h3>¿Queres contribuir con { props.name }?</h3>
      <button type='button'>
        <Link to='/'>
          Contribuir
        </Link>
      </button>

      <h1>¡Contactate con nosotros!</h1>

      <div>
        <h4>Nuestros datos de contacto:</h4>
        <ul>
          <li>Direccion: { props.address } </li>
          <li>Instagram: { props.instagram_url } </li>
          <li>Facebook: { props.facebook_url } </li>
          <li>Linkedin: { props.linkedin_url } </li>
          <li>Twitter: { props.twitter_url } </li>
          <li>Teléfono de contacto: { props.phone} </li>
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