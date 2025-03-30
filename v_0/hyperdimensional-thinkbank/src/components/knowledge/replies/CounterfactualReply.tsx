// src/components/knowledge/replies/CounterfactualReply.tsx
import React from 'react';
import { Reply } from '../../../types/knowledge';

interface CounterfactualReplyProps {
  reply: Reply;
}

const CounterfactualReply: React.FC<CounterfactualReplyProps> = ({ reply }) => {
  return (
    <div className="counterfactual-reply">
      <strong>{reply.author}（反事实挑战）</strong>
      <p>{reply.content}</p>
    </div>
  );
};

export default CounterfactualReply;
