// server/index.ts

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { SERVER_HOST, SERVER_PORT } from './config/server';
import { connectDatabase } from './db/mongo';
import apiRouter from './routes/api.routes';

const app = express();

// 全局中间件
app.use(cors());
app.use(express.json());

// 挂载 API 路由（如果使用 api.routes.ts）
app.use('/api', apiRouter);

// 根路由 - 健康检查
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Hyperdimensional ThinkBank server!');
});

// 全局错误处理中间件
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 启动函数
async function startServer() {
  try {
    // 连接数据库
    await connectDatabase();

    // 启动服务器
    app.listen(Number(SERVER_PORT), () => {
      console.log(`✅ Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
