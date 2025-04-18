import {
  Avatar,
  Block,
  Button,
  Card,
  CardSlider,
  Divide,
  EditSymbol,
  Exchange2Symbol,
  ExchangeSymbol,
  Fieldset,
  Font,
  HandbagSymbol,
  HomeSignalSymbol,
  HStack,
  Icon,
  Image,
  PaperPlaneSymbol,
  PersonSymbol,
  RealseeSymbol,
  Rule2Symbol,
  RuleSymbol,
  SingleBottomSheet,
  SshapedArrowSymbol, TagListSymbol,
  TagOnSymbol,
  Text,
  useDispatchOverlayComponent,
  VRGlassSymbol,
  VStack
} from '@realsee/vapor';
import { FC, useState } from 'react';
import { List } from '../overlays/List';
import { useGuideToolbarStore } from '../stores/guide-toolbar';
import { useMainPanelStore } from '../stores/main-panel';
import { useQuickSwitchToolbarStore } from '../stores/quick-switch-toolbar';
import { useSpaceDialogStore } from '../stores/space-dialog';

const Toolbox: FC = () => {
  return <Fieldset legend="工具箱" size='sm'>
    <HStack>
      <HStack flex={1} align={{ horizontal: 'start' }}>
        <Button icon={<Icon symbol={RuleSymbol} type='outline' />} size='sm' onClick={() => alert('显示标尺')}>显示标尺</Button>
      </HStack>
      <HStack flex={1} align={{ horizontal: 'center' }}>
        <Button icon={<Icon symbol={TagOnSymbol} type='outline' />} size='sm' onClick={() => alert('隐藏标签')}>隐藏标签</Button>
      </HStack>
      <HStack flex={1} align={{ horizontal: 'end' }}>
        <Button icon={<Icon symbol={VRGlassSymbol} type='outline' />} size='sm' onClick={() => alert('VR 眼镜')}>VR 眼镜</Button>
      </HStack>
    </HStack>
  </Fieldset>;
};

const Toolbox2: FC = () => {
  return <Fieldset legend="工具箱2" size='sm'>
    <HStack align={{ horizontal: 'space-between' }}>
      <Button appearance='text-vertical' icon={<Icon symbol={RuleSymbol} type='outline' />} size='md' onClick={() => alert('显示标尺')}>显示标尺</Button>
      <Button appearance='text-vertical' icon={<Icon symbol={TagOnSymbol} type='outline' />} size='md' onClick={() => alert('隐藏标签')}>隐藏标签</Button>
      <Button appearance='text-vertical' icon={<Icon symbol={VRGlassSymbol} type='outline' />} size='md' onClick={() => alert('VR 眼镜')}>VR 眼镜</Button>
      <Button appearance='text-vertical' icon={<Icon symbol={Rule2Symbol} type='outline' />} size='md' onClick={() => alert('测距')}>测距</Button>
    </HStack>
  </Fieldset>;
};

const Gallery: FC = () => {
  const [cardSelectIndex, setCardSelectIndex] = useState(0);
  return <Fieldset legend="推荐房源">
    <VStack margin={{ left: `${-20 / 16}rem`, right: `${-20 / 16}rem` }}>
      <CardSlider
        padding={{ left: `${20 / 16}rem`, right: `${20 / 16}rem` }}
        selectedIndex={cardSelectIndex}
        onSelect={(index) => setCardSelectIndex(index)}
        cards={[
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100" onClick={() => alert('card0')}>
            <VStack flex={1} align={{ horizontal: 'center', vertical: 'center' }}>
              <Text size='md'>客厅</Text>
              <Text size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100" onClick={() => alert('card1')}>
            <VStack flex={1} align={{ horizontal: 'center', vertical: 'center' }}>
              <Text size='md'>客厅</Text>
              <Text size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100" onClick={() => alert('card2')}>
            <VStack flex={1} align={{ horizontal: 'center', vertical: 'center' }}>
              <Text size='md'>客厅</Text>
              <Text size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100" onClick={() => alert('card3')}>
            <VStack flex={1} align={{ horizontal: 'center', vertical: 'center' }}>
              <Text size='md'>客厅</Text>
              <Text size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100" onClick={() => alert('card4')}>
            <VStack flex={1} align={{ horizontal: 'center', vertical: 'center' }}>
              <Text size='md'>客厅</Text>
              <Text size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100" onClick={() => alert('card5')}>
            <VStack flex={1} align={{ horizontal: 'center', vertical: 'center' }}>
              <Text size='md'>客厅</Text>
              <Text size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100" onClick={() => alert('card6')}>
            <VStack flex={1} align={{ horizontal: 'center', vertical: 'center' }}>
              <Text size='md'>客厅</Text>
              <Text size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100" onClick={() => alert('card7')}>
            <VStack flex={1} align={{ horizontal: 'center', vertical: 'center' }}>
              <Text size='md'>客厅</Text>
              <Text size='sm'>20m2</Text>
            </VStack>
          </Card>,
          <Card width={`${132 / 16}rem`} height={`${90 / 16}rem`} image="https://placehold.co/200x100" onClick={() => alert('card8')}>
            <VStack flex={1} align={{ horizontal: 'center', vertical: 'center' }}>
              <Text size='md'>客厅</Text>
              <Text size='sm'>20m2</Text>
            </VStack>
          </Card>,
        ]}
      />
    </VStack>
  </Fieldset>;
};

const About: FC = () => {

  return <Fieldset legend="了解如视">
    <Text wrap={2} onClick={() => window.open('https://realsee.com')}>
      如视作<Icon symbol={RuleSymbol} type="outline" />为VR空间重构领域的领导者，为全行业提供三维空间的采集、
      展示、重建能力，打造低成本，如视可能会或者允如视作为VR空间
      重构领域的领导者，为全行业提供三维空间的采集、展示、重建能力，
      打造低成本，如视可能会或者允
    </Text>
  </Fieldset>;
};

const Camera: FC = () => {
  return <Fieldset legend="采集信息">
    <HStack align={{ horizontal: 'start', vertical: 'start' }}>
      <VStack flex={1} maxWidth="100%" width="50%">
        <VStack gap={`${10 / 16}rem`}>
          <Font size="sm">
            <Text>采集设备：伽罗华-RS41010</Text>
            <Text>深度数据：850nm Lidar</Text>
            <Text>彩色信息：2048*2048px</Text>
            <Text>采集高度：112.4cm</Text>
            <Text>采集人员：专业VR采集者</Text>
          </Font>
        </VStack>
      </VStack>
      <VStack padding={{ top: `${8 / 16}rem` }}>
        <Image width={`${80 / 16}rem`} height={`${110 / 16}rem`} fit="contain" src="https://vr-static.realsee-cdn.cn/release/web/shootdevice/tinified/shootdevice-radar.15873535.png" />
      </VStack>
    </HStack>
  </Fieldset>;
};

const Foot: FC = () => {

  const setHistory = useMainPanelStore(store => store.setHistory);

  return <VStack gap={`${16 / 16}rem`}>
    <Divide />
    <div style={{ transform: 'scale(0.95)' }}>
      <HStack gap={`${20 / 16}rem`} padding={{ bottom: `${4 / 16}rem` }} align={{ vertical: 'stretch' }}>
        <Font opacity='30'>
          <HStack flex={1} align={{ horizontal: 'end' }}>
            <Button
              icon={<Icon symbol={RealseeSymbol} />}
              canIconOpacity
              onClick={() => setHistory(['/about'])}
            >如视官网</Button>
          </HStack>
          <Divide />
          <HStack flex={1} align={{ horizontal: 'start' }}>
            <Button
              onClick={() => setHistory(['/about'])}
            >权益声明</Button>
          </HStack>
        </Font>
      </HStack>
    </div>
  </VStack>
};

const BottomSheet: FC = () => {

  const showQuickSwitchToolbar = useQuickSwitchToolbarStore(store => store.show);
  const showGuideToolbar = useGuideToolbarStore(store => store.show);
  const showSpaceDialog = useSpaceDialogStore(store => store.show);
  const dispatchList = useDispatchOverlayComponent(List);
  const [snap, setSnap] = useState<string>();
  const setHistory = useMainPanelStore(store => store.setHistory);

  const buttons = [
    <Button icon={<Icon symbol={PaperPlaneSymbol} />} onClick={showQuickSwitchToolbar}>速览</Button>,
    <Button icon={<Icon symbol={Exchange2Symbol} />} onClick={showSpaceDialog}>空间切换</Button>,
    <Button icon={<Icon symbol={SshapedArrowSymbol} />} onClick={showGuideToolbar}>路线引导</Button>,
    <Button icon={<Icon symbol={TagListSymbol} />} onClick={() => dispatchList({})}>VR列表</Button>,
    <Button icon={<Icon symbol={HandbagSymbol} />}>Button</Button>,
    <Button icon={<Icon symbol={PersonSymbol} />}>Button</Button>,
    <Button icon={<Icon symbol={HomeSignalSymbol} />}>Button</Button>,
    <Button icon={<Icon symbol={EditSymbol} />}>Button</Button>,
    <Button icon={<Icon symbol={ExchangeSymbol} />}>Button</Button>,
  ];

  return <SingleBottomSheet
    avatar={
      <Avatar
        image="https://placehold.co/128x128"
        name='沐小夏'
        description="北京弘源房地产"
      />
    }
    buttons={buttons}
    snap={snap}
    onSnapChange={(snap) => {
      setSnap(snap);
    }}
    addition={
      <Block margin={{
        top: `${11 / 16}rem`,
        left: `${14 / 16}rem`,
        right: `${14 / 16}rem`,
        bottom: `${11 / 16}rem`,
      }}>
        <Font opacity='50'>
          <Button onClick={() => setHistory(['/about'])}>
            <Text>
              <Image width={`${51 / 16}rem`} height={`${24 / 16}rem`} src='./static/logo.png' />
            </Text>
          </Button>
        </Font>
      </Block>
    }
  >
    <VStack gap={`${20 / 16}rem`}>
      <VStack gap={`${30 / 16}rem`}>
        <Toolbox />
        <Toolbox2 />
        <Gallery />
        <Camera />
        <About />
      </VStack>
      <Foot />
    </VStack>
  </SingleBottomSheet>

};

export { BottomSheet };
