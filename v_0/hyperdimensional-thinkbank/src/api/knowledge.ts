// src/api/knowledge.ts
import axios from 'axios';

const API_BASE = '/api/knowledge';

/**
 * 获取所有知识节点
 * 可支持分页、过滤、排序等扩展
 * @returns {Promise<any>} 返回节点数据
 */
export const fetchKnowledgeNodes = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE}/nodes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching knowledge nodes:', error);
    throw error;
  }
};

/**
 * 创建知识节点
 * 传入节点数据（后续可支持 AI 辅助功能，如自动引用、跨维度链接等）
 * @param {any} nodeData - 新节点数据
 * @returns {Promise<any>} 返回创建后的节点数据
 */
export const createKnowledgeNode = async (nodeData: any): Promise<any> => {
  try {
    const response = await axios.post(`${API_BASE}/nodes`, nodeData);
    return response.data;
  } catch (error) {
    console.error('Error creating knowledge node:', error);
    throw error;
  }
};

/**
 * 根据 ID 获取单个知识节点详情
 * @param {string} id - 知识节点的唯一标识
 * @returns {Promise<any>} 返回指定节点的详细数据
 */
export const getNodeById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE}/nodes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching node with id ${id}:`, error);
    throw error;
  }
};

export default { fetchKnowledgeNodes, createKnowledgeNode, getNodeById };
