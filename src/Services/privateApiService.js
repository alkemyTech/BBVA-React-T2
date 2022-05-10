import axios from 'axios';

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
    axios.delete(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`, { headers })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get
export { Delete }