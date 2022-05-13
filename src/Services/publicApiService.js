import axios from 'axios';

const config = {
    headers: {
        Group: 2
    }
}

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Get = async (endpoint) => {

    try {
        const url = `${BASE_URL + endpoint}`;
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

