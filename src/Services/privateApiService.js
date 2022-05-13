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

export { Delete, Get }

