import { useFiveInstance } from '@realsee/five/react';
import { Button, HStack, Icon } from '@realsee/vapor';
import React, { FC } from 'react';

const BottomBar: FC = () => {
  const five = useFiveInstance();

  return (
    <HStack
      position="absolute"
      left="50%"
      transform="translateX(-50%)"
      bottom="24px"
      width="auto"
      height="56px"
      background="rgba(0, 0, 0, 0.5)"
      borderRadius="56px"
      padding="0 16px"
      align={{
        vertical: 'center'
      }}
      gap="12px"
    >
      <Button shape="circle" type="flat">
        <Icon type="measurement" />
      </Button>
      <Button shape="circle" type="flat">
        <Icon type="location" />
      </Button>
      <Button shape="circle" type="flat">
        <Icon type="dollhouse" />
      </Button>
      <Button shape="circle" type="flat">
        <Icon type="guide" />
      </Button>
      <Button shape="circle" type="flat">
        <Icon type="fullscreen" />
      </Button>
    </HStack>
  );
};

export { BottomBar };
