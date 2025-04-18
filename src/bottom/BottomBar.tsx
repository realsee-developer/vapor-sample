import {
  Avatar, Button,
  Divide,
  Exchange2Symbol,
  Font, HStack,
  Icon,
  Image,
  LayerSymbol,
  PaperPlaneSymbol,
  PersonSymbol,
  PlaySymbol,
  RuleSymbol,
  SettingsSymbol,
  ShareSymbol,
  SingleBottomBar,
  SshapedArrowSymbol,
  SystemSymbol,
  TagListSymbol,
  TagSymbol,
  TelephoneSymbol,
  Text, usePopup,
  VStack
} from '@realsee/vapor';
import { FC, useState } from 'react';
import { useGuideToolbarStore } from '../stores/guide-toolbar';
import { useQuickSwitchToolbarStore } from '../stores/quick-switch-toolbar';
import { useSpaceDialogStore } from '../stores/space-dialog';

import { useDispatchOverlayComponent } from '@realsee/vapor';
import { List } from '../overlays/List';
import { useMainPanelStore } from '../stores/main-panel';

const Popup: FC = () => {

  const { dismiss } = usePopup();
  return <Font opacity='100'>
    <HStack gap={`${30 / 16}rem`} padding={{ left: `${24 / 16}rem`, right: `${24 / 16}rem` }}>
      <HStack gap={`${20 / 16}rem`}>
        <Button appearance='text-vertical' size="xl" icon={<Icon symbol={RuleSymbol} type="outline" />} onClick={dismiss}>关闭浮层</Button>
        <Button appearance='text-vertical' size="xl" icon={<Icon symbol={TagSymbol} type="outline" />}>Button</Button>
      </HStack>
      <HStack gap={`${20 / 16}rem`}>
        <Image round={`${4 / 16}rem`} src="https://placehold.co/100x100" width={`${88 / 16}rem`} height={`${88 / 16}rem`} />
        <VStack>
          <Text>手机扫一扫</Text>
          <Text>体验VR眼镜</Text>
        </VStack>
      </HStack>
    </HStack>
  </Font>;
};

const BottomBar: FC = () => {

  const showQuickSwitchToolbar = useQuickSwitchToolbarStore(store => store.show);
  const showGuideToolbar = useGuideToolbarStore(store => store.show);
  const showSpaceDialog = useSpaceDialogStore(store => store.show);
  const dispatch = useDispatchOverlayComponent(List);
  const [, setHistory] = useMainPanelStore(store => [store.history, store.setHistory]);
  const [visible, setVisible] = useState(false);

  const leftAddition = <Font opacity='50'>
    <Button onClick={() => setHistory(['/about'])}>
      <Text>
        <Image width={`${51 / 16}rem`} height={`${24 / 16}rem`} src='./static/logo.png' />
      </Text>
    </Button>
  </Font>
  const rightAddition = <Font opacity='50'>
    <Button onClick={() => setHistory(['/about'])}>权益声明</Button>
  </Font>

  return <SingleBottomBar
    launcherVisible={visible}
    launcherVisibleChange={(visible) => setVisible(visible)}
    avatar={<Avatar image="https://placehold.co/128x128" name='沐小夏' description="北京弘源房地产" />}
    buttons={[
      <Button
        icon={<Icon symbol={PaperPlaneSymbol} />}
        onClick={showQuickSwitchToolbar}
      >速览</Button>,
      <Button
        icon={<Icon symbol={Exchange2Symbol} />}
        onClick={showSpaceDialog}
      >空间切换</Button>,
      <Button
        icon={<Icon symbol={SshapedArrowSymbol} />}
        onClick={showGuideToolbar}
      >路线引导</Button>,
      <Button
        icon={<Icon symbol={ShareSymbol} />}
        popup={<Popup />}
        popupPlacement="top"
      >出现浮层</Button>,
      <Button
        icon={<Icon symbol={LayerSymbol} />}
        popup={
          <VStack padding={{ top: `${10 / 16}rem`, bottom: `${10 / 16}rem` }} gap={`${20 / 16}rem`} width={`${52 / 16}rem`} maxHeight={`${140 / 16}rem`} scrollable>
            <VStack><Button size="md" opacity="50">1F</Button></VStack>
            <VStack>
              <Button size="md">2F</Button>
              <Divide opacity={0.8} offset={{ y: `${5 / 16}rem` }} />
            </VStack>
            <VStack><Button size="md" opacity="50">3F</Button></VStack>
            <VStack><Button size="md" opacity="50">4F</Button></VStack>
          </VStack>
        }
      >Button</Button>,
      <Button
        icon={<Icon symbol={TagListSymbol} />}
        onClick={() => { dispatch({}) }}
      >VR列表</Button>,
      <Button
        icon={<Icon symbol={SettingsSymbol} />}
      >Button</Button>,
      <Button
        icon={<Icon symbol={TelephoneSymbol} />}
      >Button</Button>,
      <Button
        icon={<Icon symbol={PlaySymbol} />}
      >Button</Button>,
      <Button
        icon={<Icon symbol={PersonSymbol} />}
      >Button</Button>,
      <Button
        icon={<Icon symbol={SystemSymbol} />}
      >有四个字</Button>,
    ]}
    leftAddition={leftAddition}
    rightAddition={rightAddition}
  />;
};

export { BottomBar };
