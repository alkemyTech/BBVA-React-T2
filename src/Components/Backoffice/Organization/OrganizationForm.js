/*Criterios de aceptación: Al ingresar a la ruta /backoffice/organization/edit se mostará el formulario para editar los campos name, logo, 
shortDescription, longDescription y links de redes sociales. El campo shortDescription debe poder editarse con CKEditor. 
Todos los campos son obligatorios, y deben validarse al hacer submit. 
En el caso de que todos estén completados, dejar el método vacío, ya que posteriormente se realizará una petición a la API*/

import './OrganizationForm.css';
import '../../../general-styles.css'

const OrganizationForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('hicisteun subtmi')
    }

    return (
        <form className="organization-form-container" onSubmit={handleSubmit}>
            <input className="form-input" type="text" name='name' placeholder="Nombre"></input>
            <input className="form-input" type="text" name='shortDescription' placeholder="Breve descripcion"></input>
            <input className="form-input" type="text" name='longDescription' placeholder="Descripcion larga"></input>
            <input className="form-input" type="text" name='logo' placeholder="Logo"></input>
            <input className="form-input" type="text" name='facebook' placeholder="Link a Facebook"></input>
            <input className="form-input" type="text" name='twitter' placeholder="Link a Twitter"></input>
            <input className="form-input" type="text" name='instagram' placeholder="Link a Instagram"></input>
            <input className="form-input" type="text" name='linkedin' placeholder="Link a LinkedIn"></input>
            <button type="submit" className="form-button primary-backoffice-button">Enviar</button>
        </form>
    )
}

export default OrganizationForm;