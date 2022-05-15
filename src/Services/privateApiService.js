import axios from "axios";
import getPrivateHeaderAuth from './getPrivateHeaderAuth';

const config = {
     headers: getPrivateHeaderAuth()        
}

const Get = (endpoint) => {
    
    if(!endpoint){
        throw new Error("Parameter 'endpoint' is not defined.")
    }
    
    return axios.get(endpoint, config)
        .then((res) => res)
        .catch((err) => err);
};

const Delete = (endpoint) => {
    if(!endpoint){
        throw new Error("Parameter 'endpoint' is not defined.")
    }

    axios.delete(endpoint, config )
    .then(res => res )
    .catch(err => err );
}

<<<<<<< HEAD
export { Delete }
=======
export { Delete, Get }

>>>>>>> da9deb03a7adcc96fcbcf519394e6bbb13148c9f
