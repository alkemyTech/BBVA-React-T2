import axios from "axios";

const setLogin = (body) => {
  return axios.post("https://ongapi.alkemy.org/api/login", body);
};

export default setLogin;