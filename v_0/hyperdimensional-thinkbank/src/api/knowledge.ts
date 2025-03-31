// src/api/knowledge.ts
import api from '../services/api';

import axios from 'axios';

export const fetchKnowledgeNodes = async (): Promise<any> => {
  const response = await api.get('/knowledge/nodes');
  return response.data;
};


export const createKnowledgeNode = async (nodeData: any): Promise<any> => {
  const response = await api.post('/knowledge/nodes', nodeData);
  return response.data;
};

export const getNodeById = async (id: string): Promise<any> => {
  const response = await api.get(`/knowledge/nodes/${id}`);
  return response.data;
};


export const deleteKnowledgeNode = async (id: string): Promise<any> => {
  const response = await api.delete(`/knowledge/nodes/${id}`);
  return response.data;
};

export default { fetchKnowledgeNodes, createKnowledgeNode, getNodeById };
