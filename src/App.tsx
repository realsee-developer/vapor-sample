import { LooseWork } from '@realsee/five';
import { createFiveProvider } from '@realsee/five/react';
import { Layer, Vapor, ZStack } from '@realsee/vapor';
import '@realsee/vapor/vapor.css';
import { FC } from 'react';
import { Bottom } from './bottom/Bottom';
import { work } from './data-source/work';
import { Front } from './front/Front';
import { MainPanel } from './main-panel/MainPanel';
import { GuideToolbar } from './overlays/GuideToolbar';
import { QuickSwitchToolbar } from './overlays/QuickSwitchToolbar';
import { SpaceDialog } from './overlays/SpaceDialog';
import { Store } from './Store';
import { VR } from './vr/VR';
interface AppPropTypes {
  onBack?: () => void;
  safeArea: {
    insetTop: number;
  };
  work: LooseWork,
  width?: string | number;
  height?: string | number;
  theme?: "arc_beauty" | "square_simple" | "minimalist";
}

const FiveProvider = createFiveProvider({
  imageOptions: {
    size: 512,
  },
  poweredByRealsee: false,
});

const App: FC<AppPropTypes> = ({ safeArea, onBack, work, width, height, theme }) => {
  return <>
    <Vapor
      width={width}
      height={height}
      theme={theme}
    >
      <FiveProvider work={work}>
        <ZStack
          width="100%"
          height="100%"
          align={{
            vertical: 'start'
          }}
        >

          {/* VR 内容 */}
          <VR />

          {/* 上下的暗角 */}
          <Layer vignetting />

          {/* 前部 */}
          <Front onBack={onBack} safeArea={safeArea} />
        </ZStack>

        {/* 底部 */}
        <Bottom />

        {/* 主面板 */}
        <MainPanel />

        {/* 速览 */}
        <QuickSwitchToolbar />

        {/* 路线引导 */}
        <GuideToolbar />

        {/* 空间切换 */}
        <SpaceDialog />
      </FiveProvider>
    </Vapor>
  </>
};

export { App };


export default function RealseeApp() {
  return <Store>
    <App safeArea={{ insetTop: 0 }} work={work} />
  </Store>
}
