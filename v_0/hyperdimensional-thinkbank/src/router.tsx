// src/router.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import KnowledgeExplorer from './pages/KnowledgeExplorer';
import NodeDetail from './pages/NodeDetail';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/knowledge-explorer" element={<KnowledgeExplorer />} />
        <Route path="/node/:id" element={<NodeDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
