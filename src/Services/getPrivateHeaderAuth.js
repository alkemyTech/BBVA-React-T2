import getToken from './getToken'

const getPrivateHeaderAuth = () => {
    //Devuelve un objeto header con la autorizacion si es que hay un token valido
    const token = getToken();
    let header = {};
    if(token){
        header = {'Authorization': 'Bearer ' + token};
    }
    return header;
}

export default getPrivateHeaderAuth