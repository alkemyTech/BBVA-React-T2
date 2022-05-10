import axios from 'axios';

//const BASE_URL = 'https://jsonplaceholder.typicode.com';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const config = {
    headers: {
        Group: 2                //Aqui va el ID del equipo!!
        
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const Delete = (endpoint, id) => {
    const headers = getAuthorization();

    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not definded");
    }
    if (id < 1) {
        throw new Error("parameter 'id' is invalid");
    }

    axios.delete(`${BASE_URL}/${endpoint}/${id}`, headers )
    .then(res => res )
    .catch(err => err );
}

export { Delete }