/*
Al ingresar a la ruta /backoffice/organization se mostrarán los datos actuales de la Organización 
(name, image, shortDescription), y la acción para acceder al formulario de edición (/backoffice/organization/edit)*/
import { useEffect, useState } from 'react';
import { Get } from '../../Services/privateApiService';
import './Organization.css';

const Organization = () => { 
    const [information, setInformation] = useState({});

    const getData = async () => {
        try {
            let res = await Get('/organization');
            setInformation(res.data.data)
        } catch (err) {
            alert('Hubo un error')
            return err;
        }
    }
    
    useEffect(() => {
        getData()
    } , []);


    return (
        <div className="organization-container">
            <h1>{information.name}</h1>
            <img src={information.logo} alt='imagen ong' />
            <p>{information.short_description}</p>
        </div>
    )
}

export default Organization;