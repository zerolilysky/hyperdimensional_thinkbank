import React from 'react';
import { KnowledgeNode } from '../../types/knowledge';
import { deleteKnowledgeNode } from '../../api/knowledge';

interface NodeViewerProps {
  node: KnowledgeNode;
  onClose: () => void;
}

const NodeViewer: React.FC<NodeViewerProps> = ({ node, onClose }) => {
  const handleDelete = async () => {
    if (confirm('确定要删除该节点吗？')) {
      try {
        await deleteKnowledgeNode(node._id);
        onClose(); // 关闭详情页
        window.location.reload(); // 可替换为 fetchNodes() 刷新
      } catch (err) {
        console.error('删除失败', err);
        alert('删除失败');
      }
    }
  };

  return (
    <div className="node-viewer-card">
      <div className="node-viewer-header">
        <h2>{node.title}</h2>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>

      <div className="node-viewer-content">
        <p>{node.content}</p>
        <p><strong>标签:</strong> {node.tags?.join(', ') || '无'}</p>
      </div>

      <button className="delete-btn" onClick={handleDelete}>🗑 删除节点</button>
    </div>
  );
};

export default NodeViewer;
