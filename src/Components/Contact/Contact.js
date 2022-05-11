import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import ContactForm from './ContactForm'

const Contact = (props) => {
  return (
    <>
      <h2>¿Queres contribuir con { props.name }?</h2>
      <button type='button' className='contact__contribute-btn' >
        <Link to='/' className='contact__link'>
          Contribuir
        </Link>
      </button>

      <h2>¡Contactate con nosotros!</h2>

      <div>
        <h4>Nuestros datos de contacto son:</h4>
        <ul>
          <li>Direccion: { props.address } </li>
          <li>Instagram: { props.instagram_url } </li>
          <li>Facebook: { props.facebook_url } </li>
          <li>Linkedin: { props.linkedin_url } </li>
          <li>Twitter: { props.twitter_url } </li>
          <li>Teléfono de contacto: { props.phone} </li>
        </ul>
      </div>

      <h2>Puedes dejarnos tu consulta:</h2>

      <ContactForm/>

    </>
  )
}

export default Contact