import React, { useState } from 'react'
import './ContactForm.css'
import { Alert, TextField } from '@mui/material';
import { Post } from '../../../Services/publicApiService';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ENDPOINT = process.env.REACT_APP_CONTACTS;

const ContactForm = () => {
  const [formData, setFormData] = useState({name: '' , email: '' , phone: '',message: ''});
  const [errors, setErrors] = useState({});

  const postContact = async () => {
    const url = BASE_URL + ENDPOINT;
    // const body = formData;
    // const res = await Post(url, body);
    // return res;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Object.keys(formData).forEach( key => validateInputs(key));
    
    if(Object.keys(errors).length === 0){
      //si no hay errores => validado
      // postContact();

      //reset del formulario
      setFormData({name: '' , email: '' , phone: '',message: ''})
    }
 
  }

  const handleChange = (e) => {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }) );
  };

  //TODO faltan validaciones y que se reseteen cuando empieza a llenar campos
  const validateInputs = (key) => {
    if(!formData[key]){
      setErrors((prevState)=>({...prevState, [key]: `Campo ${key} requerido incompleto.`}))
    }
  }

  //Material input props - estilan los textfield segun los requisitos de la libreria
  const inputProps = { style: {fontSize: 20} }
  const inputHelperProps = { style: {fontSize: 15} }

  return (
    <form className='contact__form' onSubmit={handleSubmit}>
      { Object.keys(errors).length ?
        <Alert variant="standard" severity="error" sx={{ fontSize:15 }}>
          ¡Cuidado! El formulario no esta completo o algunos datos no son válidos.
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