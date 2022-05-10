import axios from 'axios';

const config = {
    headers: {
        Group: 2
    }
}
const BASE_URL = "https://ongapi.alkemy.org/api"; // Provisorio hasta tener el archivo .env

const Get = async (endpoint, id = '') => {
<<<<<<< HEAD

    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not defined.");
    }

    try {
        const url = `${BASE_URL}/${endpoint}/${id}`;
        const response = await axios.get(url);
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
=======

    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not defined.");
    }

    try {
        const url = `${BASE_URL}/${endpoint}/${id}`;
        const response = await axios.get(url);
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



>>>>>>> 8819b957c20ccbde687787f939b2aed3a9e3e8ca
