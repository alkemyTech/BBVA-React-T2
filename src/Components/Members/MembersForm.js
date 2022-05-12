import React, { useState } from 'react';
import '../FormStyles.css';

const MembersForm = ({ member = {} }) => {

  const { name, description, image, linkedinUrl, facebookUrl} = member;
  
  const [initialValues, setInitialValues] = useState({
    name: name || '',
    description: description || '',
    image: image || '',
    linkedinUrl: linkedinUrl || '',
    facebookUrl: facebookUrl || ''
  })

  

  const handleChange = (e) => {

    switch (e.target.name) {
      case 'name':
        setInitialValues({...initialValues, name: e.target.value})
        break;
      case 'description':
        setInitialValues({...initialValues, description: e.target.value})
        break;
      case 'image':
        setInitialValues({...initialValues, image: e.target.value})
        break;
      case 'linkedinUrl':
        setInitialValues({...initialValues, linkedinUrl: e.target.value})
        break;
      case 'facebookUrl':
        setInitialValues({...initialValues, facebookUrl: e.target.value})
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      { console.log(typeof initialValues.name) }
      <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Nombre" required></input>
      <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Descripción" required></input>
      <input className="input-field" type="file" accept=".jpg, .png" name="image" value={initialValues.image} onChange={handleChange} required></input>
      <input className="input-field" type="url" name="linkedinUrl" value={initialValues.linkedinUrl} onChange={handleChange} placeholder="Perfil de LinkedIn" required></input>
      <input className="input-field" type="url" name="facebookUrl" value={initialValues.facebookUrl} onChange={handleChange} placeholder="Perfil de Facebook" required></input>
      <button className="primary-button" type="submit">Send</button>
    </form>
  );
}
 
export default MembersForm;