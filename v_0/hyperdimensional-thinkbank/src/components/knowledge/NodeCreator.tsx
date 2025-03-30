import React, { useState } from 'react';
import { createKnowledgeNode } from '../../api/knowledge';
import { KnowledgeNode } from '../../types/knowledge';

const NodeCreator: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tagList = tags.split(',').map(tag => tag.trim());
    try {
      // 调用 API 创建节点（假设返回值符合 KnowledgeNode 类型）
      const newNode: KnowledgeNode = await createKnowledgeNode({ title, content, tags: tagList });
      setMessage('节点创建成功！');
      // 可选：重置表单
      setTitle('');
      setContent('');
      setTags('');
    } catch (error) {
      console.error(error);
      setMessage('创建节点时发生错误。');
    }
  };

  return (
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
  );
};

export default NodeCreator;
