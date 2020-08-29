import axios from "axios";
const instance = axios.create({
  baseURL: "https://learncaptain.herokuapp.com/",
});

export default instance;
