// src/hooks/useKnowledge.ts
import { useState, useEffect } from 'react';
import { fetchKnowledgeNodes as getNodes } from '../api/knowledge';
import { KnowledgeNode } from '../types/knowledge';

export const useKnowledge = () => {
  const [nodes, setNodes] = useState<KnowledgeNode[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNodes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getNodes();
      setNodes(data);
    } catch (err) {
      console.error('获取知识节点失败', err);
      setError('获取节点失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNodes();
  }, []);

  const addNode = (node: KnowledgeNode) => {
    setNodes(prev => [...prev, node]);
  };

  return { nodes, loading, error, fetchNodes, addNode };
};

export default useKnowledge;
