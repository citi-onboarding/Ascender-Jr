import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ascenderjr.herokuapp.com/api',
});

export default api;