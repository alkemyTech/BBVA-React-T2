/*Criterios de aceptación: Al ingresar a la ruta /backoffice/organization/edit se mostará el formulario para editar los campos name, logo, 
shortDescription, longDescription y links de redes sociales. El campo shortDescription debe poder editarse con CKEditor. 
Todos los campos son obligatorios, y deben validarse al hacer submit. 
En el caso de que todos estén completados, dejar el método vacío, ya que posteriormente se realizará una petición a la API*/

import { useState } from 'react'
import './OrganizationForm.css';
import '../../../general-styles.css';
import { is } from 'immer/dist/internal';

const OrganizationForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        shortDescription: '',
        longDescription: '',
        facebookUrl: '',
        twitterUrl: '',
        instagramUrl: '',
        linkedinUrl: ''
    })
    const handleChange = (e) => {
        //comparo cada atributo con el input donde se está escribiendo para actualizarlo 
        if (e.target.name === 'name') {
            setInitialValues({...initialValues, name: e.target.value})
        }
        if (e.target.name === 'shortDescription') {
            setInitialValues({...initialValues, shortDescription: e.target.value})
        }
        if (e.target.name === 'longDescription') {
            setInitialValues({...initialValues, longDescription: e.target.value})
        }
        if (e.target.name === 'facebookUrl') {
            setInitialValues({...initialValues, facebookUrl: e.target.value})
        }
        if (e.target.name === 'linkedinUrl') {
            setInitialValues({...initialValues, linkedinUrl: e.target.value})
        }
        if (e.target.name === 'twitterUrl') {
            setInitialValues({...initialValues, twitterUrl: e.target.value})
        } 
        if (e.target.name = 'instagramUrl') {
            setInitialValues({...initialValues, instagramUrl: e.target.value})
        }
    }

    const isBlank = (str) => {
        return (!str || /^\s*$/.test(str));
    }

    const isUrl = (s) => {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(s);
    }

    const checkTextFields = () => {
        if (
                isBlank(initialValues.name) || 
                isBlank(initialValues.shortDescription) || 
                isBlank(initialValues.longDescription) ||
                isBlank(initialValues.facebookUrl) ||
                isBlank(initialValues.twitterUrl) ||
                isBlank(initialValues.instagramUrl) ||
                isBlank(initialValues.linkedinUrl)
            ) {
            alert('debes completar todos los campos')
            return false
        }
        return true;
    }
    
   

    const handleSubmit = (e) => {
        e.preventDefault();
        let areFieldsComplete = checkTextFields();
        let areUrls = checkUrlFields();
        console.log(areFieldsComplete)
    }

    return (
        <form className="organization-form-container" onSubmit={handleSubmit}>
            <input className="form-input" type="text" name='name' onChange={handleChange} placeholder="Nombre"></input>
            <input className="form-input" type="text" name='shortDescription' onChange={handleChange} placeholder="Breve descripcion" ></input>
            <input className="form-input" type="text" name='longDescription' onChange={handleChange} placeholder="Descripcion larga" ></input>
            <input className="form-input" type="text" name='facebookUrl'onChange={handleChange} placeholder="Link a Facebook" ></input>
            <input className="form-input" type="text" name='twitterUrl' onChange={handleChange} placeholder="Link a Twitter" ></input>
            <input className="form-input" type="text" name='instagramUrl' onChange={handleChange} placeholder="Link a Instagram" ></input>
            <input className="form-input" type="text" name='linkedinUrl' onChange={handleChange} placeholder="Link a LinkedIn" ></input>
            <input className="form-input" type="text" name='logo' placeholder="Logo" ></input>
            <button type="submit" className="form-button primary-backoffice-button">Enviar</button>
        </form>
    )
}

export default OrganizationForm;