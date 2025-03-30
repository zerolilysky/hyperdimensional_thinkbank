import React, { createContext, useContext, useState, ReactNode } from 'react';
import { KnowledgeNode as IKnowledgeNode} from '../types/knowledge';
import knowledgeApi from '../api/knowledge';

interface KnowledgeContextType {
  nodes: IKnowledgeNode[];
  fetchNodes: () => Promise<void>;
  // 扩展接口：添加节点更新、删除、过滤、排序接口
}

const KnowledgeContext = createContext<KnowledgeContextType | undefined>(undefined);

export const KnowledgeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [nodes, setNodes] = useState<IKnowledgeNode[]>([]);

  const fetchNodes = async () => {
    const data = await knowledgeApi.fetchKnowledgeNodes();
    setNodes(data.nodes);
  };

  return (
    <KnowledgeContext.Provider value={{ nodes, fetchNodes }}>
      {children}
    </KnowledgeContext.Provider>
  );
};

export const useKnowledge = () => {
  const context = useContext(KnowledgeContext);
  if (!context) {
    throw new Error('useKnowledge 必须在 KnowledgeProvider 内部使用');
  }
  return context;
};

export default KnowledgeContext;
