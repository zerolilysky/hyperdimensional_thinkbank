// Link.ts
import { SimulationLinkDatum } from 'd3-force';
import { ForceNode } from './Node';

export interface ForceLink extends SimulationLinkDatum<ForceNode> {
  // D3 要求 source/target 是 Node 或可被转换成 Node 的值
  source: string | ForceNode;
  target: string | ForceNode;
  // 你也可以添加更多字段，比如 weight, label, etc.
}
