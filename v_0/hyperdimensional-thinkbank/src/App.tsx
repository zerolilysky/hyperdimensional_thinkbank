import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* 头部区域 */}
      <header>
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img src="assets/icons/academic.svg" alt="超维智库 Logo" className="logo" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/login">登录</Link>
            <Link to="/register">注册</Link>
            <Link to="/knowledge-explorer">知识探索</Link>
          </div>
        </nav>
      </header>

      {/* 主体内容 */}
      <main>
        <Outlet />
      </main>

      {/* 底部区域 */}
      <footer>
        <p>&copy; 2025 超维智库. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;