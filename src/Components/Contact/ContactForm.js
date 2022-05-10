import React from 'react'

const ContactForm = () => {

  return (
    <form>
      <label>
        Nombre y Apellido:
        <input type='text' name='fullName' placeholder='Nombre y Apellido'/>   
      </label>

      <label>
        Emai:
        <input type='email' name='email' placeholder='Email'/>   
      </label>

      <label>
        Escribe tu consulta
        <textarea/>
      </label>

      <button type='submit'>
        Enviar consulta
      </button>

    </form>
  )
}

export default ContactForm