// src/types/auth.ts

/**
 * 定义认证相关的类型
 */

export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface RegistrationData {
    username: string;
    email: string;
    password: string;
    userType: 'academic' | 'industry' | 'investor';
  }
  
  export interface VerificationProps {
    userType: 'academic' | 'industry' | 'investor';
  }
  