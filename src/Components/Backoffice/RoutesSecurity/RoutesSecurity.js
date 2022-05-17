import getPrivateHeaderAuth from '../../../Services/getPrivateHeaderAuth.js';
import { Get } from '../../../Services/privateApiService';

const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_AUTH

const isAdmin = (role_id) => {
    if(role_id === 1) {return true;} else {return false;}
}

const checkRole = async () => {
    try {
        const token = await getPrivateHeaderAuth();
        const res = await Get(endpoint);
        if (isAdmin(res.data.data.user.role_id)){
            return true 
        } else {
            return false
        };
    } catch (err) {
        return err;
    }
}

checkRole()

export { checkRole };