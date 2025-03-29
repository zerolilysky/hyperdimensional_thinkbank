const fs = require('fs');
const path = require('path');

const structure = [
  'public/assets/icons/ui/',
  'public/assets/images/backgrounds/',
  'public/assets/images/placeholders/',
  'public/assets/fonts/',
  'src/api/',
  'src/components/common/',
  'src/components/knowledge/',
  'src/components/visualization/',
  'src/components/authentication/',
  'src/contexts/',
  'src/hooks/',
  'src/layouts/',
  'src/pages/',
  'src/services/',
  'src/styles/',
  'src/types/',
  'src/utils/',
  'server/controllers/',
  'server/models/',
  'server/services/',
  'server/routes/',
  'server/utils/',
  'server/middleware/',
  'server/ai/',
  'server/config/',
  'server/db/'
];

const files = [
  'public/index.html',
  'public/assets/icons/academic.svg',
  'public/assets/icons/industry.svg',
  'public/assets/icons/investment.svg',
  'src/api/index.ts',
  'src/api/auth.ts',
  'src/api/knowledge.ts',
  'src/api/user.ts',
  'src/components/common/Button.tsx',
  'src/components/common/Input.tsx',
  'src/components/common/Card.tsx',
  'src/components/common/Modal.tsx',
  'src/components/common/Loading.tsx',
  'src/components/common/ErrorBoundary.tsx',
  'src/components/knowledge/KnowledgeNode.tsx',
  'src/components/knowledge/NodeCreator.tsx',
  'src/components/knowledge/NodeList.tsx',
  'src/components/knowledge/NodeViewer.tsx',
  'src/components/visualization/SimpleGalaxy.tsx',
  'src/components/visualization/NodeConnection.tsx',
  'src/components/authentication/LoginForm.tsx',
  'src/components/authentication/RegisterForm.tsx',
  'src/components/authentication/UserTypeSelector.tsx',
  'src/contexts/AuthContext.tsx',
  'src/contexts/KnowledgeContext.tsx',
  'src/hooks/useAuth.ts',
  'src/hooks/useKnowledge.ts',
  'src/hooks/useSimpleForce.ts',
  'src/layouts/MainLayout.tsx',
  'src/layouts/AuthLayout.tsx',
  'src/pages/Home.tsx',
  'src/pages/Login.tsx',
  'src/pages/Register.tsx',
  'src/pages/KnowledgeExplorer.tsx',
  'src/pages/NodeDetail.tsx',
  'src/services/api.ts',
  'src/services/auth.ts',
  'src/services/storage.ts',
  'src/styles/global.css',
  'src/styles/variables.css',
  'src/types/auth.ts',
  'src/types/knowledge.ts',
  'src/types/user.ts',
  'src/types/common.ts',
  'src/utils/formatters.ts',
  'src/utils/validators.ts',
  'src/utils/helpers.ts',
  'src/App.tsx',
  'src/index.tsx',
  'src/router.tsx',
  'server/controllers/auth.controller.ts',
  'server/controllers/user.controller.ts',
  'server/controllers/knowledge.controller.ts',
  'server/models/user.model.ts',
  'server/models/knowledge.model.ts',
  'server/services/auth.service.ts',
  'server/services/user.service.ts',
  'server/services/knowledge.service.ts',
  'server/routes/auth.routes.ts',
  'server/routes/user.routes.ts',
  'server/routes/knowledge.routes.ts',
  'server/utils/jwt.ts',
  'server/utils/validation.ts',
  'server/utils/errorHandler.ts',
  'server/middleware/auth.middleware.ts',
  'server/middleware/validation.middleware.ts',
  'server/ai/openai.ts',
  'server/ai/basic-scholar.ts',
  'server/config/database.ts',
  'server/config/server.ts',
  'server/config/auth.ts',
  'server/db/mongo.ts',
  'server/index.ts',
  'package.json',
  'tsconfig.json',
  '.env',
  'README.md'
];

function createStructure() {
  structure.forEach(dir => {
    fs.mkdirSync(path.join(__dirname, 'hyperdimensional-thinkbank', dir), { recursive: true });
  });

  files.forEach(file => {
    const filePath = path.join(__dirname, 'hyperdimensional-thinkbank', file);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, '');
  });

  console.log('✅ 项目结构创建完成！');
}

createStructure();
