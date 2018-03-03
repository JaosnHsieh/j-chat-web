import axios from "axios";
let instance = axios.create({
  baseURL: "http://45.32.119.183:3030/api",
  timeout: 1000,
  withCredentials: true
});
export default instance;
