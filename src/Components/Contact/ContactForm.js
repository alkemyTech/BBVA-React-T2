import React from 'react'
import './ContactForm.css'

const ContactForm = () => {

  return (
    <form className='contact-form'>
      <label>
        Nombre y Apellido:
        <input type='text' name='fullName' placeholder='Nombre y Apellido' className='contact__input-field'/>   
      </label>

      <label>
        Emai:
        <input type='email' name='email' placeholder='Email' className='contact__input-field'/>   
      </label>

      <textarea className='contact__input-field' placeholder='Escribe tu consulta'/>

      <button type='submit' className='contact__submit-btn'>
        Enviar consulta
      </button>

    </form>
  )
}

export default ContactForm