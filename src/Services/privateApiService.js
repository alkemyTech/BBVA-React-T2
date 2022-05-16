import axios from "axios";

//const BASE_URL = 'https://jsonplaceholder.typicode.com';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const config = {
    headers: getPrivateHeaderAuth()
}

const Get = (endpoint, id) => {
  
    if(!endpoint) throw new Error("parameter 'endpoint' is not defined.");
  
    axios.defaults.headers.get['Authorization'] = getAuthorization();
  
    const url = `${BASE_URL}${endpoint}${ id? `/${id}`: ''}` 
    return axios.get(url, config)
          .then((res) => res)
          .catch((err) => err);
  };


const Delete = (endpoint) => {

    if (!endpoint) {
        throw new Error("Parameter 'endpoint' is not defined.")
    }

    axios.delete(endpoint, config)
        .then(res => res)
        .catch(err => err);
}

const Post = (endpoint, body) => {
    if (!endpoint) throw new Error("parameter 'endpoint' is not defined.");
    if (!body) throw new Error("parameter 'body' is not defined")

    if (getPrivateHeaderAuth) {
        axios.post(endpoint, body)
            .then(res => res)
            .catch(err => err)
    }
}

export { Delete, Get, Post }


