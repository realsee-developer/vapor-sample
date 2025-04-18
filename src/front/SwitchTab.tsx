import { Button, Font, HStack, useOverlayVisible, VStack } from '@realsee/vapor';
import { FC } from 'react';

const Line: FC = () => {
  return <div style={{
    height: `${2 / 16}rem`,
    width: `${54 / 16}rem`,
    position: 'absolute',
    bottom: `${-8 / 16}rem`,
    left: '50%',
    transform: 'translate(-50%, 0)',
    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)`,
  }}></div>;
};

const SwitchTab: FC = () => {

  const overlayVisible = useOverlayVisible('modal', 'dialog');

  if (overlayVisible) {
    return null;
  }

  return <Font size='xl' opacity='80'>
    <HStack height={`${80 / 16}rem`} width={`${426 / 16}rem`} align={{ horizontal: 'space-around' }}>
      <VStack>
        <Button appearance='shadow' weight='bold' opacity='100'>漫游</Button>
        <Line />
      </VStack>
      <VStack>
        <Button appearance='shadow'>户型图</Button>
      </VStack>
      <VStack>
        <Button appearance='shadow'>模型</Button>
      </VStack>
    </HStack>
  </Font>;
};

export { SwitchTab };
