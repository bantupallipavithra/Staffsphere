import axios from "axios";

const publicAxios = axios.create({
  baseURL: "https://staffsphere-i8p3.onrender.com/api",
});

export default publicAxios;
