// src/api/auth.ts
import axios from 'axios';

const API_BASE = '/api/auth';

/**
 * 登录函数，调用后端认证 API 并返回用户数据与 JWT 令牌
 * 后续扩展：可以增加多因素认证的接口
 */
export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_BASE}/login`, { email, password });
  return response.data;
};

/**
 * 登出函数，通知后端销毁会话或令牌
 */
export const logoutUser = async () => {
  const response = await axios.post(`${API_BASE}/logout`);
  return response.data;
};

/**
 * 获取当前登录用户的信息
 */
export const getCurrentUser = async () => {
  const response = await axios.get(`${API_BASE}/me`);
  return response.data;
};

/**
 * 注册函数，传递用户名、邮箱、密码和用户类型
 * 后续扩展：支持学术身份验证上传文献预印本，或接入 ORCID
 */
export const register = async (
  username: string,
  email: string,
  password: string,
  userType: string
) => {
  const response = await axios.post(`${API_BASE}/register`, { username, email, password, userType });
  return response.data;
};

export default { loginUser, logoutUser, getCurrentUser, register };
