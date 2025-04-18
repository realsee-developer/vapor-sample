import {
  ArrowDownSymbol,
  ArrowUpSymbol,
  Block,
  Button,
  Card, CardSlider,
  CloseSymbol,
  Divide,
  HStack,
  Icon,
  PauseSymbol, PlaySymbol,
  Progress,
  Text,
  Toolbar,
  VStack,
  ZStack, useDimension
} from '@realsee/vapor';
import { FC, PropsWithChildren, useState } from 'react';
import { useQuickSwitchToolbarStore } from '../stores/quick-switch-toolbar';

const ArrowDown: FC<{
  onClick?: () => void;
}> = ({ onClick }) => {
  const arrowFilterID = 'quickSwitchToolbar__arrowFilter';
  const arrowDownPathID = 'quickSwitchToolbar__arrowDownPath';
  const shadowOffsetOuter = 'quickSwitchToolbar__shadowOffsetOuter';
  const shadowBlurOuter = 'quickSwitchToolbar__shadowBlurOuter';

  return <div onClick={onClick}>
    <svg width={`${40 / 16}rem`} height={`${12 / 16}rem`} style={{ filter: 'drop-shadow(0px 0px 4px black)' }}>
      <defs>
        <filter x="-10.7%" y="-37.5%" width="121.4%" height="175%" filterUnits="objectBoundingBox" id={arrowFilterID}>
          <feOffset in="SourceAlpha" result={shadowOffsetOuter} />
          <feGaussianBlur stdDeviation="1" in={shadowOffsetOuter} result={shadowBlurOuter} />
          <feComposite in={shadowBlurOuter} in2="SourceAlpha" operator="out" result={shadowBlurOuter} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.202086976 0" in={shadowBlurOuter} />
        </filter>
        <path d="M31.368 2.103a2 2 0 0 1 1.41 3.74l-.146.054-12 4a2 2 0 0 1-1.087.05l-.177-.05-12-4A2 2 0 0 1 8.482 2.06l.15.044L20 5.89l11.368-3.788Z" id={arrowDownPathID} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M31.447 2.34a1.745 1.745 0 0 1 1.336.095c.4.2.724.553.877 1.012a1.745 1.745 0 0 1-.97 2.162L20.553 9.66a1.75 1.75 0 0 1-.94.047L7.447 5.66a1.745 1.745 0 0 1-1.012-.877c-.2-.401-.248-.878-.095-1.336A1.745 1.745 0 0 1 8.413 2.3L20 6.153Z" strokeOpacity=".3" stroke="#FFF" strokeWidth=".5" fillOpacity=".2" fill="#FFF" />
        <use fill="#000" filter={`url(#${arrowFilterID})`} xlinkHref={`#${arrowDownPathID}`} />
        <path strokeOpacity=".3" stroke="#FFF" strokeWidth=".5" d="M31.447 2.34a1.745 1.745 0 0 1 1.336.095c.4.2.724.553.877 1.012a1.745 1.745 0 0 1-.97 2.162L20.553 9.66a1.75 1.75 0 0 1-.94.047L7.447 5.66a1.745 1.745 0 0 1-1.012-.877c-.2-.401-.248-.878-.095-1.336A1.745 1.745 0 0 1 8.413 2.3L20 6.153Z" strokeLinejoin="round" fillOpacity=".2" fill="#FFF" />
      </g>
    </svg>
  </div>;
}

const ButtonWrap: FC<PropsWithChildren<{
  background?: boolean;
  width?: string;
  height: string;
  radius: string;
}>> = ({ radius, height, background, width, children }) => {
  const className = `quickSwitchToolbar_buttonWrap_${radius}`;
  return <div
    style={{
      backgroundColor: background ? 'rgba(0, 0, 0, 0.2)' : undefined,
      borderRadius: radius,
      height,
      width,
      padding: `0 ${12 / 16}rem`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {background && <>
      <div className={className}></div>
      <style>{`
.${className} {
  position: absolute;
  inset: 0;
  border-radius: ${radius};
  padding: ${1 / 16}rem;
  background:linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
    `}</style>
    </>
    }
    <div>{children}</div>
  </div>;
}

const QuickSwitchToolbar: FC = () => {

  const { match } = useDimension();
  const [cardSelectIndex, setCardSelectIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [visible, hideQuickSwitchToolbar] = useQuickSwitchToolbarStore(store => [store.visible, store.hide]);

  return <Toolbar
    title={
      match('sm') ?
        <ZStack>
          <ZStack width="100%" align={{ vertical: 'center', horizontal: 'start' }}>
            {playing ?
              <Button appearance="text-reverse" size='md' icon={<Icon symbol={PauseSymbol} />} onClick={() => setPlaying(false)}>暂停</Button> :
              <Button appearance="text-reverse" size='md' icon={<Icon symbol={PlaySymbol} />} onClick={() => setPlaying(true)}>播放</Button>
            }
          </ZStack>
          <ZStack width="100%" align={{ vertical: 'center', horizontal: 'center' }}>
            <Text size='lg'>导览</Text>
          </ZStack>
        </ZStack> :
        <HStack width="100%">
          <ButtonWrap background height={`${32 / 16}rem`} radius={`${16 / 16}rem`}>
            <HStack gap={`${8 / 16}rem`}>
              {playing ?
                <Button appearance="text-reverse" size='md' icon={<Icon symbol={PauseSymbol} />} onClick={() => setPlaying(false)}>暂停</Button> :
                <Button appearance="text-reverse" size='md' icon={<Icon symbol={PlaySymbol} />} onClick={() => setPlaying(true)}>播放</Button>
              }
              <Divide />
              {hidden ?
                <Button appearance="text-reverse" size='md' icon={<Icon symbol={ArrowUpSymbol} />} onClick={() => setHidden(false)} /> :
                <Button appearance="text-reverse" size='md' icon={<Icon symbol={ArrowDownSymbol} />} onClick={() => setHidden(true)} />
              }
            </HStack>
          </ButtonWrap>
          <VStack flex={1} padding={{ left: `${24 / 16}rem`, right: `${60 / 16}rem` }} overflow="hidden">
            <HStack width="100%" scrollable gap={`${30 / 16}rem`}>
              <ButtonWrap background width={`${56 / 16}rem`} height={`${32 / 16}rem`} radius={`${16 / 16}rem`}><Button appearance='text' size='lg'>1F</Button></ButtonWrap>
              <ButtonWrap width={`${56 / 16}rem`} height={`${32 / 16}rem`} radius={`${16 / 16}rem`}><Button appearance='text' size='lg'>2F</Button></ButtonWrap>
              <ButtonWrap width={`${56 / 16}rem`} height={`${32 / 16}rem`} radius={`${16 / 16}rem`}><Button appearance='text' size='lg'>3F</Button></ButtonWrap>
              <ButtonWrap width={`${56 / 16}rem`} height={`${32 / 16}rem`} radius={`${16 / 16}rem`}><Button appearance='text' size='lg'>4F</Button></ButtonWrap>
              <ButtonWrap width={`${56 / 16}rem`} height={`${32 / 16}rem`} radius={`${16 / 16}rem`}><Button appearance='text' size='lg'>5F</Button></ButtonWrap>
              <ButtonWrap width={`${56 / 16}rem`} height={`${32 / 16}rem`} radius={`${16 / 16}rem`}><Button appearance='text' size='lg'>6F</Button></ButtonWrap>
              <ButtonWrap width={`${56 / 16}rem`} height={`${32 / 16}rem`} radius={`${16 / 16}rem`}><Button appearance='text' size='lg'>7F</Button></ButtonWrap>
              <ButtonWrap width={`${56 / 16}rem`} height={`${32 / 16}rem`} radius={`${16 / 16}rem`}><Button appearance='text' size='lg'>8F</Button></ButtonWrap>
            </HStack>
          </VStack>
        </HStack>
    }
    visible={visible}
    closeButton={<Button icon={<Icon symbol={CloseSymbol} />}></Button>}
    onClose={hideQuickSwitchToolbar}
    maxWidth={`${740 / 16}rem`}
    hidden={hidden}
    above={
      <VStack gap={`${6 / 16}rem`}>
        <HStack align={{ vertical: 'stretch' }} gap={`${10 / 16}rem`}>
          <VStack gap={`${6 / 16}rem`} flex={1}>
            <Text textShadow size={match(">md") ? 'lg' : 'md'} weight='bold'>标题限制在十个字以内</Text>
            <Text textShadow size={match(">md") ? 'md' : 'sm'} wrap>客厅采光很好，温馨舒适。客厅采光很好，温馨舒适客厅采光很好</Text>
          </VStack>
          <VStack align={{ vertical: 'end' }} hidden={!hidden}>
            <ButtonWrap background height={`${32 / 16}rem`} radius={`${16 / 16}rem`}>
              <HStack gap={`${6 / 16}rem`}>
                {playing ?
                  <Button appearance="text-reverse" size='md' icon={<Icon symbol={PauseSymbol} />} onClick={() => setPlaying(false)}>暂停</Button> :
                  <Button appearance="text-reverse" size='md' icon={<Icon symbol={PlaySymbol} />} onClick={() => setPlaying(true)}>播放</Button>
                }
                <Divide />
                {hidden ?
                  <Button appearance="text-reverse" size='md' icon={<Icon symbol={ArrowUpSymbol} />} onClick={() => setHidden(false)} /> :
                  <Button appearance="text-reverse" size='md' icon={<Icon symbol={ArrowDownSymbol} />} onClick={() => setHidden(true)} />
                }
              </HStack>
            </ButtonWrap>
          </VStack>
        </HStack>
        {hidden &&
          <VStack gap={`${10 / 16}rem`} margin={{ bottom: `${6 / 16}rem` }}>
            <Text textShadow>1/5</Text>
            <HStack gap={`${4 / 16}rem`}>
              <Progress flex={1} value={0.75} background></Progress>
              <Progress flex={1} value={0} background></Progress>
              <Progress flex={1} value={0} background></Progress>
              <Progress flex={1} value={0} background></Progress>
              <Progress flex={1} value={0} background></Progress>
            </HStack>
          </VStack>
        }
        {match("sm") &&
          <VStack margin={{ bottom: `${-14 / 16}rem` }} height={`${20 / 16}rem`} align={{ horizontal: 'center', vertical: 'center' }}>
            {!hidden && <ArrowDown onClick={() => setHidden(true)} />}
          </VStack>
        }
      </VStack>
    }
  >
    <VStack
      margin={{ left: match('sm') ? `${-16 / 16}rem` : 0, right: match('sm') ? `${-16 / 16}rem` : 0 }}
    >
      {match('sm') &&
        <HStack padding={{ left: `${16 / 16}rem`, right: `${16 / 16}rem`, bottom: `${16 / 16}rem` }} gap={`${40 / 16}rem`} scrollable>
          <Button appearance='text' size='lg'>1F</Button>
          <Button appearance='text' size='lg' opacity='50'>2F</Button>
          <Button appearance='text' size='lg' opacity='50'>3F</Button>
          <Button appearance='text' size='lg' opacity='50'>4F</Button>
          <Button appearance='text' size='lg' opacity='50'>5F</Button>
          <Button appearance='text' size='lg' opacity='50'>7F</Button>
          <Button appearance='text' size='lg' opacity='50'>8F</Button>
          <Button appearance='text' size='lg' opacity='50'>9F</Button>
        </HStack>
      }
      <CardSlider
        padding={{ left: match('sm') ? `${16 / 16}rem` : 0, right: match('sm') ? `${16 / 16}rem` : 0 }}
        selectedIndex={cardSelectIndex}
        onSelect={(index) => setCardSelectIndex(index)}
        fadeSide={match('>sm')}
        scrollArrowStep={144}
        cards={[
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100">
            <VStack flex={1} padding={`${10 / 16}rem`} align={{ horizontal: 'stretch', vertical: 'center' }}>
              <Text align='center' size='md'>客厅客厅客厅客厅客厅客厅客厅客厅客厅</Text>
              <Text align='center' size='sm'>20m2</Text>
            </VStack>
            <Block absolute={{ bottom: 0, left: 0, right: 0 }}>
              <Progress flex={1} value={0.75}></Progress>
            </Block>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100">
            <VStack flex={1} padding={`${10 / 16}rem`} align={{ horizontal: 'stretch', vertical: 'center' }}>
              <Text align='center' wrap={2} size='md'>客厅客厅客厅客厅客厅客厅客厅客厅客厅</Text>
              <Text align='center' size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100">
            <VStack flex={1} padding={`${10 / 16}rem`} align={{ horizontal: 'stretch', vertical: 'center' }}>
              <Text align='center' size='md'>客厅</Text>
              <Text align='center' size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100">
            <VStack flex={1} padding={`${10 / 16}rem`} align={{ horizontal: 'stretch', vertical: 'center' }}>
              <Text align='center' size='md'>客厅</Text>
              <Text align='center' size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100">
            <VStack flex={1} padding={`${10 / 16}rem`} align={{ horizontal: 'stretch', vertical: 'center' }}>
              <Text align='center' size='md'>客厅</Text>
              <Text align='center' size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100">
            <VStack flex={1} padding={`${10 / 16}rem`} align={{ horizontal: 'stretch', vertical: 'center' }}>
              <Text align='center' size='md'>客厅</Text>
              <Text align='center' size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100">
            <VStack flex={1} padding={`${10 / 16}rem`} align={{ horizontal: 'stretch', vertical: 'center' }}>
              <Text align='center' size='md'>客厅</Text>
              <Text align='center' size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100">
            <VStack flex={1} padding={`${10 / 16}rem`} align={{ horizontal: 'stretch', vertical: 'center' }}>
              <Text align='center' size='md'>客厅</Text>
              <Text align='center' size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100">
            <VStack flex={1} padding={`${10 / 16}rem`} align={{ horizontal: 'stretch', vertical: 'center' }}>
              <Text align='center' size='md'>客厅</Text>
              <Text align='center' size='sm'>20m2</Text>
            </VStack>
          </Card>,
        ]}
      />
    </VStack>
  </Toolbar>;
};

export { QuickSwitchToolbar };
