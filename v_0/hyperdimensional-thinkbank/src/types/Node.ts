// Node.ts
import { SimulationNodeDatum } from 'd3-force';

export interface ForceNode extends SimulationNodeDatum {
  id: string; // 你自己的业务ID
  // 可选：添加更多自定义字段
  // ...
}
