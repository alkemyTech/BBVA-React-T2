/*Al ingresar a la ruta /backoffice/activities, mostrará el listado de Actividades de la ONG para el usuario administrador en una tabla.
El mismo tendrá datos mockeados para representar los datos, que posteriormente se obtendrán desde el endpoint de listado de Actividades. 
La tabla mostrará los campos name, image, y createdAt, y las acciones para eliminar y editar. 
En la sección superior, mostrará un componente <Link> que redirigirá a la ruta /backoffice/activities/create.*/
import './ActivitiesBackOffice.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Activity from './Acitivity';
import '../../general-styles.css';
import { Delete } from '../../Services/privateApiService';

const ActivitiesBackOffice = () => {
    const [activitiesMock, setActivitiesMock] = useState([]);
    
    //Se listan las activities al cargar el componente
    useEffect(() => {
        setActivitiesMock([
            {id: 1, name: 'actividad 1', imagen:'imagen1', createdAt: '12/01/2022'},
            {id: 2, name: 'actividad 2', imagen:'imagen2', createdAt: '12/01/2022'},
            {id: 3, name: 'actividad 3', imagen:'imagen3', createdAt: '12/01/2022'},
            {id: 4, name: 'actividad 4', imagen:'imagen4', createdAt: '12/01/2022'}
        ]);
    },[])
 
    const handleDelete = async (id) => {
        try {
            await Delete(process.env.REACT_APP_ACTIVITIES, id);
            //aca se debe consultar el endpoint de actividades de nuevo para actualizarlo.
            //se reemplazaría el activitiesMock.filter por GET(Activities)
            let activitiesUpdated = await activitiesMock.filter(activity => activity.id !== id);
            setActivitiesMock(activitiesUpdated);
        } catch (err) {
            alert('error')
        }
    }

    return (
        <>
        <div className="container-create-activity">
            <Link to={'/backoffice/activities/create'} >
                <button type='button' className='primary-backoffice-button button-container__edit'>Crear nueva actividad</button>
            </Link>
        </div>
        <div class='list-container'>
            <h1 class='list-container__h1'>Lista de actividades</h1>
            <section className='list-container__section rows-container'> 
                <p>Nombre</p>
                <p>Imagen</p>
                <p>Creado</p>
            </section>
            {
                activitiesMock.map((activity) => {
                    return (
                        <Activity 
                            id={activity.id} 
                            name={activity.name} 
                            createdAt={activity.createdAt} 
                            image={activity.image} 
                            key={activity.id} 
                            handleDelete={handleDelete}
                        />
                    )
                })
            }
        </div>
        </>
    )
}

export default ActivitiesBackOffice;