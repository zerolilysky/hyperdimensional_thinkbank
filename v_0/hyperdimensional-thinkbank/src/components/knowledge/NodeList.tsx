// src/components/knowledge/NodeList.tsx
import React from 'react';
import { KnowledgeNode as KnowledgeNodeType } from '../../types/knowledge';
import KnowledgeNode from './KnowledgeNode';

interface NodeListProps {
  nodes: KnowledgeNodeType[]; // ✅ 不再可选
  onNodeClick?: (node: KnowledgeNodeType) => void;
}

const NodeList: React.FC<NodeListProps> = ({ nodes, onNodeClick }) => {
  console.log('📦 当前接收到的节点列表:', nodes);

  return (
    <div className="node-list">
      {nodes.length === 0 ? (
        <p>暂无节点</p>
      ) : (
        nodes.map((node) => (
          <KnowledgeNode
            key={node._id}
            nodeData={node}
            onClick={() => onNodeClick?.(node)}
          />
        ))
      )}
    </div>
  );
};

export default NodeList;
