import { Button, Drawer, HStack, Icon } from '@realsee/vapor';
import React, { FC } from 'react';

const BottomSheet: FC = () => {
  return (
    <Drawer
      position="bottom"
      height="auto"
      isOpen
      enableOverlay={false}
      disabledInteraction
    >
      <HStack
        width="100%"
        height="56px"
        background="rgba(0, 0, 0, 0.5)"
        padding="0 16px"
        align={{
          vertical: 'center'
        }}
        justify="space-around"
      >
        <Button shape="circle" type="flat" size="small">
          <Icon type="measurement" />
        </Button>
        <Button shape="circle" type="flat" size="small">
          <Icon type="location" />
        </Button>
        <Button shape="circle" type="flat" size="small">
          <Icon type="dollhouse" />
        </Button>
        <Button shape="circle" type="flat" size="small">
          <Icon type="guide" />
        </Button>
        <Button shape="circle" type="flat" size="small">
          <Icon type="fullscreen" />
        </Button>
      </HStack>
    </Drawer>
  );
};

export { BottomSheet };
