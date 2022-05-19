import axios from "axios";
import getPrivateHeaderAuth from './getPrivateHeaderAuth';

const config = {
    headers: getPrivateHeaderAuth()
}

const Get = (endpoint) => {
    
    if(!endpoint) throw new Error("Parameter 'endpoint' is not defined.")

    return axios.get(endpoint, config)
        .then((res) => res)
        .catch((err) => err);
};

const Delete = (endpoint) => {

    if (!endpoint) {
        throw new Error("Parameter 'endpoint' is not defined.")
    }

    return axios.delete(endpoint, config)
        .then(res => res)
        .catch(err => err);
}

const Post = (endpoint, body) => {
    if (!endpoint) throw new Error("parameter 'endpoint' is not defined.");
    if (!body) throw new Error("parameter 'body' is not defined")

    if (getPrivateHeaderAuth) {
      return  axios.post(endpoint, body)
            .then(res => res)
            .catch(err => err)
    }
}

const Put = async (endpoint, body) => {

    if (!endpoint) throw new Error("parameter 'endpoint' is not defined.");
    if (!body) throw new Error("parameter 'body' is not defined")

    if (getPrivateHeaderAuth) {
        try{
            const response =  await axios.put(endpoint, body, config)
            return response
        }catch(error){
            return error
        }
    }
}

export { Delete, Get, Post, Put }