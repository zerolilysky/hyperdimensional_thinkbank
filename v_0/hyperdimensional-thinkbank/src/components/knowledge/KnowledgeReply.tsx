// src/components/knowledge/KnowledgeReply.tsx
import React from 'react';
import { ReplyProps } from '../../types/knowledge';
import AcademicReply from './replies/AcademicReply';
import BusinessReply from './replies/BusinessReply';
import CounterfactualReply from './replies/CounterfactualReply';

/**
 * KnowledgeReply 组件
 * 渲染一个知识节点的回复列表。
 * 根据每个回复的 type 字段，分别渲染不同类型的回复组件：
 * - academic: 学术补充回复
 * - business: 商业推演回复
 * - counterfactual: 反事实挑战回复
 */
const KnowledgeReply: React.FC<ReplyProps> = ({ replyData }) => {
  if (!replyData || replyData.length === 0) {
    return <div className="no-replies">暂无回复</div>;
  }

  return (
    <div className="knowledge-replies">
      {replyData.map((reply, index) => {
        // 根据回复类型选择对应组件
        switch (reply.type) {
          case 'academic':
            return <AcademicReply key={reply.id || index} reply={reply} />;
          case 'business':
            return <BusinessReply key={reply.id || index} reply={reply} />;
          case 'counterfactual':
            return <CounterfactualReply key={reply.id || index} reply={reply} />;
          default:
            return (
              <div key={reply.id || index} className="unknown-reply">
                未知回复类型: {reply.type}
              </div>
            );
        }
      })}
    </div>
  );
};

export default KnowledgeReply;
