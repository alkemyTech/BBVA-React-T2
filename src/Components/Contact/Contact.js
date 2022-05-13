import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import ContactForm from './ContactForm'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TextField } from '@mui/material';

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
    <div className='container'>
      <h2 className='title'>¿Queres contribuir?</h2>

      <button type='button' className='primary-button'>
        <Link to='/' className='contact__link'>
          Contribuir
        </Link>
      </button>

      <h2 className='title'>¡Contactate con nosotros!</h2>

      <div className='contact__data-section'>
          <p>Direccion: { address || 'direccion' } </p>
          <p>Teléfono de contacto: { phone || 'telefono' } </p>

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

      <h2 className='title' >Puedes dejarnos tu consulta:</h2>
     
      <ContactForm/>

    </div>
  )
}

export default Contact