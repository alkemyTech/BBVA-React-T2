import getToken from './getToken';

const getPrivateHeaderAuth = () => {
    //Devuelve un objeto header con la autorizacion si es que hay un token valido
    token = getToken();
    header = {};
    if(token){
        header = {'Authorization': 'Bearer ' + token};
    }
    return header;
}

export default getPrivateHeaderAuth