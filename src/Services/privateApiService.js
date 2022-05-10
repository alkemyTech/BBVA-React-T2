import axios from "axios";

const BASE_URL = process.env.BASE_URL;
// const BASE_URL = 'https://ongapi.alkemy.org/api';

const config = {
  headers: {
    Group: 2 
  },
};


const Get = async (endpoint, id ) => {
  
  if(!endpoint) throw new Error("parameter 'endpoint' is not defined.");

  axios.defaults.headers.get['Authorization'] = getAuthorization();

  const url = `${BASE_URL}/${endpoint}${ id? `/${id}`: ''}` 
  return axios.get(url)
        .then((res) => res)
        .catch((err) => err);
};

export default Get;
