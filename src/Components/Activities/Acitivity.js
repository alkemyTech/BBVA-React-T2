import './ActivitiesBackOffice.css';
import { Link } from 'react-router-dom';

const Activity = ({ id, name, image, createdAt, handleDelete }) => {
    return (
        <div key = {id} className='activity-container rows-container'>
            <p className='activity-container-p__name'>{name}</p>
            <img src={image} alt='imagen de la actividad' className='activity-container__img'/>
            <p className='activity-container-p__createAt'>{createdAt}</p>
            <div className='button-container'>
                <Link to={'/backoffice/activities/edit/' + id}>
                    <button type='button' className='primary-backoffice-button button-container__edit'>Editar</button>
                </Link>
                <button type='button' className='button-container__delete secondary-backoffice-button' onClick={()=>handleDelete(id)}>Eliminar</button>
            </div>
        </div>
    )
} 

export default Activity;