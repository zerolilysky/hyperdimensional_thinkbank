// src/api/auth.ts
import api from '../services/api';

export const loginUser = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

export const register = async (
  username: string,
  email: string,
  password: string,
  userType: string
) => {
  const response = await api.post('/auth/register', {
    username,
    email,
    password,
    userType,
  });
  return response.data;
};

export default { loginUser, logoutUser, getCurrentUser, register };
