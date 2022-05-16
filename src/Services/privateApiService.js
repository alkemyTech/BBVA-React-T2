import axios from "axios";
<<<<<<< HEAD

const BASE_URL = process.env.REACT_APP_BASE_URL;
=======
import getPrivateHeaderAuth from './getPrivateHeaderAuth';
>>>>>>> ad3737c2f79d0622ffd8c6a7b5f0e8f99caf6d7c

const config = {
     headers: getPrivateHeaderAuth()        
}

<<<<<<< HEAD
const Get = (endpoint, id) => {

    if (!endpoint) throw new Error("parameter 'endpoint' is not defined.");

    //axios.defaults.headers.get['Authorization'] = getAuthorization();

    const url = `${BASE_URL}${endpoint}${id ? `/${id}` : ''}`
    return axios.get(url, config)
=======
const Get = (endpoint) => {
    
    if(!endpoint){
        throw new Error("Parameter 'endpoint' is not defined.")
    }
    
    return axios.get(endpoint, config)
>>>>>>> ad3737c2f79d0622ffd8c6a7b5f0e8f99caf6d7c
        .then((res) => res)
        .catch((err) => err);
};

<<<<<<< HEAD
const Delete = (endpoint, id) => {
    //const headers = getAuthorization();

    if (!endpoint) {
        throw new Error("parameter 'endpoint' is not definded");
    }
    if (id < 1) {
        throw new Error("parameter 'id' is invalid");
    }

    //axios.delete(`${BASE_URL}/${endpoint}/${id}`, headers)
        //.then(res => res)
        //.catch(err => err);
=======
const Delete = (endpoint) => {
    if(!endpoint){
        throw new Error("Parameter 'endpoint' is not defined.")
    }

    axios.delete(endpoint, config )
    .then(res => res )
    .catch(err => err );
>>>>>>> ad3737c2f79d0622ffd8c6a7b5f0e8f99caf6d7c
}

export { Delete, Get }

