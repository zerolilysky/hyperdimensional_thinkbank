import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User as IUser } from '../types/user';
import authApi from '../api/auth';

interface AuthContextType {
  user: IUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  // 扩展接口：支持第三方登录、SSO、刷新 token 等
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = async (email: string, password: string) => {
    const data = await authApi.loginUser(email, password);
    setUser(data.user);
  };

  const logout = () => {
    // 清除本地存储中的 token 等
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 必须在 AuthProvider 内部使用');
  }
  return context;
};

export default AuthContext;
