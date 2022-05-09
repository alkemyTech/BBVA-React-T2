import axios from 'axios';

const config = {
    headers: {
        Group: 2
    }
}

const Get = (endpoint, id = '') => {

    const isUndefinedEndpoint = endpoint == null;

    if(isUndefinedEndpoint) {
        throw new Error("parameter 'endpoint' is not defined.");
    }

    axios.get(`https://ongapi.alkemy.org/api/${endpoint}/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get