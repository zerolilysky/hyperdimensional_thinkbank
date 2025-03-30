import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/knowledge-explorer');
    } catch (error) {
      console.error('登录失败', error);
    }
  };

  return (
    <div className="login-page">
      <h1>登录</h1>
      <form onSubmit={handleSubmit}>
        <label>
          邮箱:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="请输入邮箱"
            required
          />
        </label>
        <label>
          密码:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="请输入密码"
            required
          />
        </label>
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default Login;
