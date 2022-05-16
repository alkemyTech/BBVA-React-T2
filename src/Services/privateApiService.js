import axios from "axios";

const config = {
    headers: {
        Group: 2                //Aqui va el ID del equipo!!
        
    }
}

const Put = (endpoint) => {
    const headers = getPrivateHeaderAuth();

    if (!endpoint) {
        throw new Error("parameter 'endpoint' is not definded");
    }

    axios.Put(endpoint, headers)
        .then(res => res)
        .catch(err => err);
}

export { Put }