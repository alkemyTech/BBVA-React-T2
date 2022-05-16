const Thanks = ( props ) => {
    let contribution = props.location.state.contribution;
    return (
        <h1>Gracias por Contribuir con ${contribution}</h1>
    )
}

export default Thanks;