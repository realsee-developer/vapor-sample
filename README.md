# Vapor 示例项目

这是一个展示如何使用 [@realsee/vapor](https://vapor.realsee.cn/) 组件库的示例项目。该项目使用 Vite 和 React 18 构建，旨在帮助开发者快速理解和掌握 Vapor 组件库的使用方法。

## 功能亮点

- 🎨 展示了 Vapor 的主题系统（柔美弧、简约方、极简）
- 🧩 包含多种常用组件的使用示例
- 📱 响应式设计，适配不同设备
- 🔄 交互组件展示（模态框、底部弹层、Toast 等）

## 技术栈

- [Vite](https://vitejs.dev/) - 构建工具
- [React 18](https://react.dev/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- [@realsee/vapor](https://vapor.realsee.cn/) - 如视 VR 前端组件库

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建项目

```bash
npm run build
```

### 预览构建产物

```bash
npm run preview
```

## 项目结构

```
vapor-sample/
├── public/          # 静态资源目录
├── src/             # 源代码目录
│   ├── assets/      # 图片等资源
│   ├── App.css      # 应用样式
│   ├── App.tsx      # 主应用组件
│   ├── index.css    # 全局样式
│   └── main.tsx     # 应用入口
├── index.html       # HTML 模板
├── package.json     # 项目配置
├── tsconfig.json    # TypeScript 配置
└── vite.config.ts   # Vite 配置
```

## 组件展示

本示例项目展示了以下 Vapor 组件的用法：

- Vapor - 顶层容器组件
- Theme - 主题组件
- Text - 文本组件
- Button - 按钮组件
- Card - 卡片组件
- Avatar - 头像组件
- HStack/VStack - 布局组件
- TitleBar - 顶部标题栏
- BottomBar - 底部导航栏
- BottomSheet - 底部弹层
- Modal - 模态框
- Toast - 提示消息
- TabView - 标签页组件
- Box - 盒子容器
- Icon - 图标组件

## 主题自定义

Vapor 组件库支持三种主题：

- 柔美弧 (arc_beauty) - 默认主题，圆角设计
- 简约方 (square_simple) - 方角设计
- 极简 (minimalist) - 简约设计

在示例项目中，你可以点击"主题切换"部分的按钮来切换不同的主题风格。

## 布局系统

Vapor 使用类似 SwiftUI 的布局系统，主要包括：

- HStack - 水平布局容器
- VStack - 垂直布局容器
- ZStack - 层叠布局容器

这些布局组件支持对齐方式、间距等属性，方便构建复杂的用户界面。

## 参考资源

- [Vapor 组件库文档](https://vapor.realsee.cn/)
- [React 官方文档](https://react.dev/learn)
- [Vite 官方文档](https://vitejs.dev/guide/)
