import { Block } from '@realsee/vapor';
import { FC } from 'react';

//@ts-ignore
import { Map as BMap } from 'react-bmapgl';

const Map: FC = () => {
  return <Block absolute>
    <BMap
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      }}
      center={{ lng: 116.402544, lat: 39.928216 }}
      zoom={18}
    />
  </Block>;
};

export { Map };
