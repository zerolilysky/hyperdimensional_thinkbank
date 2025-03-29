import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // 引入全局样式

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('未找到 id="root" 的挂载容器，请检查 index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
