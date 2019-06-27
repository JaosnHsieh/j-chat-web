import axios from 'axios';
console.log(process.env.REACT_APP_WS_URL);
let instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://REACT_APP_API_URL:3030/api',
  timeout: 1000,
  withCredentials: true,
});
export default instance;
