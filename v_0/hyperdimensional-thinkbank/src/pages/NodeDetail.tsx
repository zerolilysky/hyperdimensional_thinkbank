import React from 'react';
import { useParams } from 'react-router-dom';

const NodeDetail: React.FC = () => {
  const { id } = useParams();  // 通过路由参数获取节点ID

  return (
    <div>
      <h1>节点详情</h1>
      <p>正在查看节点 ID: {id}</p>
      {/* 在此处编写节点内容、回复、可视化等 */}
    </div>
  );
};

export default NodeDetail;
