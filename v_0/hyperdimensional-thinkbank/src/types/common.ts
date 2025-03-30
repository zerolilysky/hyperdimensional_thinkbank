// src/types/common.ts

/**
 * 定义通用类型，例如页面组件的属性，以及部分可视化相关类型
 */
import React from 'react';

export interface PageProps {
  children?: React.ReactNode;
}

/* -------------------------------
   以下为可视化相关的类型
---------------------------------*/

// 用于展示知识星系图的数据和配置属性
export interface GalaxyProps {
  data: {
    nodes: any[];
    links: any[];
  };
  config?: {
    width?: number;
    height?: number;
    [key: string]: any;
  };
}

// 可交互公式组件属性类型
export interface FormulaProps {
  formula: string;
  proofs?: string[];
  variables?: { [key: string]: number };
}

// 商业模式画布组件属性类型
export interface CanvasProps {
  businessData: any; // 根据实际数据结构调整
}

// 置信区间可视化组件属性类型
export interface ConfidenceProps {
  data: number[];
  level: number;
}

// 可信度仪表盘页面属性类型
export interface DashboardProps {
  userId: string;
}
