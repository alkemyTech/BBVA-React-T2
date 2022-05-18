import Title from './Title'

const Activity = ({ id, name, image }) => {
    return (
        <div className='activity-container rows-container'>
          <Title id={id} name={name} />
            <p className='activity-container-p__name'>{name}Nombre de la actividad</p>
            <img src={image} alt='imagen de la actividad' className='activity-container__img'/>
            <div className='button-container'>
                {/* {<Link to={'/backoffice/activities/edit/' + id}>
                    <button type='button' className='primary-backoffice-button button-container__edit'>Editar</button>
                </Link>} */}
                <button type='button' className='button-container__delete secondary-backoffice-button' >Redirigir a la actividad</button>
            </div>
        </div>
    )
} 

export default Activity;