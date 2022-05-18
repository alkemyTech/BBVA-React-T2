

const Title = ({id, name}) => {

    const idNull = 0;
  
    return (
      <div className="title-general-container">
        { {id} !== idNull && <div>{name}</div> }
        <div>titulo</div>
      </div>
    )
  }
  export default Title;