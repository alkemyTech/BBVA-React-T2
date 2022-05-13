/*Al ingresar a la ruta /backoffice/activities, mostrará el listado de Actividades de la ONG para el usuario administrador en una tabla.
El mismo tendrá datos mockeados para representar los datos, que posteriormente se obtendrán desde el endpoint de listado de Actividades. 
La tabla mostrará los campos name, image, y createdAt, y las acciones para eliminar y editar. 
En la sección superior, mostrará un componente <Link> que redirigirá a la ruta /backoffice/activities/create.*/
import './ActivitiesBackOffice.css';

const ActivitiesBackOffice = () => {

    let activitiesMock = [
        {name: 'actividad 1', imagen:'imagen1', createdAt: '12/01/2022'},
        {name: 'actividad 2', imagen:'imagen2', createdAt: '12/01/2022'},
        {name: 'actividad 3', imagen:'imagen3', createdAt: '12/01/2022'},
        {name: 'actividad 4', imagen:'imagen4', createdAt: '12/01/2022'}
    ];

    console.log(activitiesMock)
    return (
        <div class='list-container'>
            <h1 class='list-container__h1'>Lista de actividades</h1>
            {
                activitiesMock.map((activity, index) => {
                    return (
                    <div key = {index} className='activity-container'>
                        <h1 className='activity-container__h1'>{activity.name}</h1>
                        <img src={activity.imagen} alt='imagen de la actividad' className='activity-container__img'/>
                        <p className='activity-container__p'>{activity.createdAt}</p>
                    </div>)
                })
            }
        </div>
    )
}

export default ActivitiesBackOffice;