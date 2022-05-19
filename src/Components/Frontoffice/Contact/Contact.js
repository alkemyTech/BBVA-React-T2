import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import ContactForm from './ContactForm'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Map from './Map';

const Contact = (props) => {
  const { 
    address, 
    instagram_url, 
    facebook_url, 
    linkedin_url, 
    twitter_url, 
    phone } = props

    const iconProp = { fontSize: 40, margin:1 }

  return (
    <div className='contact-container'>
      <Map />

      <div className='contribuir-section'>
        <h1 className='contact-title'>¿Queres contribuir?</h1>

        <Link to='/donar' className='contact__link'>
          <button type='button' className='primary-button contact__button'>
              Contribuir
          </button>
        </Link>
      </div>

      <h1 className='contact-title'>¡Contactate con nosotros!</h1>

      <div className='contact__data-section'>
          <p>Direccion: <b>{ address || 'direccion' }</b> </p>
          <p>Teléfono de contacto: <b> { phone || 'telefono' } </b></p>

        <ul className='contact__media-list'>
          <li className='contact__media-list-item'>
            <InstagramIcon sx={iconProp}/> 
            { instagram_url || 'instagram_url'}
          </li>

          <li className='contact__media-list-item'>
            <FacebookIcon sx={iconProp} color="primary"/> 
            { facebook_url || 'facebook_url'}
          </li>

          <li className='contact__media-list-item'>
            <LinkedInIcon sx={iconProp} color="primary"/> 
            { linkedin_url || 'linkedin_url'}
          </li>

          <li className='contact__media-list-item'>
            <TwitterIcon sx={iconProp} color="primary"/>
            { twitter_url || 'twitter_url'} 
          </li>
        </ul>
      </div>

      <h2 className='contact-title' >Puedes dejarnos tu consulta:</h2>
     
      <ContactForm/>

    </div>
  )
}

export default Contact