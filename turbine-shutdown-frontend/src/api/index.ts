// src/api/index.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example: Add request/response interceptors if needed
// api.interceptors.request.use(config => {
//   // Add auth tokens, logging, etc.
//   return config;
// });

export default api;