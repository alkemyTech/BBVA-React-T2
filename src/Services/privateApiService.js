import axios from 'axios';
import { getPrivateHeaderAuth } from '../Services/'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const config = {
    headers: {
        Group: 2               //Aqui va el ID del equipo!!
    }
}

const Put = (endpoint, id, body) => {
    const headers = getPrivateHeaderAuth();
  
    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not definded");
    }
    if (id < 1) {
        throw new Error("parameter 'id' is invalid");
    }
  
    axios.put(`${BASE_URL}/${endpoint}/${id}`, body, headers)
    .then(res => res )
    .catch(err => err );
  }
  
  export {Delete, Get, Put}