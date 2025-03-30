import React, { useEffect } from 'react';
import { useKnowledge } from '../hooks/useKnowledge';
import NodeList from '../components/knowledge/NodeList';

const KnowledgeExplorer: React.FC = () => {
  const { nodes, fetchNodes } = useKnowledge();

  useEffect(() => {
    fetchNodes();
  }, [fetchNodes]);

  return (
    <div className="knowledge-explorer">
      {/* 这里将 nodes 通过 props 传给 NodeList */}
      <NodeList nodes={nodes} />
    </div>
  );
};

export default KnowledgeExplorer;
