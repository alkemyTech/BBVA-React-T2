import React, { useState } from 'react'
import './ContactForm.css'
import { Alert, AlertTitle, TextField } from '@mui/material'

const ContactForm = () => {
  const [formData, setFormData] = useState({name: '' , email: '' , phone: '',message: ''});
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Object.keys(formData))
    Object.keys(formData).forEach( key => validateInputs(key))
 
    //reset form
    setFormData({name: '' , email: '' , phone: '',message: ''})
  }

  const handleChange = (e) => {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }) );
  };

  const validateInputs = (key) => {
    if(!formData[key]){
      setErrors((prevState)=>({...prevState, [key]: `Campo ${key} requerido incompleto.`}))
    }
  }

  const inputProps = { style: {fontSize: 20} }
  const inputHelperProps = { style: {fontSize: 15} }

  return (
    <form className='contact__form' onSubmit={handleSubmit}>
      { errors.length ?
        <Alert variant="standard" severity="error" sx={{ fontSize:15 }}>
          This is an error alert — check it out!
        </Alert> : null
      }

      
      <TextField
        helperText="Introduce tu nombre completo"
        FormHelperTextProps={inputHelperProps}
        InputLabelProps={inputProps}
        InputProps={inputProps}
        label='Nombre y Apellido'
        name='name'
        variant='outlined'
        value={formData.name}
        onChange={handleChange}
      />

      <TextField
        helperText="Introduce tu correo electronico"
        FormHelperTextProps={inputHelperProps}
        InputLabelProps={inputProps}
        InputProps={inputProps}
        label='Email'
        name='email'
        variant='outlined'
        value={formData.email}
        onChange={handleChange}
      />

      <TextField
        InputLabelProps={inputProps}
        InputProps={inputProps}
        label='Telefono'
        name='phone'
        variant='outlined'
        value={formData.phone}
        onChange={handleChange}
      />

      <TextField
        InputLabelProps={inputProps}
        InputProps={inputProps}
        multiline
        label='Escribe tu consulta'
        name='message'
        variant='outlined'
        rows={4}
        value={formData.message}
        onChange={handleChange}
      />

      <button type='submit' className='secondary-button contact__send-button'>
        Enviar consulta
      </button>

    </form>
  )
}

export default ContactForm