/*
Al ingresar a la ruta /backoffice/organization se mostrarán los datos actuales de la Organización 
(name, image, shortDescription), y la acción para acceder al formulario de edición (/backoffice/organization/edit)*/
import { useEffect, useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
import { Get } from '../../Services/privateApiService';
import './Organization.css';
import '../../general-styles.css';

const Organization = () => { 
    const history = useHistory();
    const [information, setInformation] = useState({});
    const [showEditForm, setShowEditForm] = useState(false);

    function handleClick (e) {
        e.preventDefault();
        setShowEditForm(!showEditForm);
        history.push('/backoffice/organization/edit/');
    }

    const getData = async () => {
        try {
            let res = await Get('/organization');
            setInformation(res.data.data)
        } catch (err) {
            return err;
        }
    }
    
    useEffect(() => {
        getData()
    } , []);

    return (
        <>
        { (!showEditForm)? 
            <div className='organization-container' >
                <div className='organization-container__div'>
                    <img className='organization-container__div-img' src={information.logo} alt='imagen ong'/>
                    <h1 className='title'>{information.name}</h1>
                </div>
                <div className='organization-container__p' dangerouslySetInnerHTML={{__html: information.short_description}} />
                <button className='primary-backoffice-button organization-container__button' onClick={handleClick}>
                    Editar
                </button>
            </div>  
            :
            <>
            <p> Aca se debería mostrar el formulario de edicion</p> 
            <button type='submit' onClick={handleClick}>Submit</button>
            </>
            }
        </>    
    )
}

export default Organization;