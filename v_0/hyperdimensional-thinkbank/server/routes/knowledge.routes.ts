import { Router, RequestHandler } from 'express';
import { KnowledgeNodeModel } from '../models/KnowledgeNode';

const knowledgeRoutes = Router();

// 如果需要带 :id 参数，可以定义类型
type ParamId = { id: string };

// 1. 获取所有节点
const getAllNodes: RequestHandler = async (req, res, next) => {
  try {
    const nodes = await KnowledgeNodeModel.find().sort({ createdAt: -1 });
    res.json(nodes);
  } catch (error) {
    console.error('❌ 获取节点失败:', error);
    res.status(500).json({ error: '获取知识节点失败' });
  }
};

// 2. 创建新节点
const createNode: RequestHandler = async (req, res, next) => {
  try {
    const { title, content, tags } = req.body;
    const newNode = new KnowledgeNodeModel({ title, content, tags });
    await newNode.save();
    res.status(201).json(newNode);
  } catch (error) {
    console.error('❌ 创建节点失败:', error);
    res.status(500).json({ error: '创建失败' });
  }
};

// 3. 获取单个节点
const getNodeById: RequestHandler<ParamId> = async (req, res, next) => {
  try {
    const { id } = req.params;
    const node = await KnowledgeNodeModel.findById(id);
    if (!node) {
      res.status(404).json({ error: '节点不存在' });
      return; // ← 直接return，不要return res.json(...)
    }
    res.json(node);
  } catch (error) {
    console.error('❌ 获取单个节点失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
};

// 4. 删除节点
const deleteNodeById: RequestHandler<ParamId> = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await KnowledgeNodeModel.findByIdAndDelete(id);
    if (!result) {
      res.status(404).json({ error: '节点不存在' });
      return;
    }
    res.json({ message: '节点已删除' });
  } catch (error) {
    console.error('❌ 删除节点失败:', error);
    res.status(500).json({ error: '服务器错误' });
  }
};

knowledgeRoutes.get('/nodes', getAllNodes);
knowledgeRoutes.post('/nodes', createNode);
knowledgeRoutes.get('/nodes/:id', getNodeById);
knowledgeRoutes.delete('/nodes/:id', deleteNodeById);

export default knowledgeRoutes;
