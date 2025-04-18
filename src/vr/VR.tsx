import { FiveCanvas } from '@realsee/five/react';
import { useDimension } from '@realsee/vapor';
import { FC } from 'react';

const VR: FC = () => {
  const { width, height } = useDimension();
  return <FiveCanvas width={width} height={height} />
};

export { VR };
