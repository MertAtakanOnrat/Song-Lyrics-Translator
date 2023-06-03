import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8025'
});

export default axiosInstance;
