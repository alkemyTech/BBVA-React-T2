import getPrivateHeaderAuth from '../../../Services/getPrivateHeaderAuth.js';
import { Get } from '../../../Services/privateApiService';

//const endpoint = process.env.

const checkRole = async () => {
    try {
        const token = await getPrivateHeaderAuth();
        
    } catch (err) {
        console.log(err)
    }
}

export default checkRole;