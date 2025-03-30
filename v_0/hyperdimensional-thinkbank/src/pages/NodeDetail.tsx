import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useKnowledge } from '../hooks/useKnowledge';
import KnowledgeNode from '../components/knowledge/KnowledgeNode';
import KnowledgeReply from '../components/knowledge/KnowledgeReply';

const NodeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { nodes, fetchNodes } = useKnowledge();
  const [node, setNode] = useState<any>(null);

  useEffect(() => {
    const loadNode = async () => {
      await fetchNodes();
      const found = nodes.find(n => n._id === id);
      setNode(found);
    };
    loadNode();
  }, [id, fetchNodes, nodes]);

  if (!node) return <div>加载中...</div>;

  return (
    <div className="node-detail">
      <KnowledgeNode nodeData={node} />
      <KnowledgeReply replyData={node.replies} />
    </div>
  );
};

export default NodeDetail;
