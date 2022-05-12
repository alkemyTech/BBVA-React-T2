import axios from 'axios';

const config = {
    headers: {
        Group: 2
    }
}

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Get = async (endpoint, id, query) => {

    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not defined.");
    }

    id ? id = `/${id}` : id = '';
    query ? query = `?${query}` : query = '';
    
    try {
        const url = `${BASE_URL + endpoint + id + query}`;
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

