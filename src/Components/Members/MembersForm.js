import React, { useState } from 'react';
import '../FormStyles.css';
import { validateImageFormat, validateHasContent, validateSocialNetworkUrl, validateLength } from '../../Services/validatorsService';
import { Post } from '../../Services/publicApiService';

const MembersForm = ({ member = {} }) => {

  const { name, description, image, linkedinUrl, facebookUrl} = member;
  
  const [formValues, setFormValues] = useState({
    name: name || '',
    description: description || '',
    image: image || '',
    linkedinUrl: linkedinUrl || '',
    facebookUrl: facebookUrl || ''
  })

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setFormValues({...formValues, name: e.target.value})
        break;
      case 'description':
        setFormValues({...formValues, description: e.target.value})
        break;
      case 'image':
        setFormValues({...formValues, image: e.target.value})
        break;
      case 'linkedinUrl':
        setFormValues({...formValues, linkedinUrl: e.target.value})
        break;
      case 'facebookUrl':
        setFormValues({...formValues, facebookUrl: e.target.value})
        break;
      default:
        break;
    }
  }

  const validateForm = () => {
    for (const field in formValues) {
      const fieldValue = formValues[field];
      if(!validateHasContent(fieldValue)){
        alert('Todos los campos son obligatorios');
        return false;
      }
    }

    if(!validateLength(formValues.name, 4)) {
      alert("El campo Name debe tener al menos 4 caracteres de longitud");
      return false;
    }

    if(!validateImageFormat(formValues.image)) {
      alert("Formato de imagen inválido, debe ser .png o .jpg");
      return false;
    }

    if (!validateSocialNetworkUrl('facebook', formValues.facebookUrl)) {
      alert("Perfil de Facebook inválido, ingresa una URL correcta, ej: \n'https://www.facebook.com/maria-garcia'");
      return false;      
    }

    if (!validateSocialNetworkUrl('linkedin', formValues.linkedinUrl)) {
      alert("Perfil de LinkedIn inválido, ingresa una URL correcta, ej: \n'https://www.linkedin.com/maria-garcia'");
      return false;      
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()) {
      console.log('Entró');
      console.log(formValues);
    }
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="input-field" type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Nombre" required></input>
      <input className="input-field" type="text" name="description" value={formValues.description} onChange={handleChange} placeholder="Descripción" required></input>
      <input className="input-field" type="file" accept=".jpg, .png" name="image" value={formValues.image} onChange={handleChange} required></input>
      <input className="input-field" type="url" name="linkedinUrl" value={formValues.linkedinUrl} onChange={handleChange} placeholder="Perfil de LinkedIn" required></input>
      <input className="input-field" type="url" name="facebookUrl" value={formValues.facebookUrl} onChange={handleChange} placeholder="Perfil de Facebook" required></input>
      <button className="primary-button" type="submit">Send</button>
    </form>
  );
}
 
export default MembersForm;