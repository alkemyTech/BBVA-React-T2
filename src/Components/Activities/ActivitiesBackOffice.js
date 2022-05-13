/*Al ingresar a la ruta /backoffice/activities, mostrará el listado de Actividades de la ONG para el usuario administrador en una tabla.
El mismo tendrá datos mockeados para representar los datos, que posteriormente se obtendrán desde el endpoint de listado de Actividades. 
La tabla mostrará los campos name, image, y createdAt, y las acciones para eliminar y editar. 
En la sección superior, mostrará un componente <Link> que redirigirá a la ruta /backoffice/activities/create.*/
import './ActivitiesBackOffice.css';
import Activity from './Acitivity';
import '../../general-styles.css';
//import { Delete } from '../../Services/privateApiService';

const ActivitiesBackOffice = () => {

    let activitiesMock = [
        {id: 1, name: 'actividad 1', imagen:'imagen1', createdAt: '12/01/2022'},
        {id: 2, name: 'actividad 2', imagen:'imagen2', createdAt: '12/01/2022'},
        {id: 3, name: 'actividad 3', imagen:'imagen3', createdAt: '12/01/2022'},
        {id: 4, name: 'actividad 4', imagen:'imagen4', createdAt: '12/01/2022'}
    ];

    const handleEdit = () => {}
    const handleDelete = (id) => {
        console.log(id);
        //Delete(process.env.REACT_APP_ACTIVITIES, id)
    }

    return (
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
                            handleEdit={handleEdit}
                        />
                    )
                })
            }
        </div>
    )
}

export default ActivitiesBackOffice;