import { KnowledgeNode, IKnowledgeNode } from '../models/knowledge.model';

class KnowledgeService {
  async createNode(nodeData: Partial<IKnowledgeNode>, userId: string): Promise<IKnowledgeNode> {
    const newNode = new KnowledgeNode({ ...nodeData, createdBy: userId });
    return newNode.save();
  }

  async getNodes(): Promise<IKnowledgeNode[]> {
    return KnowledgeNode.find().populate('createdBy');
  }

  // 后续扩展：
  // async updateNode(id: string, updateData: any): Promise<IKnowledgeNode> { ... }
  // async deleteNode(id: string): Promise<boolean> { ... }
  // async searchNodes(query: string, dimensions: string[]): Promise<IKnowledgeNode[]> { ... }
}

export default new KnowledgeService();
