import { Button, HStack, Icon, useDimension } from '@realsee/vapor';
import React, { FC } from 'react';

type HeadPropTypes = {
  onBack?: () => void;
};

const Head: FC<HeadPropTypes> = ({ onBack }) => {
  const { match } = useDimension();

  return <HStack
    width="100%"
    justify="space-between"
    align={{
      vertical: 'center'
    }}
  >
    <HStack
      width="auto"
      align={{
        vertical: 'center'
      }}
      gap="8px"
    >
      {onBack && (
        <Button
          size="small"
          shape="circle"
          onClick={onBack}
        >
          <Icon type="arrow-left" />
        </Button>
      )}
      <h3 style={{ margin: 0, fontSize: match('sm') ? "16px" : "18px" }}>贝壳·如视项目</h3>
    </HStack>

    <HStack
      width="auto"
      justify="space-between"
      align={{
        vertical: 'center'
      }}
      gap="8px"
    >
      {!match('sm') && <Button size="small" shape="circle"><Icon type="share" /></Button>}
      <Button size="small" shape="circle"><Icon type="favorite" /></Button>
    </HStack>
  </HStack>;
};

export { Head };
