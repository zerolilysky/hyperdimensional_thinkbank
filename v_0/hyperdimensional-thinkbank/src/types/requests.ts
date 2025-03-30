// src/types/requests.ts
import { Request } from 'express';
import { User } from './user'; // 这里引入你的用户类型

export interface AuthRequest extends Request {
  user?: User;
}
