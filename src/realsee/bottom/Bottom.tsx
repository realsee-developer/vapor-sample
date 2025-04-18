import { useDimension } from '@realsee/vapor';
import React, { FC } from 'react';
import { BottomBar } from './BottomBar';
import { BottomSheet } from './BottomSheet';

const Bottom: FC = () => {
  const { match } = useDimension();
  return match("sm") ? < BottomSheet /> : <BottomBar />;
}

export { Bottom };
