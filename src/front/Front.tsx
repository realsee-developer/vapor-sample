import { VStack, ZStack, useDimension } from "@realsee/vapor";
import { FC, PropsWithChildren } from "react";
import { Head } from "./Head";
import { SwitchTab } from "./SwitchTab";

/**
 * 前景 UI 组件属性类型定义
 */
type AppPropTypes = PropsWithChildren<{
  /**
   * 返回按钮回调函数
   * 通常用于处理返回上级页面的操作
   */
  onBack?: () => void;

  /**
   * 安全区域配置
   * 用于适配不同设备的顶部安全区域（如刘海屏）
   */
  safeArea: {
    /**
     * 顶部安全区域高度（单位：像素）
     */
    insetTop: number;
  };

  /**
   * 切换到户型图视图的回调函数
   * 通常用于处理户型图视图的切换操作
   */
  toFloorplanView: () => void;
}>;

/**
 * 前景 UI 组件
 *
 * 负责渲染应用顶部的导航栏和宽屏下的模式切换标签
 * 采用响应式设计，根据屏幕尺寸调整布局和间距
 *
 * @param {AppPropTypes} props - 组件属性
 * @returns {JSX.Element} 渲染结果
 */
const Front: FC<AppPropTypes> = ({ safeArea, onBack, toFloorplanView }) => {
  // 使用 Vapor 的 useDimension hook 获取响应式布局信息
  const { match, orientation } = useDimension();

  return (
    <ZStack width="100%" height="100%">
      {/*
      顶部导航区域
      使用 VStack 垂直布局，根据设备尺寸动态调整边距
    */}
      <VStack
        width="100%"
        margin={{
          // 考虑顶部安全区域（刘海屏等）
          top: safeArea.insetTop,
        }}
        padding={{
          // 根据不同屏幕尺寸和方向动态调整顶部边距
          // 超大屏幕
          top: match("sm")
            ? `${12 / 16}rem` // 小屏幕
            : match("md")
            ? orientation === "landscape"
              ? `${12 / 16}rem`
              : `${20 / 16}rem` // 中屏幕，根据横竖屏调整
            : match("lg")
            ? `${20 / 16}rem` // 大屏幕
            : `${30 / 16}rem`,
          // 根据不同屏幕尺寸和方向动态调整左侧边距
          left: match("sm")
            ? 16 // 小屏幕
            : match("md")
            ? orientation === "landscape"
              ? `${32 / 16}rem`
              : `${24 / 16}rem` // 中屏幕，根据横竖屏调整
            : match("lg")
            ? `${24 / 16}rem` // 大屏幕
            : `${32 / 16}rem`, // 超大屏幕
          // 根据不同屏幕尺寸和方向动态调整右侧边距
          right: match("sm")
            ? `${16 / 16}rem` // 小屏幕
            : match("md")
            ? orientation === "landscape"
              ? `${32 / 16}rem`
              : `${24 / 16}rem` // 中屏幕，根据横竖屏调整
            : match("lg")
            ? `${24 / 16}rem` // 大屏幕
            : `${32 / 16}rem`, // 超大屏幕
        }}
      >
        {/* 头部组件，包含标题栏和相关按钮 */}
        <Head onBack={onBack} />
      </VStack>

      {/*
      宽屏设备下的模式切换标签
      仅在大于 lg 尺寸的屏幕上显示
    */}
      {match(">sm") && (
        <VStack
          margin={{
            top: `${-20 / 16}rem`, // 负边距，使标签向上偏移
          }}
          padding={{
            // 根据屏幕尺寸调整顶部内边距
            top:
              match("sm") || (match("md") && orientation === "landscape")
                ? `${12 / 16}rem`
                : `${24 / 16}rem`,
          }}
        >
          {/* 模式切换标签组件 */}
          <SwitchTab toFloorplanView={toFloorplanView} />
        </VStack>
      )}
    </ZStack>
  );
};

export { Front };
