// server/routes/knowledge.routes.ts
import { Router, Request, Response } from 'express';

const knowledgeRoutes = Router();

/**
 * 获取知识节点示例
 */
knowledgeRoutes.get('/node/:id', (req: Request, res: Response) => {
  const nodeId = req.params.id;
  // 调用 KnowledgeService 获取节点
  res.json({ message: `Fetch knowledge node with ID: ${nodeId}`, data: null });
});

/**
 * 创建知识节点示例
 */
knowledgeRoutes.post('/node', (req: Request, res: Response) => {
  // 从 req.body 获取新节点数据
  res.json({ message: 'Create a new knowledge node (not implemented yet).', data: req.body });
});

export default knowledgeRoutes;
