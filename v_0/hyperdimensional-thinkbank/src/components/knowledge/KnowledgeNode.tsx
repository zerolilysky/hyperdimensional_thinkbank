import React from 'react';
import { Link } from 'react-router-dom';
import { KnowledgeNode as  KnowledgeNodeType } from '../../types/knowledge';

type Props = {
  nodeData: KnowledgeNodeType;
  onClick?: () => void;
};


const KnowledgeNode: React.FC<Props> = ({ nodeData, onClick }) => {
  return (
    <div className="circle-node" onClick={onClick}>
      <strong>{nodeData.title}</strong>
    </div>
  );
};


export default KnowledgeNode;
