const Thanks = ( props ) => {
    let contribution = props.location.state.contribution;
    return (
        <h1 className="thanks-title">Gracias por Contribuir con ${contribution}. Apreciamos mucho su colaboración con la ONG Somos Mas</h1>
    )
}

export default Thanks;