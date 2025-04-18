import { VStack, ZStack, useDimension } from '@realsee/vapor';
import React, { FC, PropsWithChildren } from 'react';
import { Head } from './Head';
import { SwitchTab } from './SwitchTab';

type AppPropTypes = PropsWithChildren<{
  onBack?: () => void;
  safeArea: {
    insetTop: number;
  };
}>;

const Front: FC<AppPropTypes> = ({ safeArea, onBack }) => {
  const { match, orientation } = useDimension();

  return <ZStack width="100%" height="100%">
    <VStack
      width="100%"
      margin={{
        top: safeArea.insetTop,
      }}
      padding={{
        top: `${12 / 16}rem`,
        left: `${16 / 16}rem`,
        right: `${16 / 16}rem`
      }}
    >
      <Head onBack={onBack} />
    </VStack>

    {/* 宽屏下的模态切换 */}
    {match(">lg") &&
      <VStack
        margin={{
          top: `${-20 / 16}rem`
        }}
        padding={{
          top: `${24 / 16}rem`
        }}
      >
        <SwitchTab />
      </VStack>
    }
  </ZStack>;
};

export { Front };
