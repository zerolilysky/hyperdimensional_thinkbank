// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { loginUser, logoutUser, getCurrentUser, register as registerApi } from '../api/auth';
import { User } from '../types/user';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const loggedInUser = await loginUser(email, password);
      setUser(loggedInUser);
      return loggedInUser;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //  register 函数
  // 注册：关键在于把这个函数也返回
  const register = async (
    username: string,
    email: string,
    password: string,
    userType: string
  ) => {
    setLoading(true);
    try {
      // 调用 API 中的 registerApi
      const newUser = await registerApi(username, email, password, userType);
      setUser(newUser);
      return newUser;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  
  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return { user, loading, login,register, logout };
  
};

export default useAuth;
