import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';  // 导入 AppRouter
import './styles/global.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('未找到 id="root" 的挂载容器，请检查 index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </React.StrictMode>
);