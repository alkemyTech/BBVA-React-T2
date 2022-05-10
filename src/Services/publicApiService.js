import axios from 'axios';

const config = {
    headers: {
        Group: 2
    }
}
const BASE_URL = "https://ongapi.alkemy.org/api"; // Provisorio hasta tener el archivo .env

const Get = async (endpoint, id = '') => {

    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not defined.");
    }

    try {
        const url = `${BASE_URL}/${endpoint}/${id}`;
        const response = await axios.get(url, config);
        return response; 
    } catch (error) {
        return error;
    }

}

export default Get;