import mongoose from 'mongoose';

const KnowledgeNodeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export const KnowledgeNodeModel = mongoose.model('KnowledgeNode', KnowledgeNodeSchema);
