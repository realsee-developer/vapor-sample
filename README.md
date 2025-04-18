# Vapor 示例项目

这是一个使用 [@realsee/vapor](https://vapor.realsee.cn/) 组件库构建的如视 VR 看房应用示例。该项目展示了如何使用 Vapor 组件库创建美观、交互丰富的 Web 应用，特别是如何与 @realsee/five VR 引擎集成，实现沉浸式看房体验。

## 项目概述

本示例项目演示了一个完整的 VR 看房应用，包括以下主要功能：

- 🏠 VR 全景看房核心功能
- 🔄 多种浏览模式切换（全景、户型图等）
- 🧭 空间导航与房间切换
- 🎮 交互控制（缩放、旋转等）
- 🎨 美观的 UI 界面与动画效果
- 📱 响应式设计，适配不同设备尺寸

## 技术栈

- [React 18](https://react.dev/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- [Vite](https://vitejs.dev/) - 现代构建工具
- [@realsee/vapor](https://vapor.realsee.cn/) - 如视 VR 前端组件库
- [@realsee/five](https://developers.realsee.com/five/) - 如视 VR 引擎
- [Sass](https://sass-lang.com/) - CSS 预处理器
- [Lottie](https://airbnb.design/lottie/) - 矢量动画库

## 开始使用

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器：

```bash
npm run dev
```

默认情况下，服务器将在 http://localhost:5173 上运行。

### 构建项目

构建生产版本：

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览构建产物

```bash
npm run preview
```

## 项目结构

```
vapor-sample/
├── public/                  # 静态资源目录
├── src/                     # 源代码目录
│   ├── vr/                  # VR 相关组件
│   ├── front/               # 界面前景组件
│   ├── bottom/              # 底部控制组件
│   ├── main-panel/          # 主面板组件
│   ├── overlays/            # 浮层组件
│   ├── stores/              # 状态管理
│   ├── data-source/         # 数据源
│   ├── utils/               # 工具函数
│   ├── App.tsx              # 主应用组件
│   ├── Store.tsx            # 全局状态管理
│   └── main.tsx             # 应用入口
├── index.html               # HTML 模板
├── package.json             # 项目配置
├── tsconfig.json            # TypeScript 配置
└── vite.config.ts           # Vite 配置
```

## 目录说明

- `vr/`: 包含 VR 场景渲染和控制相关组件
- `front/`: 前景 UI 组件，包括顶部导航栏和标题
- `bottom/`: 底部控制栏组件，提供模式切换等功能
- `main-panel/`: 主面板组件，包含详细信息展示
- `overlays/`: 浮层组件，如对话框、工具栏等
- `stores/`: 状态管理逻辑，基于 Context API
- `data-source/`: 数据源，包含 VR 场景数据
- `utils/`: 通用工具函数和助手方法

## 主要组件说明

### 1. VR 组件

负责渲染和控制 VR 场景，集成了 @realsee/five 引擎。

### 2. 前景导航组件

处理顶部导航栏、标题和控制按钮，提供用户交互入口。

### 3. 底部控制栏

提供模式切换、房间选择等功能。

### 4. 主面板组件

显示详细信息，如房间数据、户型说明等。

### 5. 浮层组件

提供各种覆盖在主界面上的交互层，如分享对话框、工具栏等。

## Vapor 组件使用示例

### 基础容器

```tsx
<Vapor width='100%' height='100%' theme='arc_beauty'>
  {/* 应用内容 */}
</Vapor>
```

### 布局组件

```tsx
<ZStack width='100%' height='100%'>
  {/* VR 内容 */}
  <VR />

  {/* 前景 UI */}
  <Front />
</ZStack>
```

### 交互组件

```tsx
<Button
  icon={<Icon symbol={ShareSymbol} />}
  onClick={() => dispatchShare({})}
/>
```

## 定制主题

Vapor 支持三种内置主题：

- `arc_beauty` - 柔美弧形主题（默认）
- `square_simple` - 简约方形主题
- `minimalist` - 极简主题

可以通过 `Vapor` 组件的 `theme` 属性进行设置。

## 响应式设计

本示例项目使用 Vapor 的响应式 API 进行布局适配：

```tsx
const { match, orientation } = useDimension()

// 根据屏幕尺寸调整样式
const padding = match('sm') ? '16px' : match('md') ? '24px' : '32px'
```

## 常见问题

### Q: 项目启动时报错如何解决？

A: 请确保安装了所有依赖，并且 Node.js 版本符合要求。

### Q: 如何修改 VR 场景数据？

A: 可以在 `src/data-source/work.ts` 文件中修改场景数据。

### Q: 如何切换默认主题？

A: 在 `App.tsx` 中修改 `Vapor` 组件的 `theme` 属性。

## 参考资源

- [Vapor 组件库文档](https://vapor.realsee.cn/)
- [Five SDK 开发文档](https://developers.realsee.com/five/)
- [React 官方文档](https://react.dev/learn)
- [Vite 官方文档](https://vitejs.dev/guide/)

## 贡献指南

欢迎贡献代码、报告问题或提供改进建议！

1. Fork 项目仓库
2. 创建特性分支: `git checkout -b feature/amazing-feature`
3. 提交更改: `git commit -m 'Add some amazing feature'`
4. 推送到分支: `git push origin feature/amazing-feature`
5. 提交 Pull Request

## 许可证

本项目由 BEIKE REALSEE TECHNOLOGY (HK) LIMITED 开发和维护。
