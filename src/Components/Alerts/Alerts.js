import swAlert from 'sweetalert';

//type can be: error - warning - success
const handleAlert = (title, message, type) => {
    swAlert(title, message, type);
}

export default handleAlert;