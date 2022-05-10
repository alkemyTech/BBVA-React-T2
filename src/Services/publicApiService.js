import axios from 'axios';

const config = {
    headers: {
        
    }
}
const BASE_URL = "https://ongapi.alkemy.org/api"; // Provisorio hasta tener el archivo .env

const Get = async (endpoint, id) => {

    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not defined.");
    }

    try {
        const url = `${BASE_URL}/${endpoint}${id ? `/${id}` : ''}`;
        const response = await axios.get(url, config);
        return response; 
    } catch (error) {
        return error;
    }
}  

const Post = (endpoint, body) => {
    axios.post(BASE_URL + endpoint, body)
    .then(res => res)
    .catch(err => err)
}

export { Post, Get }
