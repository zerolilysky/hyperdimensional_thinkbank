// src/components/knowledge/replies/AcademicReply.tsx
import React from 'react';
import { Reply } from '../../../types/knowledge';

interface AcademicReplyProps {
  reply: Reply;
}

const AcademicReply: React.FC<AcademicReplyProps> = ({ reply }) => {
  return (
    <div className="academic-reply">
      <strong>{reply.author}（学术补充）</strong>
      <p>{reply.content}</p>
    </div>
  );
};

export default AcademicReply;
