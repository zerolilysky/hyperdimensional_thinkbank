# 超维智库(Hyperdimensional ThinkBank)分阶段项目结构

## 阶段一：基础平台（1-3个月）

在这一阶段，我们将构建平台的基础架构，实现MVP(最小可行产品)，支持基本的知识节点创建和浏览功能。

```
hyperdimensional-thinkbank/
├── public/                      # 静态资源
│   ├── assets/                  
│   │   ├── icons/               # 基础图标集
│   │   │   ├── academic.svg     # 学术相关图标
│   │   │   ├── industry.svg     # 产业相关图标
│   │   │   ├── investment.svg   # 投资相关图标
│   │   │   └── ui/              # UI界面图标
│   │   ├── images/              # 基础图片资源
│   │   │   ├── backgrounds/     # 背景图片
│   │   │   └── placeholders/    # 占位图片
│   │   └── fonts/               # 字体资源
│   └── index.html               # 入口HTML文件
├── src/                         # 前端源代码
│   ├── api/                     # API接口
│   │   ├── index.ts             # API入口点
│   │   ├── auth.ts              # 认证相关API
│   │   ├── knowledge.ts         # 知识节点相关API
│   │   └── user.ts              # 用户相关API
│   ├── components/              # 组件
│   │   ├── common/              # 通用组件
│   │   │   ├── Button.tsx       # 按钮组件
│   │   │   ├── Input.tsx        # 输入框组件
│   │   │   ├── Card.tsx         # 卡片组件
│   │   │   ├── Modal.tsx        # 模态框组件
│   │   │   ├── Loading.tsx      # 加载状态组件
│   │   │   └── ErrorBoundary.tsx # 错误边界组件
│   │   ├── knowledge/           # 知识相关组件
│   │   │   ├── KnowledgeNode.tsx # 基础知识节点组件
│   │   │   ├── NodeCreator.tsx  # 节点创建组件
│   │   │   ├── NodeList.tsx     # 节点列表组件
│   │   │   └── NodeViewer.tsx   # 节点查看组件
│   │   ├── visualization/       # 可视化组件
│   │   │   ├── SimpleGalaxy.tsx # 简化版知识星系
│   │   │   └── NodeConnection.tsx # 节点连接组件
│   │   └── authentication/      # 认证相关组件
│   │       ├── LoginForm.tsx    # 登录表单
│   │       ├── RegisterForm.tsx # 注册表单
│   │       └── UserTypeSelector.tsx # 用户类型选择器
│   ├── contexts/                # React上下文
│   │   ├── AuthContext.tsx      # 认证上下文
│   │   └── KnowledgeContext.tsx # 知识上下文
│   ├── hooks/                   # 自定义Hooks
│   │   ├── useAuth.ts           # 认证相关Hook
│   │   ├── useKnowledge.ts      # 知识相关Hook
│   │   └── useSimpleForce.ts    # 简化力导向布局Hook
│   ├── layouts/                 # 布局组件
│   │   ├── MainLayout.tsx       # 主布局
│   │   └── AuthLayout.tsx       # 认证页面布局
│   ├── pages/                   # 页面组件
│   │   ├── Home.tsx             # 首页
│   │   ├── Login.tsx            # 登录页
│   │   ├── Register.tsx         # 注册页
│   │   ├── KnowledgeExplorer.tsx # 知识浏览页
│   │   └── NodeDetail.tsx       # 节点详情页
│   ├── services/                # 服务层
│   │   ├── api.ts               # API服务
│   │   ├── auth.ts              # 认证服务
│   │   └── storage.ts           # 本地存储服务
│   ├── styles/                  # 样式文件
│   │   ├── global.css           # 全局样式
│   │   └── variables.css        # CSS变量
│   ├── types/                   # TypeScript类型定义
│   │   ├── auth.ts              # 认证相关类型
│   │   ├── knowledge.ts         # 知识相关类型
│   │   ├── user.ts              # 用户相关类型
│   │   └── common.ts            # 通用类型
│   ├── utils/                   # 工具函数
│   │   ├── formatters.ts        # 格式化工具
│   │   ├── validators.ts        # 验证工具
│   │   └── helpers.ts           # 辅助函数
│   ├── App.tsx                  # 应用主组件
│   ├── index.tsx                # 入口文件
│   └── router.tsx               # 路由配置
├── server/                      # 后端服务
│   ├── controllers/             # 控制器
│   │   ├── auth.controller.ts   # 认证控制器
│   │   ├── user.controller.ts   # 用户控制器
│   │   └── knowledge.controller.ts # 知识控制器
│   ├── models/                  # 数据模型
│   │   ├── user.model.ts        # 用户模型
│   │   └── knowledge.model.ts   # 知识节点模型
│   ├── services/                # 服务
│   │   ├── auth.service.ts      # 认证服务
│   │   ├── user.service.ts      # 用户服务
│   │   └── knowledge.service.ts # 知识服务
│   ├── routes/                  # 路由
│   │   ├── auth.routes.ts       # 认证路由
│   │   ├── user.routes.ts       # 用户路由
│   │   └── knowledge.routes.ts  # 知识路由
│   ├── utils/                   # 工具函数
│   │   ├── jwt.ts               # JWT工具
│   │   ├── validation.ts        # 验证工具
│   │   └── errorHandler.ts      # 错误处理
│   ├── middleware/              # 中间件
│   │   ├── auth.middleware.ts   # 认证中间件
│   │   └── validation.middleware.ts # 验证中间件
│   ├── ai/                      # AI功能模块(基础版)
│   │   ├── openai.ts            # OpenAI接口
│   │   └── basic-scholar.ts     # 基础AI学术精灵
│   ├── config/                  # 配置文件
│   │   ├── database.ts          # 数据库配置
│   │   ├── server.ts            # 服务器配置
│   │   └── auth.ts              # 认证配置
│   ├── db/                      # 数据库连接
│   │   └── mongo.ts             # MongoDB连接
│   └── index.ts                 # 服务入口
├── package.json                 # 项目依赖配置
├── tsconfig.json                # TypeScript配置
├── .env                         # 环境变量
└── README.md                    # 项目说明
```

### 阶段一关键文件详解

#### 前端核心文件

1. **src/components/knowledge/KnowledgeNode.tsx**
   ```typescript
   /**
    * 知识节点组件
    * 负责展示单个知识节点的内容，根据节点类型(学术/产业/投资)渲染不同的UI元素
    * 在阶段一中，只支持基础的文本和链接内容
    */
   ```

2. **src/components/visualization/SimpleGalaxy.tsx**
   ```typescript
   /**
    * 简化版知识星系组件
    * 使用D3.js实现基础的力导向图，展示知识节点间的连接
    * 支持节点悬停和点击事件，但不包含高级交互和3D效果
    */
   ```

3. **src/hooks/useSimpleForce.ts**
   ```typescript
   /**
    * 简化版力导向布局Hook
    * 封装D3力导向模拟的基础功能，用于SimpleGalaxy组件
    * 提供节点位置计算和布局更新方法
    */
   ```

#### 后端核心文件

1. **server/models/knowledge.model.ts**
   ```typescript
   /**
    * 知识节点数据模型
    * 定义知识节点的基础结构，包括标题、内容、类型、创建者等字段
    * 使用Mongoose Schema实现与MongoDB的映射
    */
   ```

2. **server/services/knowledge.service.ts**
   ```typescript
   /**
    * 知识服务
    * 提供知识节点的CRUD操作和基础查询功能
    * 阶段一仅支持基础的节点创建、读取、更新和删除
    */
   ```

3. **server/ai/basic-scholar.ts**
   ```typescript
   /**
    * 基础AI学术精灵
    * 封装OpenAI API调用，提供简单的内容生成和辅助功能
    * 支持基础的学术内容格式化和引用生成
    */
   ```

## 阶段二：核心功能增强（3-6个月）

在这一阶段，我们将增强平台的核心功能，实现知识嫁接、跨维度链接等关键特性。

```
hyperdimensional-thinkbank/
├── public/                      # 静态资源(扩展)
│   ├── assets/                  
│   │   ├── icons/               # 扩展图标集
│   │   │   ├── badges/          # 徽章图标
│   │   │   └── dimensions/      # 维度相关图标
│   │   ├── images/              # 扩充图片资源
│   │   └── animations/          # 简单动画资源
│   └── index.html               # 入口HTML文件
├── src/                         # 前端源代码(扩展)
│   ├── api/                     # API接口(扩展)
│   │   ├── index.ts             # API入口点
│   │   ├── crossDimensional.ts  # 跨维度链接API
│   │   ├── replies.ts           # 回复相关API
│   │   └── credibility.ts       # 可信度相关API
│   ├── components/              # 组件(扩展)
│   │   ├── common/              # 通用组件
│   │   ├── knowledge/           # 知识相关组件(扩展)
│   │   │   ├── replies/         # 回复相关组件
│   │   │   │   ├── AcademicReply.tsx # 学术补充回复
│   │   │   │   ├── BusinessReply.tsx # 商业推演回复
│   │   │   │   └── CounterfactualReply.tsx # 反事实挑战回复
│   │   │   ├── CrossDimensionalLink.tsx # 跨维度链接组件
│   │   │   └── ResonanceIndicator.tsx # 知识共振指示器
│   │   ├── visualization/       # 可视化组件(扩展)
│   │   │   ├── EnhancedGalaxy.tsx # 增强版知识星系
│   │   │   ├── BusinessCanvas.tsx # 商业模式画布
│   │   │   └── CredibilityMeter.tsx # 可信度计量表
│   │   ├── authentication/      # 认证相关组件(扩展)
│   │   │   ├── AcademicVerifier.tsx # 学术身份验证器
│   │   │   ├── IndustryVerifier.tsx # 产业身份验证器
│   │   │   └── InvestorVerifier.tsx # 投资人身份验证器
│   │   └── collaboration/       # 协作功能组件
│   │       └── RealtimeEditor.tsx # 实时协作编辑器
│   ├── contexts/                # React上下文(扩展)
│   │   ├── CrossDimensionalContext.tsx # 跨维度上下文
│   │   ├── CredibilityContext.tsx # 可信度上下文
│   │   └── CollaborationContext.tsx # 协作上下文
│   ├── hooks/                   # 自定义Hooks(扩展)
│   │   ├── useCrossDimensional.ts # 跨维度链接Hook
│   │   ├── useCredibility.ts    # 可信度Hook
│   │   ├── useRealtime.ts       # 实时协作Hook
│   │   └── useEnhancedForce.ts  # 增强力导向布局Hook
│   ├── pages/                   # 页面组件(扩展)
│   │   ├── CrossDimensional.tsx # 跨维度浏览页
│   │   ├── CredibilityDashboard.tsx # 可信度仪表盘页
│   │   └── VerificationPortal.tsx # 身份验证门户
│   ├── services/                # 服务层(扩展)
│   │   ├── credibility.ts       # 可信度服务
│   │   ├── crossDimensional.ts  # 跨维度服务
│   │   └── realtime.ts          # 实时协作服务
│   ├── types/                   # TypeScript类型定义(扩展)
│   │   ├── credibility.ts       # 可信度相关类型
│   │   ├── crossDimensional.ts  # 跨维度相关类型
│   │   └── collaboration.ts     # 协作相关类型
│   └── utils/                   # 工具函数(扩展)
│       ├── citations.ts         # 引用工具
│       └── dimensions.ts        # 维度转换工具
├── server/                      # 后端服务(扩展)
│   ├── controllers/             # 控制器(扩展)
│   │   ├── reply.controller.ts  # 回复控制器
│   │   ├── credibility.controller.ts # 可信度控制器
│   │   └── crossDimensional.controller.ts # 跨维度控制器
│   ├── models/                  # 数据模型(扩展)
│   │   ├── reply.model.ts       # 回复模型
│   │   ├── dimension.model.ts   # 维度模型
│   │   └── credibility.model.ts # 可信度模型
│   ├── services/                # 服务(扩展)
│   │   ├── reply.service.ts     # 回复服务
│   │   ├── credibility.service.ts # 可信度服务
│   │   └── crossDimensional.service.ts # 跨维度服务
│   ├── routes/                  # 路由(扩展)
│   │   ├── reply.routes.ts      # 回复路由
│   │   ├── credibility.routes.ts # 可信度路由
│   │   └── crossDimensional.routes.ts # 跨维度路由
│   ├── websockets/              # WebSocket服务
│   │   └── collaboration.ws.ts  # 协作WebSocket处理
│   ├── ai/                      # AI功能模块(扩展)
│   │   ├── scholar-sprite/      # AI学术精灵(增强)
│   │   │   ├── index.ts         # 学术精灵入口
│   │   │   ├── literature.ts    # 文献处理模块
│   │   │   └── translation.ts   # 术语翻译模块
│   │   └── credibility-analyzer.ts # 可信度分析器
│   ├── db/                      # 数据库连接(扩展)
│   │   └── redis.ts             # Redis连接(用于实时功能)
│   └── external/                # 外部服务集成
│       ├── orcid.ts             # ORCID API集成
│       └── academic-databases.ts # 学术数据库集成
├── docker-compose.yml           # Docker配置(添加Redis)
└── socket-server.ts             # WebSocket服务器
```

### 阶段二关键文件详解

#### 前端核心文件

1. **src/components/knowledge/replies/AcademicReply.tsx**
   ```typescript
   /**
    * 学术补充回复组件
    * 显示带有自动生成文献综述的学术回复
    * 支持引用折叠/展开和引用来源浮窗
    */
   ```

2. **src/components/knowledge/CrossDimensionalLink.tsx**
   ```typescript
   /**
    * 跨维度链接组件
    * 当讨论特定话题时自动浮现相关学术、产业和资本信息
    * 支持点击导航至相关知识节点
    */
   ```

3. **src/components/visualization/EnhancedGalaxy.tsx**
   ```typescript
   /**
    * 增强版知识星系组件
    * 基于SimpleGalaxy的升级版，支持维度过滤和节点分组
    * 添加动态节点缩放和高亮相关节点功能
    */
   ```

#### 后端核心文件

1. **server/ai/scholar-sprite/translation.ts**
   ```typescript
   /**
    * 术语翻译模块
    * 负责将学术术语转换为产业术语或投资术语，反之亦然
    * 使用特定领域的术语映射和语言模型实现跨领域翻译
    */
   ```

2. **server/ai/credibility-analyzer.ts**
   ```typescript
   /**
    * 可信度分析器
    * 分析知识节点和用户的可信度指标
    * 结合引用数据、预测准确性和外部验证计算可信度分数
    */
   ```

3. **server/websockets/collaboration.ws.ts**
   ```typescript
   /**
    * 协作WebSocket处理器
    * 管理实时协作会话，同步用户编辑
    * 处理用户在线状态和编辑权限管理
    */
   ```

## 阶段三：高级功能（6-9个月）

在这一阶段，我们将实现平台的高级功能，包括3D知识星系、知识风暴系统等特色功能。

```
hyperdimensional-thinkbank/
├── public/                      # 静态资源(扩展)
│   ├── assets/                  
│   │   ├── 3d-models/           # 3D模型资源
│   │   │   ├── nodes/           # 节点3D模型
│   │   │   └── particles/       # 粒子效果
│   │   ├── animations/          # 高级动画资源
│   │   └── shaders/             # WebGL着色器
│   └── index.html               # 入口HTML文件
├── src/                         # 前端源代码(扩展)
│   ├── api/                     # API接口(扩展)
│   │   ├── knowledgeStorm.ts    # 知识风暴API
│   │   ├── translator.ts        # 知识翻译器API
│   │   └── advanced-visualization.ts # 高级可视化API
│   ├── components/              # 组件(扩展)
│   │   ├── knowledge/           # 知识相关组件(扩展)
│   │   │   └── translators/     # 翻译器组件
│   │   │       ├── AcademicToCEO.tsx # 学术转CEO版翻译器
│   │   │       ├── AcademicToInvestor.tsx # 学术转投资人版翻译器
│   │   │       └── TranslatorPanel.tsx # 翻译器控制面板
│   │   ├── visualization/       # 可视化组件(扩展)
│   │   │   ├── galaxy3d/        # 3D知识星系组件
│   │   │   │   ├── Galaxy3D.tsx # 3D星系主组件
│   │   │   │   ├── Node3D.tsx   # 3D节点组件
│   │   │   │   ├── Link3D.tsx   # 3D连接组件
│   │   │   │   └── Controls3D.tsx # 3D控制器
│   │   │   ├── AdvancedCharts/  # 高级图表组件
│   │   │   │   ├── NetworkFlow.tsx # 网络流图
│   │   │   │   ├── HeatMap.tsx  # 热力图
│   │   │   │   └── TreeMap.tsx  # 树状图
│   │   │   └── FeynmanMode/     # 费曼图表风格组件
│   │   │       ├── FeynmanGalaxy.tsx # 费曼风格星系
│   │   │       ├── FeynmanNode.tsx # 费曼风格节点
│   │   │       └── FeynmanTheme.tsx # 费曼风格主题
│   │   └── collaboration/       # 协作功能组件(扩展)
│   │       ├── KnowledgeStorm/  # 知识风暴组件
│   │       │   ├── StormCanvas.tsx # 风暴画布
│   │       │   ├── AcademicCamp.tsx # 学者阵营面板
│   │       │   ├── IndustryCamp.tsx # 产业阵营面板
│   │       │   ├── InvestmentCamp.tsx # 投资阵营面板
│   │       │   └── ConsensusBuilder.tsx # 共识构建器
│   │       └── CognitiveTest/   # 认知测试组件
│   │           ├── TestRunner.tsx # 测试运行器
│   │           └── ResultAnalyzer.tsx # 结果分析器
│   ├── contexts/                # React上下文(扩展)
│   │   ├── KnowledgeStormContext.tsx # 知识风暴上下文
│   │   ├── TranslatorContext.tsx # 翻译器上下文
│   │   └── Galaxy3DContext.tsx  # 3D星系上下文
│   ├── hooks/                   # 自定义Hooks(扩展)
│   │   ├── useKnowledgeStorm.ts # 知识风暴Hook
│   │   ├── useTranslator.ts     # 翻译器Hook
│   │   ├── useGalaxy3D.ts       # 3D星系Hook
│   │   └── useThree.ts          # Three.js辅助Hook
│   ├── pages/                   # 页面组件(扩展)
│   │   ├── storm/               # 知识风暴相关页面
│   │   │   ├── StormLobby.tsx   # 风暴大厅
│   │   │   ├── ActiveStorm.tsx  # 活动风暴页面
│   │   │   └── StormArchive.tsx # 风暴归档页面
│   │   ├── Galaxy3D.tsx         # 3D知识星系页面
│   │   └── TranslatorWorkbench.tsx # 翻译器工作台
│   ├── three/                   # Three.js相关代码
│   │   ├── renderers/           # 渲染器
│   │   ├── materials/           # 材质
│   │   └── effects/             # 特效
│   └── webgl/                   # WebGL着色器代码
│       ├── shaders/             # 着色器
│       └── particles/           # 粒子系统
├── server/                      # 后端服务(扩展)
│   ├── controllers/             # 控制器(扩展)
│   │   ├── knowledgeStorm.controller.ts # 知识风暴控制器
│   │   ├── translator.controller.ts # 翻译器控制器
│   │   └── cognitiveTest.controller.ts # 认知测试控制器
│   ├── models/                  # 数据模型(扩展)
│   │   ├── storm.model.ts       # 风暴模型
│   │   ├── consensus.model.ts   # 共识模型
│   │   ├── translation.model.ts # 翻译记录模型
│   │   └── cognitiveTest.model.ts # 认知测试模型
│   ├── services/                # 服务(扩展)
│   │   ├── storm.service.ts     # 风暴服务
│   │   ├── consensus.service.ts # 共识服务
│   │   ├── translator.service.ts # 翻译器服务
│   │   └── cognitiveTest.service.ts # 认知测试服务
│   ├── ai/                      # AI功能模块(扩展)
│   │   ├── knowledge-bridge/    # 知识桥接模块
│   │   │   ├── index.ts         # 桥接模块入口
│   │   │   ├── connector.ts     # 知识连接器
│   │   │   └── proposal.ts      # 研究提案生成器
│   │   ├── consensus-builder/   # 共识构建模块
│   │   │   ├── index.ts         # 共识构建入口
│   │   │   ├── analyzer.ts      # 观点分析器
│   │   │   └── synthesizer.ts   # 观点综合器
│   │   └── advanced-translator/ # 高级翻译模块
│   │       ├── index.ts         # 高级翻译入口
│   │       ├── academic-ceo.ts  # 学术转CEO翻译器
│   │       └── academic-investor.ts # 学术转投资人翻译器
│   └── db/                      # 数据库连接(扩展)
│       └── neo4j.ts             # Neo4j连接(用于知识图谱)
├── ml-models/                   # 机器学习模型
│   ├── credibility/             # 可信度模型
│   └── cognitive-flex/          # 认知弹性模型
└── worker-threads/              # 工作线程
    ├── visualization-worker.ts  # 可视化计算工作线程
    └── ai-processing.ts         # AI处理工作线程
```

## 阶段四：优化与扩展（9-12个月）

在这一阶段，我们将对平台进行性能优化，实现移动端适配，开放API以及添加企业级功能。

```
hyperdimensional-thinkbank/
├── public/                      # 静态资源(优化)
│   ├── assets/                  
│   │   ├── optimized/           # 优化后的资源
│   │   │   ├── images/          # 优化图片
│   │   │   ├── models/          # 优化3D模型
│   │   │   └── sprites/         # 精灵图优化
│   │   └── pwa/                 # PWA相关资源
│   │       ├── icons/           # PWA图标
│   │       ├── splash/          # 启动画面
│   │       └── manifest.json    # PWA清单
│   └── index.html               # 优化的入口HTML
├── src/                         # 前端源代码(优化与扩展)
│   ├── api/                     # API接口(重构)
│   │   ├── client/              # 客户端API封装
│   │   │   ├── index.ts         # API客户端入口
│   │   │   └── endpoints/       # 端点定义
│   │   └── sdk/                 # 开放平台SDK
│   │       ├── index.ts         # SDK入口
│   │       ├── auth.ts          # 认证模块
│   │       └── knowledge.ts     # 知识访问模块
│   ├── components/              # 组件(优化与扩展)
│   │   ├── enterprise/          # 企业级功能组件
│   │   │   ├── TeamWorkspace.tsx # 团队工作区
│   │   │   ├── PermissionManager.tsx # 权限管理器
│   │   │   ├── AnalyticsPanel.tsx # 分析面板
│   │   │   └── SSO.tsx          # 单点登录组件
│   │   ├── mobile/              # 移动端组件
│   │   │   ├── MobileGalaxy.tsx # 移动端星系
│   │   │   ├── MobileNav.tsx    # 移动导航
│   │   │   └── TouchHandlers.tsx # 触摸处理器
│   │   └── optimization/        # 性能优化组件
│   │       ├── LazyNode.tsx     # 延迟加载节点
│   │       ├── VirtualizedList.tsx # 虚拟列表
│   │       └── OffscreenRenderer.tsx # 离屏渲染
│   ├── contexts/                # React上下文(扩展)
│   │   ├── EnterpriseContext.tsx # 企业功能上下文
│   │   └── OptimizationContext.tsx # 优化上下文
│   ├── hooks/                   # 自定义Hooks(优化)
│   │   ├── useVirtualized.ts    # 虚拟化列表Hook
│   │   ├── useLazyLoading.ts    # 延迟加载Hook
│   │   └── useOffscreenRendering.ts # 离屏渲染Hook
│   ├── pages/                   # 页面组件(扩展)
│   │   ├── enterprise/          # 企业相关页面
│   │   │   ├── Dashboard.tsx    # 企业仪表盘
│   │   │   ├── TeamManagement.tsx # 团队管理
│   │   │   └── Analytics.tsx    # 数据分析
│   │   ├── developer/           # 开发者相关页面
│   │   │   ├── ApiDocs.tsx      # API文档
│   │   │   ├── Console.tsx      # 开发者控制台
│   │   │   └── SDKDownload.tsx  # SDK下载页面
│   │   └── mobile/              # 移动端页面
│   │       ├── MobileHome.tsx   # 移动端首页
│   │       └── MobileReader.tsx # 移动端阅读器
│   ├── workers/                 # Web Workers
│   │   ├── computation.worker.ts # 计算Worker
│   │   ├── rendering.worker.ts  # 渲染Worker
│   │   └── dataProcessing.worker.ts # 数据处理Worker
│   ├── pwa/                     # PWA相关代码
│   │   ├── serviceWorker.ts     # 服务工作线程
│   │   └── offline.ts           # 离线功能
│   └── optimization/            # 优化相关代码
│       ├── caching.ts           # 缓存策略
│       ├── bundleSplitting.ts   # 代码分割配置
│       └── imageOptimization.ts # 图像优化
├── server/                      # 后端服务(优化与扩展)
│   ├── api/                     # API平台
│   │   ├── v1/                  # V1 API路由
│   │   │   ├── index.ts         # API入口
│   │   │   ├── auth.ts          # 认证API
│   │   │   └── knowledge.ts     # 知识API
│   │   ├── documentation/       # API文档
│   │   │   ├── swagger.ts       # Swagger配置
│   │   │   └── examples/        # API示例
│   │   └── rateLimit/           # 速率限制
│   │       ├── index.ts         # 限制配置
│   │       └── tiers.ts         # 服务层级
│   ├── enterprise/              # 企业级功能
│   │   ├── sso/                 # 单点登录
│   │   │   ├── index.ts         # SSO入口
│   │   │   ├── saml.ts          # SAML支持
│   │   │   └── oauth.ts         # OAuth支持
│   │   ├── analytics/           # 分析功能
│   │   │   ├── index.ts         # 分析入口
│   │   │   ├── reports.ts       # 报告生成
│   │   │   └── export.ts        # 数据导出
│   │   └── permissions/         # 高级权限
│   │       ├── index.ts         # 权限入口
│   │       ├── roles.ts         # 角色定义
│   │       └── acl.ts           # 访问控制列表
│   ├── optimization/            # 服务优化
│   │   ├── caching/             # 缓存层
│   │   │   ├── index.ts         # 缓存入口
│   │   │   ├── redis.ts         # Redis缓存
│   │   │   └── memcached.ts     # Memcached缓存
│   │   ├── database/            # 数据库优化
│   │   │   ├── index.ts         # 优化入口
│   │   │   ├── queries.ts       # 查询优化
│   │   │   └── sharding.ts      # 分片配置
│   │   └── scaling/             # 扩展性配置
│   │       ├── index.ts         # 扩展入口
│   │       ├── loadBalancing.ts # 负载均衡
│   │       └── microservices.ts # 微服务配置
│   ├── ai/                      # AI功能模块(优化)
│   │   ├── optimized-models/    # 优化AI模型
│   │   │   ├── index.ts         # 模型入口
│   │   │   ├── quantized.ts     # 量化模型
│   │   │   └── distilled.ts     # 蒸馏模型
│   │   └── inference/           # 推理优化
│   │       ├── index.ts         # 推理入口
│   │       ├── batching.ts      # 批处理
│   │       └── caching.ts       # 推理缓存
│   └── mobile/                  # 移动端支持
│       ├── index.ts             # 移动支持入口
│       ├── api.ts               # 移动API优化
│       └── push.ts              # 推送通知
├── deployment/                  # 部署配置
│   ├── kubernetes/              # Kubernetes配置
│   │   ├── frontend/            # 前端部署
│   │   ├── backend/             # 后端部署
│   │   ├── ai/                  # AI服务部署
│   │   └── databases/           # 数据库部署
│   ├── monitoring/              # 监控配置
│   │   ├── prometheus/          # Prometheus配置
│   │   └── grafana/             # Grafana仪表盘
│   └── ci-cd/                   # CI/CD配置
│       ├── github-actions/      # GitHub Actions工作流
│       └── jenkins/             # Jenkins流水线
└── docs/                        # 项目文档
    ├── api/                     # API文档
    ├── development/             # 开发指南
    ├── deployment/              # 部署指南
    └── architecture/            # 架构文档
```

### 阶段四关键文件详解

#### 前端核心文件

1. **src/components/visualization/galaxy3d/Galaxy3D.tsx**
   ```typescript
   /**
    * 3D知识星系主组件
    * 使用Three.js实现沉浸式3D知识网络可视化
    * 支持缩放、旋转、飞行浏览等交互方式
    * 实现知识领域的星系团、恒星和行星表示
    */
   ```

2. **src/components/collaboration/KnowledgeStorm/StormCanvas.tsx**
   ```typescript
   /**
    * 知识风暴画布组件
    * 提供结构化讨论的可视化环境
    * 支持三个阵营观点的记录、组织和碰撞
    * 实时显示讨论进度和共识形成过程
    */
   ```

3. **src/components/knowledge/translators/TranslatorPanel.tsx**
   ```typescript
   /**
    * 翻译器控制面板
    * 管理不同领域术语之间的转换
    * 支持源文本输入和目标受众选择
    * 显示翻译结果和解释
    */
   ```

#### 后端核心文件

1. **server/ai/consensus-builder/synthesizer.ts**
   ```typescript
   /**
    * 观点综合器
    * 分析并融合来自学术、产业和投资三个维度的观点
    * 生成平衡的三维共识报告
    * 识别冲突点和共识点
    */
   ```

2. **server/ai/knowledge-bridge/proposal.ts**
   ```typescript
   /**
    * 研究提案生成器
    * 分析两个不相关领域的知识点，识别潜在的交叉创新机会
    * 生成可行的跨学科研究提案
    * 包含预期结果、方法论和可能的应用场景
    */
   ```

3. **server/ai/advanced-translator/academic-investor.ts**
   ```typescript
   /**
    * 学术转投资人翻译器
    * 将学术论文和研究结果转换为投资人视角的分析
    * 生成市场规模、技术成熟度和投资风险评估
    * 添加TAM/SAM/SOM数据和退出案例参考
    */
   ```