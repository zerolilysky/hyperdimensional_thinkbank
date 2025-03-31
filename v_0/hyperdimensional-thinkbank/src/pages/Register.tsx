import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Register: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('academic');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(username, email, password, userType);
      navigate('/knowledge-explorer');
    } catch (error) {
      setErrorMsg('注册失败，请检查信息');
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
          注册
        </h2>

        {errorMsg && <div style={{ color: 'salmon', textAlign: 'center', marginBottom: '1rem' }}>{errorMsg}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="用户名"
            required
            style={inputStyle}
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="邮箱"
            required
            style={inputStyle}
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="密码"
            required
            style={inputStyle}
          />
          <select
            value={userType}
            onChange={e => setUserType(e.target.value)}
            required
            style={{
              ...inputStyle,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderBottom: '1px solid #fff'
            }}
          >
            <option value="academic">学者</option>
            <option value="industry">产业</option>
            <option value="investor">投资人</option>
          </select>
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
              letterSpacing: '2px',
              marginTop: '20px'
            }}
          >
            注册
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

export default Register;
