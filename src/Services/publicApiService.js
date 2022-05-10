import axios from 'axios';

const config = {
    headers: {
        Group: 2
    }
}
const BASE_URL = "https://ongapi.alkemy.org/api/"; // Provisorio hasta tener el archivo .env

const Get = async (endpoint, id = '') => {

    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not defined.");
    }
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
        return response; 
    } catch (error) {
        console.log(error)
    }

}

export default Get;