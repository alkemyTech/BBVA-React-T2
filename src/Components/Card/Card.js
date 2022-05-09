function Card(props){
    return (
        <div>
            <img src={props.imageSrc} alt={props.name} className="card-img"></img>
            <h3 className="card-name">{props.name}</h3>
            <p className="card-desc">{props.desc}</p>
        </div>
    )
}

export default Card;