import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/knowledge-explorer');
    } catch (error) {
      setErrorMsg('登录失败，请检查邮箱和密码');
    }
  };

  return (
    
    <div className="login-wrapper">
      <h2 style={{
        textAlign: 'center',
        fontWeight: 300,
        letterSpacing: '3px',
        marginBottom: '30px',
        fontSize: '24px'
      }}>
        登录
      </h2>

      {errorMsg && <div style={{ color: 'salmon', textAlign: 'center', marginBottom: '1rem' }}>{errorMsg}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="User Name"
          required
          style={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={inputStyle}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
            />
            Remember me?
          </label>
          <a href="/forgot-password" style={{ color: '#fff', textDecoration: 'underline' }}>Forgot password?</a>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#fff',
            color: '#2b697f',
            fontWeight: 600,
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            letterSpacing: '2px'
          }}
        >
          SIGN IN
        </button>
      </form>
    </div>
  
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  marginBottom: '20px',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid #fff',
  color: '#fff',
  outline: 'none',
  fontSize: '0.95rem'
};

export default Login;
