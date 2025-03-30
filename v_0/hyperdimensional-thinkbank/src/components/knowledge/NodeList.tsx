// src/components/knowledge/NodeList.tsx
import React, { useEffect, useState } from 'react';
import { fetchKnowledgeNodes } from '../../api/knowledge';
import { KnowledgeNode as KnowledgeNodeType } from '../../types/knowledge';
import KnowledgeNode from './KnowledgeNode';

// 定义组件接收的 props 接口
interface NodeListProps {
  nodes?: KnowledgeNodeType[]; // 可选：通过 props 传入节点列表
  onNodeClick?: (node: KnowledgeNodeType) => void; // 可选：节点点击回调
}

const NodeList: React.FC<NodeListProps> = ({ nodes: propNodes, onNodeClick }) => {
  // 如果 props 中提供了节点，则使用该数据，否则内部自行获取
  const [nodes, setNodes] = useState<KnowledgeNodeType[]>(propNodes || []);
  const [loading, setLoading] = useState<boolean>(!propNodes);

  useEffect(() => {
    if (!propNodes) {
      const fetchNodes = async () => {
        try {
          const data = await fetchKnowledgeNodes();
          setNodes(data);
        } catch (error) {
          console.error('获取节点失败', error);
        } finally {
          setLoading(false);
        }
      };

      fetchNodes();
    }
  }, [propNodes]);

  if (loading) return <div>加载节点中……</div>;

  return (
    <div className="node-list">
      {nodes.map((node) => (
        <KnowledgeNode
          key={node._id}
          nodeData={node}
          onClick={() => onNodeClick && onNodeClick(node)}
        />
      ))}
    </div>
  );
};

export default NodeList;
