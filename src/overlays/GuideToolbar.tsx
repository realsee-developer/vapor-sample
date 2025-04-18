import { ArrowDownSymbol, Button, Card, CardPropTypes, CardSlider, Divide, HStack, Icon, PauseSymbol, PlaySymbol, Text, Toolbar, useDimension, VStack } from '@realsee/vapor';
import { FC, MouseEvent, useCallback, useState } from 'react';
import { useGuideToolbarStore } from '../stores/guide-toolbar';

interface GuideCardPropTypes extends CardPropTypes {
  size: 'md' | 'lg' | 'xl',
  text: string;
  paused: boolean;
  onPlay?: (event: MouseEvent) => void;
  onPause?: (event: MouseEvent) => void;
}

const GuideCard: FC<GuideCardPropTypes> = (props) => {
  if (props.size === 'md') {
    return <Card {...props} width={`${144 / 16}rem`} height={`${144 / 16}rem`}>
      <HStack flex={1} padding={{ top: `${10 / 16}rem`, bottom: `${10 / 16}rem` }} align={{ vertical: 'stretch' }}>
        <VStack flex={1} overflow="hidden" align={{ horizontal: 'stretch', vertical: 'center' }} padding={{ left: `${12 / 16}rem`, right: `${12 / 16}rem` }}>
          <Text size='sm' align='center' weight={props.selected ? 'bold' : 'regular'}>{props.text}</Text>
        </VStack>
        {props.selected &&
          <>
            <Divide />
            <VStack width={32} align={{ horizontal: 'center', vertical: 'center' }}>
              {
                props.paused ?
                  <Button icon={<Icon symbol={PlaySymbol} />} appearance="text" size='sm' onClick={props.onPlay}></Button> :
                  <Button icon={<Icon symbol={PauseSymbol} />} appearance="text" size='sm' onClick={props.onPause}></Button>
              }
            </VStack>
          </>
        }
      </HStack>
    </Card>;
  } else if (props.size === 'lg') {
    return <Card {...props} width={`${176 / 16}rem`} height={`${54 / 16}rem`}>
      <HStack flex={1} padding={{ top: `${10 / 16}rem`, bottom: `${10 / 16}rem` }} align={{ vertical: 'stretch' }}>
        <VStack flex={1} overflow="hidden" align={{ horizontal: 'stretch', vertical: 'center' }} padding={{ left: `${16 / 16}rem`, right: `${16 / 16}rem` }}>
          <Text size='md' align='center' weight={props.selected ? 'bold' : 'regular'}>{props.text}</Text>
        </VStack>
        {props.selected &&
          <>
            <Divide />
            <VStack width={`${45 / 16}rem`} align={{ horizontal: 'center', vertical: 'center' }}>
              {
                props.paused ?
                  <Button icon={<Icon symbol={PlaySymbol} />} appearance="text" size='sm' onClick={props.onPlay}></Button> :
                  <Button icon={<Icon symbol={PauseSymbol} />} appearance="text" size='sm' onClick={props.onPause}></Button>
              }
            </VStack>
          </>
        }
      </HStack>
    </Card>;
  } else {
    return <Card {...props} width={`${200 / 16}rem`} height={`${64 / 16}rem`}>
      <HStack flex={1} padding={{ top: `${10 / 16}rem`, bottom: `${10 / 16}rem` }} align={{ vertical: 'stretch' }}>
        <VStack flex={1} overflow="hidden" align={{ horizontal: 'stretch', vertical: 'center' }} padding={{ left: `${16 / 16}rem`, right: `${16 / 16}rem` }}>
          <Text size='lg' align='center' weight={props.selected ? 'bold' : 'regular'}>{props.text}</Text>
        </VStack>
        {props.selected &&
          <>
            <Divide />
            <VStack width={`${54 / 16}rem`} align={{ horizontal: 'center', vertical: 'center' }}>
              {
                props.paused ?
                  <Button icon={<Icon symbol={PlaySymbol} />} appearance="text" size='md' onClick={props.onPlay}></Button> :
                  <Button icon={<Icon symbol={PauseSymbol} />} appearance="text" size='md' onClick={props.onPause}></Button>
              }
            </VStack>
          </>
        }
      </HStack>
    </Card>;
  }
};

const GuideToolbar: FC = () => {

  const { match, orientation } = useDimension();
  const [cardSelectIndex, setCardSelectIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, hideGuideToolbar] = useGuideToolbarStore(store => [store.visible, store.hide]);

  const size: 'md' | 'lg' | 'xl' = match('sm') ?
    'md' :
    match('md') ?
      (orientation === 'landscape' ? 'md' : 'lg') :
      match('lg') ?
        'lg' :
        'xl';

  const onPlay = useCallback(() => {
    setPaused(false);
  }, []);

  const onPause = useCallback(() => {
    setPaused(true);
  }, []);

  return <Toolbar
    title="路线引导"
    visible={visible}
    closeButton={<Button icon={<Icon symbol={ArrowDownSymbol} />} appearance="text-reverse">收起</Button>}
    onClose={hideGuideToolbar}
    maxWidth={740}
  >
    <VStack
      margin={{ left: match('sm') ? `${-16 / 16}rem` : 0, right: match('sm') ? `${-16 / 16}rem` : 0 }}
    >
      <CardSlider
        padding={{ left: match('sm') ? `${16 / 16}rem` : 0, right: match('sm') ? `${16 / 16}rem` : 0 }}
        selectedIndex={cardSelectIndex}
        gap={size === 'md' ? `${8 / 16}rem` : size === 'lg' ? `${10 / 16}rem` : `${12 / 16}rem`}
        onSelect={(index) => {
          if (index !== cardSelectIndex) {
            setCardSelectIndex(index);
            setPaused(false);
          }
        }}
        fadeSide={match('>sm')}
        scrollArrowStep={144}
        cards={[
          <GuideCard size={size} text='最多七个文字最多七个文字' paused={paused} onPlay={onPlay} onPause={onPause} />,
          <GuideCard size={size} text='最多' paused={paused} onPlay={onPlay} onPause={onPause} />,
          <GuideCard size={size} text='最多七个文字最多七个文字' paused={paused} onPlay={onPlay} onPause={onPause} />,
          <GuideCard size={size} text='最多七个文字最多七个文字' paused={paused} onPlay={onPlay} onPause={onPause} />,
          <GuideCard size={size} text='最多七个文字最多七个文字' paused={paused} onPlay={onPlay} onPause={onPause} />,
          <GuideCard size={size} text='最多七个文字最多七个文字' paused={paused} onPlay={onPlay} onPause={onPause} />,
          <GuideCard size={size} text='最多七个文字最多七个文字' paused={paused} onPlay={onPlay} onPause={onPause} />
        ]}
      />
    </VStack>
  </Toolbar>;
};

export { GuideToolbar };
