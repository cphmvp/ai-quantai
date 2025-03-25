# DeepUseAI - 专业的AI量化交易解决方案

## 项目简介

DeepUseAI是一个专业的AI量化交易一体机解决方案，为专业投资者和机构提供高性能的量化交易服务。项目采用Next.js 15.2构建，提供现代化的用户界面和流畅的用户体验。

### 主要特性

- 🚀 基于Next.js 15.2的现代化Web应用
- 💫 流畅的页面动画效果（Framer Motion）
- 🎨 响应式设计，完美适配各种设备
- ⚡ 优化的性能和加载速度
- 🔒 安全可靠的表单处理

## 技术栈

- **前端框架**: Next.js 15.2
- **样式方案**: Tailwind CSS
- **动画效果**: Framer Motion
- **开发语言**: TypeScript
- **包管理器**: npm

## 快速开始

### 开发环境要求

- Node.js 18.0或更高版本
- npm 8.0或更高版本

### 安装步骤

1. 克隆项目代码
```bash
git clone [您的项目仓库地址]
cd ai-quantai
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 访问开发环境
打开浏览器访问 http://localhost:3000

### 生产环境构建

```bash
npm run build
npm start
```

## 项目结构

```
ai-quantai/
├── src/
│   ├── app/              # 页面组件
│   │   ├── page.tsx      # 首页
│   │   ├── about/        # 关于页面
│   │   ├── products/     # 产品页面
│   │   └── contact/      # 联系页面
│   ├── components/       # 可复用组件
│   └── styles/          # 样式文件
├── public/              # 静态资源
├── package.json        # 项目配置
└── README.md          # 项目文档
```

## 部署说明

项目支持多种部署方式，推荐使用Docker进行容器化部署。详细部署步骤请参考 `deploy.sh` 脚本。

### 环境变量配置

创建 `.env` 文件并配置以下环境变量：

```env
NEXT_PUBLIC_API_URL=您的API地址
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系我们

- 邮箱: contact@deepuse.com
- 地址: 上海市浦东新区张江高科技园区科苑路88号
- 电话: 400-888-9999 