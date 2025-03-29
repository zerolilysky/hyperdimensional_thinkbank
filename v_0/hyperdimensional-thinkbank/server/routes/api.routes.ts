// server/routes/api.routes.ts

import { Router } from 'express';
import authRoutes from './auth.routes';
import knowledgeRoutes from './knowledge.routes';
import userRoutes from './user.routes';

const apiRouter = Router();

// 将各功能路由挂载到不同子路径
apiRouter.use('/auth', authRoutes);
apiRouter.use('/knowledge', knowledgeRoutes);
apiRouter.use('/user', userRoutes);

// 也可添加更多模块路由
// apiRouter.use('/collaboration', collaborationRoutes);

export default apiRouter;
