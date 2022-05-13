import axios from "axios";

const config = {
    headers: {
        Group: 2                //Aqui va el ID del equipo!!
        
    }
}

const Put = (endpoint, id) => {
    const headers = getPrivateHeaderAuth();

    if (!endpoint) {
        throw new Error("parameter 'endpoint' is not definded");
    }
    if (id < 1) {
        throw new Error("parameter 'id' is invalid");
    }

    axios.Put(`${endpoint+id}`, headers)
        .then(res => res)
        .catch(err => err);
}

export { Put }