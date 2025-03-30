/**
 * 定义知识节点相关的类型
 */

export interface KnowledgeNode {
    _id: string;
    title: string;
    content: string;
    type: 'theory' | 'industry' | 'investment'; // 节点类型
    tags: string[];
    citations: string[]; // 相关引用ID数组
    connections: Connection[];
    credibilityScore: number;
    interactiveElements?: any[]; // 可交互元素，例如公式、图表等
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Connection {
    nodeId: string; // 连接的目标节点ID
    strength: number; // 连接强度
    type: string; // 连接类型（例如：引用、扩展、关联等）
  }
  
  // 组件属性类型：知识节点组件
  export interface KnowledgeNodeProps {
    nodeData: KnowledgeNode;
    onClick?: () => void; // 点击事件处理函数
  }
  
  /**
   * 回复相关类型
   */
  export type ReplyType = 'academic' | 'business' | 'counterfactual';
  
  export interface Reply {
    id: string;
    type: ReplyType;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // 组件属性类型：回复组件，接收多个回复
  export interface ReplyProps {
    replyData: Reply[];
  }
  
  /**
   * 跨维度链接组件属性类型
   */
  export interface CrossDimensionalLinkProps {
    topic: string;
  }
  