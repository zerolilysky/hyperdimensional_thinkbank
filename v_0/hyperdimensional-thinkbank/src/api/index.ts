import authApi from './auth';
import knowledgeApi from './knowledge';
import userApi from './user';
// 后期可以增加 crossDimensional、replies、credibility 等模块

const api = {
  auth: authApi,
  knowledge: knowledgeApi,
  user: userApi,
};

export default api;
