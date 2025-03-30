// src/components/knowledge/KnowledgeNode.tsx
import React from 'react';
import { KnowledgeNodeProps } from '../../types/knowledge';
//import './KnowledgeNode.css'; // 如有需要，可自定义样式

const KnowledgeNode: React.FC<KnowledgeNodeProps> = ({ nodeData, onClick }) => {
  return (
    <div className="knowledge-node" onClick={onClick}>
      <h2>{nodeData.title}</h2>
      <p>{nodeData.content}</p>
      <div className="tags">
        {nodeData.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeNode;
