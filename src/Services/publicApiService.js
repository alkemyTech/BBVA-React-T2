import axios from 'axios';

const config = {
    headers: {
        Group: 2
    }
}

const Get = async (endpoint, id = '') => {

    if(!endpoint) {
        throw new Error("parameter 'endpoint' is not defined.");
    }
    try {
        const response = await axios.get(`https://ongapi.alkemy.org/api/${endpoint}/${id}`);
        return response; 
    } catch (error) {
        console.log(error);
    }

}

export default Get;