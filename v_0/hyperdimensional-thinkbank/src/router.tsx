import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import KnowledgeExplorer from './pages/KnowledgeExplorer';
import NodeDetail from './pages/NodeDetail';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/knowledge-explorer" element={<KnowledgeExplorer />} />
        <Route path="/node/:id" element={<NodeDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;