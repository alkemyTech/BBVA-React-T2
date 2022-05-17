import swAlert from 'sweetalert';

//type can be: error - warning - success
const alert = (title, message, type) => {
    swAlert(title, message, type);
}

export default alert;