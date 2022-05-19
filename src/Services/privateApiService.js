import axios from "axios";
import getPrivateHeaderAuth from './getPrivateHeaderAuth';

const config = {
    headers: getPrivateHeaderAuth()
}

const Get = async (endpoint) => {
    
    if(!endpoint) throw new Error("Parameter 'endpoint' is not defined.")

    try {       
        const response = await axios.get(endpoint, config)
        return response
    } catch (error) {
        return error       
    }
};

const Delete = async (endpoint) => {

    if(!endpoint) throw new Error("Parameter 'endpoint' is not defined.")

    try {
        const response = await axios.delete(endpoint, config);
        return response
    } catch (error) {
        return error       
    }
}

const Post = async (endpoint, body) => {
    if (!endpoint) throw new Error("parameter 'endpoint' is not defined.");
    if (!body) throw new Error("parameter 'body' is not defined")

    if (getPrivateHeaderAuth) {
        try{
            const response =  await axios.post(endpoint, body, config)
            return response
        }catch(error){
            return error
        }
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

<<<<<<< HEAD
const Put = () => {
    console.log("PUT")
}

=======
>>>>>>> 81b23c2e4a16b2a366742cb622c4a29ae768176e
export { Delete, Get, Post, Put }
