import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.artic.edu/api/v1',
});

export default API;
