import getPrivateHeaderAuth from '../../../Services/getPrivateHeaderAuth.js';
import { Get } from '../../../Services/privateApiService';

const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_AUTH

const isAdmin = (role_id) => {
    if(role_id === 1) {return true;} else {return false;}
}

const checkRole = async () => {
    try {
        const token = await getPrivateHeaderAuth();
        if(token.hasOwnProperty('error')) { 
            return false;
        }
        const res = await Get(endpoint);
        console.log(res)
        if(res.data.success === true) {
            let user = isAdmin(res.data.data.user.role_id)
            if (user){
                return true 
            } else {
                console.log('user false', user)
                return false;
            }
        } else {
            console.log('data.suc false', res.data.success)

            return false;
        }
    } catch (err) {
        return err;
    }
}

checkRole()

export { checkRole };