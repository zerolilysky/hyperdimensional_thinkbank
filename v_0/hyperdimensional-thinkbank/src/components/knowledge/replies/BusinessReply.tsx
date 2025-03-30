// src/components/knowledge/replies/BusinessReply.tsx
import React from 'react';
import { Reply } from '../../../types/knowledge';

interface BusinessReplyProps {
  reply: Reply;
}

const BusinessReply: React.FC<BusinessReplyProps> = ({ reply }) => {
  return (
    <div className="business-reply">
      <strong>{reply.author}（商业推演）</strong>
      <p>{reply.content}</p>
    </div>
  );
};

export default BusinessReply;
