import React, { useState } from 'react'
import './ContactForm.css'
import { TextField } from '@mui/material'

const ContactForm = () => {
  const [formData, setFormData] = useState({name: '' , email: '' , phone: '',message: ''});

  const handleSubmit = (e) => {
    e.preventDefault()

    //reset form
    setFormData({name: '' , email: '' , phone: '',message: ''})
  }

  const handleChange = (e) => {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }) );
  };


  return (
    <form className='contact-form' onSubmit={handleSubmit}>
     
      <TextField
        helperText="Introduce tu nombre completo"
        label='Nombre'
        name='name'
        variant='outlined'
        value={formData.name}
        onChange={handleChange}
      />
      <br/>

      <TextField
        helperText="Introduce tu correo electronico"
        label='Email'
        name='email'
        variant='outlined'
        value={formData.email}
        onChange={handleChange}
      />
      <br/>
      
      <TextField
        label='Telefono'
        name='phone'
        variant='outlined'
        value={formData.phone}
        onChange={handleChange}
      />
      <br/>

      <TextField
        multiline
        label='Escribe tu consulta'
        placeholder='Escribe tu consulta'
        name='message'
        variant='outlined'
        rows={4}
        value={formData.message}
        onChange={handleChange}
      />
      <br/>

      <button type='submit' className='secondary-button'>
        Enviar consulta
      </button>

    </form>
  )
}

export default ContactForm