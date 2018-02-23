import axios from "axios";
let instance = axios.create({
  baseURL: "http://localhost:3030/api",
  timeout: 1000,
  withCredentials: true
});
export default instance;
