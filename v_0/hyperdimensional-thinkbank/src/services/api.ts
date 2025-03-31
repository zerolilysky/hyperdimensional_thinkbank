// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // ⛳ 根据你后端实际地址修改
  withCredentials: true, // 如果后端需要 Cookie，建议保留
});

export default api;
