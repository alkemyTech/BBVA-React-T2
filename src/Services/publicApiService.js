import axios from 'axios';

const url = 'https://ongapi.alkemy.org/api/'

const config = {
    headers: {
        Group: 02               //Aqui va el ID del equipo!!
    }
}

const Post = (endpoint, body) => {
    axios.post(url + endpoint, body)
    .then((res) => {
        return(res)
    })
    .catch((err) => {
        return(err)
    })
}

export { Post }