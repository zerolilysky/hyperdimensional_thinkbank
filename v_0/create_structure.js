/*************************************************************
 * create_structure.js
 *
 * 1. 创建 hyperdimensional-thinkbank/ 目录及其子目录结构
 * 2. 创建指定的空文件
 * 3. 自动写入 SVG 文件内容
 * 4. 自动生成 images 和 fonts 目录下的占位文件（示例文本内容）
 *
 * 使用: 在命令行执行 `node create_structure.js`
 *************************************************************/

const fs = require('fs');
const path = require('path');

// 需要创建的目录结构
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

// 需要创建的空文件列表
const files = [
  'public/index.html',
  'public/assets/icons/academic.svg',
  'public/assets/icons/industry.svg',
  'public/assets/icons/investment.svg',
  'public/assets/icons/ui/menu.svg',
  'public/assets/icons/ui/close.svg',
  'public/assets/icons/ui/search.svg',
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

// SVG 文件的实际内容映射
const svgFileContents = {
  'public/assets/icons/academic.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradAcademic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4B79A1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#283E51;stop-opacity:1" />
    </linearGradient>
  </defs>
  <path d="M32 6 L58 20 L32 34 L6 20 Z" fill="url(#gradAcademic)" stroke="#ffffff" stroke-width="2" />
  <rect x="18" y="34" width="28" height="4" fill="#283E51" />
</svg>`,
  'public/assets/icons/industry.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradIndustry" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#F7971E;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFD200;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect x="10" y="20" width="44" height="30" fill="url(#gradIndustry)" stroke="#333" stroke-width="2"/>
  <rect x="16" y="8" width="6" height="14" fill="#333" />
  <rect x="42" y="10" width="6" height="12" fill="#333" />
  <rect x="18" y="28" width="8" height="8" fill="#fff" opacity="0.8"/>
  <rect x="38" y="28" width="8" height="8" fill="#fff" opacity="0.8"/>
</svg>`,
  'public/assets/icons/investment.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradInvestment" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#56ab2f;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a8e063;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- 上升折线图 -->
  <polyline
    points="8,56 20,40 32,48 44,30 56,20"
    fill="none"
    stroke="url(#gradInvestment)"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`,
  'public/assets/icons/ui/menu.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="5" width="18" height="2" fill="#333" />
  <rect x="3" y="11" width="18" height="2" fill="#333" />
  <rect x="3" y="17" width="18" height="2" fill="#333" />
</svg>`,
  'public/assets/icons/ui/close.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <line x1="4" y1="4" x2="20" y2="20" stroke="#333" stroke-width="2" stroke-linecap="round"/>
  <line x1="20" y1="4" x2="4" y2="20" stroke="#333" stroke-width="2" stroke-linecap="round"/>
</svg>`,
  'public/assets/icons/ui/search.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="7" stroke="#333" stroke-width="2" fill="none"/>
  <line x1="15" y1="15" x2="20" y2="20" stroke="#333" stroke-width="2" stroke-linecap="round"/>
</svg>`
};

// images/fonts 资源的占位内容映射
const assetFileContents = {
  'public/assets/images/backgrounds/sample-background.txt': '这是一个背景图片占位文件，请将此文件替换为实际的背景图片（如 .png 或 .jpg 格式）。',
  'public/assets/images/placeholders/sample-placeholder.txt': '这是一个占位图片占位文件，请将此文件替换为实际的占位图片（如 .png 或 .jpg 格式）。',
  'public/assets/fonts/sample-font.txt': '这是一个字体占位文件，请将此文件替换为实际的字体文件（如 .woff 或 .ttf 格式）。'
};

/**
 * 创建项目目录和文件
 */
function createStructure() {
  // 1. 创建目录
  structure.forEach(dir => {
    const dirPath = path.join(__dirname, 'hyperdimensional-thinkbank', dir);
    fs.mkdirSync(dirPath, { recursive: true });
  });

  // 2. 创建空文件
  files.forEach(file => {
    const filePath = path.join(__dirname, 'hyperdimensional-thinkbank', file);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, '');
  });

  // 3. 写入实际 SVG 文件内容
  Object.entries(svgFileContents).forEach(([svgPath, svgContent]) => {
    const fullPath = path.join(__dirname, 'hyperdimensional-thinkbank', svgPath);
    fs.writeFileSync(fullPath, svgContent, 'utf-8');
    console.log(`✅ 已写入 SVG 文件: ${svgPath}`);
  });

  // 4. 写入 images 和 fonts 目录下的占位资源内容
  Object.entries(assetFileContents).forEach(([assetPath, assetContent]) => {
    const fullPath = path.join(__dirname, 'hyperdimensional-thinkbank', assetPath);
    fs.writeFileSync(fullPath, assetContent, 'utf-8');
    console.log(`✅ 已写入占位资源文件: ${assetPath}`);
  });

  console.log('✅ 项目结构创建完成！');
}

// 运行
createStructure();
