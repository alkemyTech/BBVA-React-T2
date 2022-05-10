const getPrivateHeaderAuth = () => {
    //Devuelve un objeto header con la autorizacion si es que hay un token valido
    token = getToken();
    header = new Headers();
    if(token){ //deberia comprobar en el if si el token es valido para el modo privado?
        header.append('Authorization', 'Bearer ' + token);
    }
    //deberia tirar error en caso de que no haya un token?
    return header;
}

export default getPrivateHeaderAuth