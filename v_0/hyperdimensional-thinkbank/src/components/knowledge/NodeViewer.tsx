// src/components/knowledge/NodeViewer.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNodeById } from '../../api/knowledge'; // 请确保该函数在 api/knowledge.ts 中已定义
import { KnowledgeNode as KnowledgeNodeType } from '../../types/knowledge';
import KnowledgeNode from './KnowledgeNode';

const NodeViewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [node, setNode] = useState<KnowledgeNodeType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    
    const fetchNode = async () => {
      try {
        const data = await getNodeById(id);
        setNode(data);
      } catch (error) {
        console.error('获取节点详情失败', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNode();
  }, [id]);

  if (loading) return <div>加载节点详情中……</div>;
  if (!node) return <div>未找到该节点</div>;

  return (
    <div className="node-viewer">
      <KnowledgeNode nodeData={node} />
    </div>
  );
};

export default NodeViewer;
