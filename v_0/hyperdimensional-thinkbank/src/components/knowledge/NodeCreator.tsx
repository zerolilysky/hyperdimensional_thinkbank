import React, { useState } from 'react';
import { createKnowledgeNode } from '../../api/knowledge';
import { KnowledgeNode } from '../../types/knowledge';

type NodeCreatorProps = {
  onCreated?: () => void | Promise<void>; // ✅ 允许可选回调
};

const NodeCreator: React.FC<NodeCreatorProps> = ({ onCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tagList = tags.split(',').map(tag => tag.trim());
    try {
      const newNode: KnowledgeNode = await createKnowledgeNode({ title, content, tags: tagList });
      setMessage('✅ 节点创建成功！');
      setTitle('');
      setContent('');
      setTags('');

      if (onCreated) {
        await onCreated(); // ✅ 通知父组件刷新列表
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ 创建节点时发生错误。');
    }
  };

  return (
    <div className="node-creator-wrapper">
      <form onSubmit={handleSubmit} className="node-creator">
        <h3>创建新知识节点</h3>
  
        <div>
          <label>标题:</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label>内容:</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
        </div>
  
        <div>
          <label>标签（用逗号分隔）:</label>
          <input
            type="text"
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
        </div>
  
        <button type="submit">创建节点</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}  

export default NodeCreator;
