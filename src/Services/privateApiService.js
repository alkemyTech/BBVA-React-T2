import axios from "axios";
import getPrivateHeaderAuth from './getPrivateHeaderAuth';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const config = {
     headers: getPrivateHeaderAuth()        
}

const Get = (endpoint, id, query) => {
  
    if(!endpoint) throw new Error("parameter 'endpoint' is not defined.");

    id = id? `/${id}`: '';
    query = query? `?${query}`: '';
  
    const url = `${BASE_URL + endpoint + id + query}` 
    console.log(url);
    
    return axios.get(url, config)
          .then((res) => res)
          .catch((err) => err);
  };

const Delete = (endpoint, id) => {
    //const headers = getAuthorization();

    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not definded");
    }
    if (id < 1) {
        throw new Error("parameter 'id' is invalid");
    }

    axios.delete(`${BASE_URL + endpoint + '/' + id}`, config )
    .then(res => res )
    .catch(err => err );
}

export { Delete, Get }

