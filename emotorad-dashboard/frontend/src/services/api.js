// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const googleLogin = async (data) => api.post('/users/auth/google', data);

export default api;
