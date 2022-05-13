import axios from "axios";
import getPrivateHeaderAuth from './getPrivateHeaderAuth';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const config = {
     headers: getPrivateHeaderAuth()        
}

const Get = (endpoint) => {
    
    const url = `${BASE_URL + endpoint}` 
    
    return axios.get(url, config)
          .then((res) => res)
          .catch((err) => err);
  };

const Delete = (endpoint) => {
    //const headers = getAuthorization();

    axios.delete(`${BASE_URL + endpoint}`, config )
    .then(res => res )
    .catch(err => err );
}

export { Delete, Get }

