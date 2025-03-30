import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>欢迎来到超维智库</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">登录</Link>
          </li>
          <li>
            <Link to="/register">注册</Link>
          </li>
          <li>
            <Link to="/knowledge-explorer">知识浏览</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
