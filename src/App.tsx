import { LooseWork } from "@realsee/five";
import { createFiveProvider } from "@realsee/five/react";
import { Layer, Vapor, ZStack } from "@realsee/vapor";
import "@realsee/vapor/vapor.css";
import { FC, useState } from "react";
import { Bottom } from "./bottom/Bottom";
import workJSON from "./data-source/work.json";
import { Front } from "./front/Front";
import { MainPanel } from "./main-panel/MainPanel";
import { GuideToolbar } from "./overlays/GuideToolbar";
import { QuickSwitchToolbar } from "./overlays/QuickSwitchToolbar";
import { SpaceDialog } from "./overlays/SpaceDialog";
import { Store } from "./Store";
import { VR } from "./vr/VR";
import { Floorplan } from "./vr/Floorplan";

/**
 * 应用组件属性类型定义
 */
interface AppPropTypes {
  /**
   * 返回按钮回调函数，通常用于在嵌入场景时提供返回上级页面的能力
   */
  onBack?: () => void;

  /**
   * 安全区域配置，用于适配不同设备的顶部安全区域（如刘海屏）
   */
  safeArea: {
    /**
     * 顶部安全区域高度（单位：像素）
     */
    insetTop: number;
  };

  /**
   * VR 场景数据，包含全景图、户型图等资源
   */
  work: LooseWork;

  /**
   * 应用容器宽度，支持像素值或百分比
   */
  width?: string | number;

  /**
   * 应用容器高度，支持像素值或百分比
   */
  height?: string | number;

  /**
   * UI 主题，支持三种预设主题：
   * - arc_beauty: 柔美弧形主题（默认）
   * - square_simple: 简约方形主题
   * - minimalist: 极简主题
   */
  theme?: "arc_beauty" | "square_simple" | "minimalist";
}

/**
 * 创建 Five 引擎提供者组件
 * 用于在 React 组件树中提供 Five 引擎实例和状态
 */
const FiveProvider = createFiveProvider({
  // 设置全景图像尺寸，影响加载速度和渲染质量
  imageOptions: {
    size: 512,
  },
  // 禁用 "Powered by Realsee" 水印
  poweredByRealsee: false,
});

/**
 * 主应用组件
 *
 * 集成了 Vapor UI 框架和 Five VR 引擎，构建完整的 VR 看房应用界面
 * 采用分层架构，包含 VR 场景、UI 层、控制层和浮层组件
 *
 * @param {AppPropTypes} props - 组件属性
 * @returns {JSX.Element} 渲染结果
 */
const App: FC<AppPropTypes> = ({
  safeArea,
  onBack,
  work,
  width,
  height,
  theme,
}) => {
  const [showFloorplan, setShowFloorplan] = useState(false);
  const toFloorplanView = () => {
    setShowFloorplan(true);
  };

  return (
    <>
      {/* Vapor 容器组件，提供 UI 主题、尺寸和组件配置 */}
      <Vapor width={width} height={height} theme={theme}>
        {/* Five 引擎提供者，注入 VR 场景数据 */}
        {/* @ts-expect-error SDK类型不兼容 */}
        <FiveProvider work={work}>
          {/*
          ZStack 层叠布局容器
          用于将多个组件按照 z 轴顺序叠加展示
          从下到上依次是：VR场景、暗角层、前景UI
        */}
          <ZStack
            width="100%"
            height="100%"
            align={{
              vertical: "start",
            }}
          >
            {/* VR 内容 - 渲染全景图、户型图等 */}
            <VR />

            {/* 上下的暗角 - 增强视觉效果，提高内容可读性 */}
            <Layer vignetting />

            {/* 前部 UI - 顶部导航栏和相关控制按钮 */}
            <Front
              onBack={onBack}
              safeArea={safeArea}
              toFloorplanView={toFloorplanView}
            />
          </ZStack>

          {/* 底部控制栏 - 提供模式切换等功能 */}
          <Bottom />

          {/* 主面板 - 显示详细信息和内容 */}
          <MainPanel />

          {/* 浮层组件 - 各种工具栏和对话框 */}
          {/* 速览工具栏 - 提供快速模式切换 */}
          <QuickSwitchToolbar />

          {/* 路线引导工具栏 - 展示导览路线和控制 */}
          <GuideToolbar />

          {/* 空间切换对话框 - 用于在不同房间间切换 */}
          <SpaceDialog />

          {/* 户型图 */}
          {showFloorplan && <Floorplan />}
        </FiveProvider>
      </Vapor>
    </>
  );
};

export { App };

/**
 * 应用入口组件
 *
 * 将全局状态管理 Store 与 App 组件集成，并提供默认配置
 *
 * @returns {JSX.Element} 应用根组件
 */
export default function RealseeApp() {
  return (
    <Store>
      <App safeArea={{ insetTop: 0 }} work={workJSON} />
    </Store>
  );
}
