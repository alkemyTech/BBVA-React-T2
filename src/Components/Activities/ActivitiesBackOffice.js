/*Al ingresar a la ruta /backoffice/activities, mostrará el listado de Actividades de la ONG para el usuario administrador en una tabla.
El mismo tendrá datos mockeados para representar los datos, que posteriormente se obtendrán desde el endpoint de listado de Actividades. 
La tabla mostrará los campos name, image, y createdAt, y las acciones para eliminar y editar. 
En la sección superior, mostrará un componente <Link> que redirigirá a la ruta /backoffice/activities/create.*/
import './ActivitiesBackOffice.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Activity from './Acitivity';
import '../../general-styles.css';
import { Delete, Get } from '../../Services/privateApiService';

const ActivitiesBackOffice = () => {
    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        return await Get(process.env.REACT_APP_ACTIVITIES);
    }
    
    //Se listan las activities al cargar el componente
    useEffect(() => {
        getActivities()
            .then( res => {
                setActivities(res.data.data);
            })
            .catch(error => error)
    },[setActivities])

    const handleDelete = async (id) => {
        try {
            await Delete(process.env.REACT_APP_ACTIVITIES, `/${id}`);
            let res = await getActivities();
            let activities = res.data.data;
            //actualizo la lista paraque se recargue el componente sin la actividad eliminada.
            setActivities(activities.filter(activity => activity.id !== id));
        } catch (err) {
            alert('error')
        }
    }

    return (
        <>
        <div className="container-create-activity">
            <Link to={'/backoffice/activities/create'} className='container-create-activity__a'>
                <button type='button' className= 'primary-backoffice-button button-create'>Crear nueva actividad</button>
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
                activities.map((activity) => {
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