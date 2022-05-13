/*Al ingresar a la ruta /backoffice/activities, mostrará el listado de Actividades de la ONG para el usuario administrador en una tabla.
El mismo tendrá datos mockeados para representar los datos, que posteriormente se obtendrán desde el endpoint de listado de Actividades. 
La tabla mostrará los campos name, image, y createdAt, y las acciones para eliminar y editar. 
En la sección superior, mostrará un componente <Link> que redirigirá a la ruta /backoffice/activities/create.*/
import './ActivitiesBackOffice.css';
import '../../general-styles.css';

const ActivitiesBackOffice = () => {

    let activitiesMock = [
        {id: 1, name: 'actividad 1', imagen:'imagen1', createdAt: '12/01/2022'},
        {id: 1, name: 'actividad 2', imagen:'imagen2', createdAt: '12/01/2022'},
        {id: 1, name: 'actividad 3', imagen:'imagen3', createdAt: '12/01/2022'},
        {id: 1, name: 'actividad 4', imagen:'imagen4', createdAt: '12/01/2022'}
    ];

    console.log(activitiesMock)
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
                    <div key = {activity.id} className='activity-container rows-container'>
                        <p className='activity-container-p__name'>{activity.name}</p>
                        <img src={activity.imagen} alt='imagen de la actividad' className='activity-container__img'/>
                        <p className='activity-container-p__createAt'>{activity.createdAt}</p>
                        <div className='button-container'>
                            <button type='button' className='primary-backoffice-button button-container__edit' >Editar</button>
                            <button type='button' className='button-container__delete secondary-backoffice-button'>Eliminar</button>
                        </div>
                    </div>)
                })
            }
        </div>
    )
}

export default ActivitiesBackOffice;