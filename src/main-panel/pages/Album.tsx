import { FC, useState } from 'react';
import { useModalPadding } from '@realsee/vapor';

import { ArrowRightSymbol, Audio, Button, Card, CardSlider, Font, Icon, MediaSlider, Text, useDimension, useModalRouter, VStack } from '@realsee/vapor';

const Album: FC = () => {
  const { match, orientation } = useDimension();
  const { query } = useModalRouter();
  const defaultIndex = Number(query.index) || 0;
  const [sliderCurrentIndex, setSliderCurrentIndex] = useState(defaultIndex);
  const modalPadding = useModalPadding();

  const mediaList: { src: string, type: 'image' | 'video' }[] = [
    {
      src: 'https://vr-image-4.realsee-cdn.cn/release/auto3dhd/6b063b1f46ae3701664b13149993ba4f/screenshot/1634441168_5/pc0_CHpoJUBTx.jpg',
      type: 'image',
    },
    {
      src: 'https://vr-public.realsee-cdn.cn/release/web/videos/tv_ads/012.382d6846.mp4',
      type: 'video',
    },
    {
      src: 'https://vr-image-4.realsee-cdn.cn/release/auto3dhd/6b063b1f46ae3701664b13149993ba4f/screenshot/1634441168_5/pc0_CHpoJUBTx.jpg',
      type: 'image',
    },
    {
      src: 'https://vr-static.realsee-cdn.cn/release/web/shootdevice/tinified/shootdevice-radar.15873535.png',
      type: 'image',
    },
    {
      src: 'https://vr-image-4.realsee-cdn.cn/release/auto3dhd/6b063b1f46ae3701664b13149993ba4f/screenshot/1634441168_5/pc0_CHpoJUBTx.jpg',
      type: 'image',
    },
    {
      src: 'https://vrlab-static.ljcdn.com/release/web/shootdevice/tinified/shootdevice-radar.15873535.png',
      type: 'image',
    },
    {
      src: 'https://vrlab-image4.ljcdn.com/release/auto3dhd/6b063b1f46ae3701664b13149993ba4f/screenshot/1634441168_5/pc0_CHpoJUBTx.jpg',
      type: 'image',
    },
    {
      src: 'https://vrlab-static.ljcdn.com/release/web/shootdevice/tinified/shootdevice-radar.15873535.png',
      type: 'image',
    },
    {
      src: 'https://vrlab-image4.ljcdn.com/release/auto3dhd/6b063b1f46ae3701664b13149993ba4f/screenshot/1634441168_5/pc0_CHpoJUBTx.jpg',
      type: 'image',
    }
  ];
  return <VStack gap={`${20 / 16}rem`} flex={1}>
    <VStack gap={`${20 / 16}rem`}>
      <VStack
        gap={`${20 / 16}rem`}
        margin={{
          left: -modalPadding.left,
          right: -modalPadding.right
        }}
      >
        <MediaSlider
          height={match('xl') ? `${400 / 16}rem` : `${280 / 16}rem`}
          defaultselectIndex={defaultIndex}
          selectIndex={sliderCurrentIndex}
          onSelect={(index) => setSliderCurrentIndex(index)}
          mediaList={mediaList}
        />
        <VStack align={{ horizontal: match('sm') ? 'center' : 'start' }}>
          <Text
            size={(match('sm') || (match('md') && orientation === 'landscape')) ? 'md' : 'lg'}
            opacity='50'
          >
            {sliderCurrentIndex} / {mediaList.length}
          </Text>
        </VStack>
        {match('xl') &&
          <VStack margin={{ top: `${4 / 16}rem` }}>
            <CardSlider
              disableMouseWheel={true}
              appearance='card-deck-block'
              fadeSide={false}
              scrollArrow={mediaList.length > 6 ? true : false}
              selectedIndex={sliderCurrentIndex}
              onSelect={(index) => setSliderCurrentIndex(index)}
              cards={
                mediaList.map((media) => {
                  return <Card width={100} height={66} image={media.src} />
                })
              } ></CardSlider>
          </VStack>
        }
      </VStack>
      <Audio width="100%" src="https://vr-public.realsee-cdn.cn/release/web/videos/tv_ads/012.382d6846.mp4" />
    </VStack>
    <VStack gap={8}>
      <Text
        size={(match('sm') || (match('md') && orientation === 'landscape')) ? 'lg' : 'xxl'}
        weight='bold'
      >主标题</Text>
      <VStack
        gap={(match('sm') || (match('md') && orientation === 'landscape')) ? `${8 / 16}rem` : `${12 / 16}rem`}
      >
        <Font
          opacity='50'
          size={(match('sm') || (match('md') && orientation === 'landscape')) ? 'sm' : 'md'}
        >
          <Text wrap>
            描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支
            持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述
            文案描述文案支持最多600个字描述文案描述文案描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述文
            案描述文案支持最多600个字描述文案描述文案支
          </Text>
          <Text wrap>
            持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述
            文案描述文案支持最多600个字描述文案描述文案描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述文
            案描述文案支持最多600个字描述文案描述文案支
            持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述
            文案描述文案支持最多600个字描述文案描述文案描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述文
            案描述文案支持最多600个字描述文案描述文案支
            持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述文案描述文案支持最多600个字描述
            文案描述文案支持最多600个字描述文案描述文案
          </Text>
        </Font>
      </VStack>
    </VStack>
    <VStack
      padding={{
        top: (match('sm') || (match('md') && orientation === 'landscape')) ? `${16 / 16}rem` : `${24 / 16}rem`
      }
      }
      align={{
        horizontal: 'end'
      }}
    >
      <Button
        appearance='text-reverse'
        size={(match('sm') || (match('md') && orientation === 'landscape')) ? 'md' : 'lg'}
        icon={<Icon symbol={ArrowRightSymbol} />}
      >查看详情</Button>
    </VStack>
  </VStack>;
};
export { Album };
