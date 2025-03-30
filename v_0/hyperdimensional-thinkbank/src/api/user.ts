import axios from 'axios';

const API_BASE = '/api/user';

/**
 * 获取用户资料
 * 后续扩展：支持用户成就、贡献统计等信息的查询
 */
export const fetchUserProfile = async (userId: string) => {
  const response = await axios.get(`${API_BASE}/${userId}`);
  return response.data;
};

export default { fetchUserProfile };
