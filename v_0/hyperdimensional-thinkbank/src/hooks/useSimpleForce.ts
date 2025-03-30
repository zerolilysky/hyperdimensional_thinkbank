// src/hooks/useSimpleForce.ts
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// (可选) 如果你有明确的节点和连接类型，可以在此处定义

import { ForceNode } from '../types/Node';  // 路径示例
import { ForceLink } from '../types/Link';

interface UseSimpleForceProps {
  nodes: ForceNode[];
  links: ForceLink[];
  width: number;
  height: number;
}

export const useSimpleForce = (
  nodes: ForceNode[],
  links: ForceLink[],
  width: number,
  height: number
) => {
  // useRef 需要一个初始值（null）并指定类型为可空
  const simulationRef = useRef<d3.Simulation<ForceNode, ForceLink> | null>(null);

  useEffect(() => {
    // 创建力导向模拟器
    const simulation = d3
      .forceSimulation<ForceNode>(nodes)
      .force(
        'link',
        d3
          .forceLink<ForceNode, ForceLink>(links)
          .id((d) => d.id)// 告诉 D3 如何根据 id 找到对应的 Node
          // 如果需要可以设置 .distance(...)、.strength(...) 等
      )
      .force('charge', d3.forceManyBody<ForceNode>()) // 调整斥力大小
      .force('center', d3.forceCenter(width / 2, height / 2)); // 居中

    // 监听 tick 事件，如果需要在每次迭代时更新节点位置
    simulation.on('tick', () => {
      // 在这里更新节点 positions, x, y 等
      // e.g. console.log('tick', nodes);
    });

    // 将 simulation 存入 ref，方便在其他地方（如果需要）访问
    simulationRef.current = simulation;

    // 清理函数：当组件卸载或依赖更新时停止 simulation
    return () => {
      simulation.stop();
    };
  }, [nodes, links, width, height]);

  return simulationRef;
};
