// src/pages/KnowledgeExplorer.tsx

import React, { useEffect, useState } from 'react';
import { useKnowledge } from '../hooks/useKnowledge';
import NodeList from '../components/knowledge/NodeList';
import NodeCreator from '../components/knowledge/NodeCreator';
import NodeViewer from '../components/knowledge/NodeViewer';
import { KnowledgeNode } from '../types/knowledge';

const KnowledgeExplorer: React.FC = () => {
  const { nodes, fetchNodes } = useKnowledge();
  const [showCreator, setShowCreator] = useState(false);
  const [selectedNode, setSelectedNode] = useState<KnowledgeNode | null>(null); // ✅ 当前查看的节点

  useEffect(() => {
    fetchNodes();
  }, []);

  const handleCreated = async () => {
    await fetchNodes();
    setShowCreator(false);
  };

  return (
    <div className="knowledge-explorer">
      {/* 添加按钮 */}
      {!showCreator && (
        <button onClick={() => setShowCreator(true)}>➕ 添加新节点</button>
      )}

      {/* 创建表单 */}
      {showCreator && (
        <NodeCreator onCreated={handleCreated} />
      )}

      {/* 节点列表 */}
      <NodeList
        nodes={nodes}
        onNodeClick={(node) => setSelectedNode(node)} // ✅ 点击节点触发弹窗
      />

      {/* 节点详情弹出 */}
      {selectedNode && (
        <NodeViewer
          node={selectedNode}
          onClose={() => setSelectedNode(null)} // ✅ 关闭详情页
        />
      )}
    </div>
  );
};

export default KnowledgeExplorer;
