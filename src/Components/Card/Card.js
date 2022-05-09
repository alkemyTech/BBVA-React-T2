function Card(props){
    /* props a recibir:
        imageSrc = src de la imagen.
        name = Nombre de la card.
        desc = Texto descriptivo de la card.
        imgDimensions = dimension aprox de la img de la card, para usar los 
            placeholders que tenemos en caso de que no cargue la img.
    */
    return (
        <div className="card">
            <img 
                src={props.imageSrc} 
                alt={props.name} 
                className="card-img"
                onError={({currentTarget}) => {
                    currentTarget.onerror = false;
                    currentTarget.src= "./public/images/placeholder/" + props.imgDimensions + ".png";
                }}
            />
            <h3 className="card-name">{props.name}</h3>
            <p className="card-desc">{props.desc}</p>
        </div>
    )
}

export default Card;