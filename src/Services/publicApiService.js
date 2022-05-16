import axios from 'axios';

const config = {
    headers: {
        Group: 2
    }
}


const Get = async (endpoint) => {
    if(!endpoint){
        throw new Error("Parameter 'endpoint' is not defined.")
    }

    try {
        const response = await axios.get(endpoint);
        return response; 
    } catch (error) {
        return error;
    }
}  

const Post = async (endpoint, body) => {
<<<<<<< HEAD
    try {
        const response = await axios.post(BASE_URL + endpoint, body, config)
=======
    if(!endpoint){
        throw new Error("Parameter 'endpoint' is not defined.")
    }

    try {
        const response = await axios.post(endpoint, body, config)
>>>>>>> ad3737c2f79d0622ffd8c6a7b5f0e8f99caf6d7c
        return response;
    } catch (error) {
        return error;
    }
}

export { Post, Get }

