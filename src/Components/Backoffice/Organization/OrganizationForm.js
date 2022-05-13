import { useState } from 'react'
import './OrganizationForm.css';
import '../../../general-styles.css';

const OrganizationForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        shortDescription: '',
        longDescription: '',
        facebookUrl: '',
        twitterUrl: '',
        instagramUrl: '',
        linkedinUrl: '',
        logo: ''
    })
    //esta funcion sirve para actualizar el valor de cada input y atributo
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
        if (e.target.name === 'instagramUrl') {
            setInitialValues({...initialValues, instagramUrl: e.target.value})
        }
        if (e.target.name === 'logo') {
            setInitialValues({...initialValues, logo: e.target.value})
        }
    }
    //chequeo si los campos estan completos o son vacios
    const isBlank = (str) => {
        return (!str || /^\s*$/.test(str));
    }
    //chequeo que la url sea valida
    const isUrl = (str) => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }
    //chequeo que todos los campos esten completos
    const areFieldsCompleted = () => {
        if (
                isBlank(initialValues.name) || 
                isBlank(initialValues.shortDescription) || 
                isBlank(initialValues.longDescription) ||
                isBlank(initialValues.facebookUrl) ||
                isBlank(initialValues.twitterUrl) ||
                isBlank(initialValues.instagramUrl) ||
                isBlank(initialValues.linkedinUrl)
            ) {
            alert('debes completar todos los campos');
            return false;
        }
        return true;
    }
    //valido el tipo de archivo que se quiere subir
    const validateFile = () => 
        {
            var allowedExtension = ['png', 'jpg'];
            var fileExtension = document.getElementById('img1').value.split('.').pop().toLowerCase();
            var isValidFile = false;

                for(var index in allowedExtension) {

                    if(fileExtension === allowedExtension[index]) {
                        isValidFile = true; 
                        break;
                    }
                }

                if(!isValidFile) {
                    alert('Allowed Extensions are : *.' + allowedExtension.join(', *.'));
                }

                return isValidFile;
    }
    //valido si la url es valida
    const checkUrlFields = () => {
       if (
           !isUrl(initialValues.facebookUrl) ||
           !isUrl(initialValues.twitterUrl) ||
           !isUrl(initialValues.instagramUrl) ||
           !isUrl(initialValues.linkedinUrl) 
       ) {
           alert('Las url no son validas')
           return false;
       }
       return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!areFieldsCompleted()) {
            return;
        }
        if(!checkUrlFields()) {
            return;
        }
        if(!validateFile(initialValues.logo)) {
           return;
        }
        alert('enviando formulario')
        //borrar la linea de arriba y hacer lo que correspond
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
            <input className="form-input" type="file" id='img1' accept="image/png, image/jpeg" alt='new logo' src="logo.jpg" name='logo' placeholder="Logo" onChange={handleChange}></input>
            <button type="submit" className="form-button primary-backoffice-button">Enviar</button>
        </form>
    )
}

export default OrganizationForm;