import { Request, Response } from 'express';
import KnowledgeService from '../services/knowledge.service';
import { AuthRequest } from '../../src/types/requests';

class KnowledgeController {
  async createNode(req: AuthRequest, res: Response) {
    try {

    if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
        }
      const nodeData = req.body;
      // 假设 req.user 已经过认证中间件处理，并包含用户信息
      const userId = req.user.id;
      const node = await KnowledgeService.createNode(nodeData, userId);
      res.json(node);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getNodes(req: Request, res: Response) {
    try {
      const nodes = await KnowledgeService.getNodes();
      res.json({ nodes });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new KnowledgeController();
