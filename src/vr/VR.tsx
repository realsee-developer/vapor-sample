import { FiveCanvas } from '@realsee/five/react';
import { useDimension } from '@realsee/vapor';
import { FC } from 'react';

/**
 * VR 视图组件
 *
 * 该组件负责渲染 3D VR 场景，是应用的核心展示部分
 * 使用 @realsee/five 引擎的 FiveCanvas 组件渲染全景图和 3D 内容
 *
 * 特性：
 * - 自动适应屏幕尺寸
 * - 全屏渲染 VR 内容
 * - 集成 Five 引擎的交互能力
 *
 * @returns {JSX.Element} 渲染 VR 场景的 Canvas 组件
 */
const VR: FC = () => {
  // 使用 Vapor 的 useDimension hook 获取当前屏幕尺寸
  // 确保 VR 场景能够自适应不同设备
  const { width, height } = useDimension();

  // 渲染 Five 引擎的 Canvas 组件
  // FiveCanvas 是 @realsee/five/react 提供的组件，用于在 React 中渲染 Five VR 场景
  // 尺寸会跟随屏幕变化自动调整
  return <FiveCanvas width={width} height={height} />
};

export { VR };
