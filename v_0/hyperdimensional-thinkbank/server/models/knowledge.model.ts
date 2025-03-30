import mongoose, { Schema, Document } from 'mongoose';

/**
 * 知识节点数据模型
 * 包含标题、内容、类型、创建者等字段。
 * 后续扩展：
 * - 添加 tags 字段，用于标记关键字
 * - 添加 citations 数组，引用其他节点或外部文献
 * - 添加 connections 字段，记录跨维度和同领域的关联信息
 * - 添加 credibilityScore，用于存储可信度评估结果
 */
export interface IKnowledgeNode extends Document {
  title: string;
  content: string;
  type: 'theory' | 'industry' | 'investment';
  createdBy: mongoose.Types.ObjectId;
  tags: string[];
  citations: mongoose.Types.ObjectId[];
  connections: {
    nodeId: mongoose.Types.ObjectId;
    strength: number;
    type: string;
  }[];
  credibilityScore: number;
  interactiveElements: any[];
  createdAt: Date;
  updatedAt: Date;
}

const KnowledgeNodeSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, enum: ['theory', 'industry', 'investment'], required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tags: { type: [String], default: [] },
    citations: [{ type: Schema.Types.ObjectId, ref: 'Citation' }],
    connections: [
      {
        nodeId: { type: Schema.Types.ObjectId, ref: 'KnowledgeNode' },
        strength: { type: Number, default: 1 },
        type: { type: String, default: 'related' },
      },
    ],
    credibilityScore: { type: Number, default: 0 },
    interactiveElements: { type: [Schema.Types.Mixed], default: [] },
  },
  { timestamps: true }
);

export const KnowledgeNode = mongoose.model<IKnowledgeNode>('KnowledgeNode', KnowledgeNodeSchema);
