import { Button, Drawer, HStack, Icon, Tabs, TabsPane, useDimension, VStack } from '@realsee/vapor';
import React, { FC } from 'react';
import { useMainPanelStore } from '../stores/main-panel';

const MainPanel: FC = () => {
  const [state, setState] = useMainPanelStore();
  const { match } = useDimension();

  const handleClose = () => {
    setState(prev => ({ ...prev, open: false }));
  };

  const handleTabChange = (key: string) => {
    setState(prev => ({ ...prev, activeKey: key as any }));
  };

  const handleOpen = () => {
    setState(prev => ({ ...prev, open: true }));
  };

  const getDrawerWidth = () => {
    if (match('sm')) return '100%';
    if (match('md')) return '75%';
    return '400px';
  };

  return (
    <>
      <Button
        position="absolute"
        right="16px"
        bottom="80px"
        shape="circle"
        className="main-panel-trigger"
        onClick={handleOpen}
      >
        <Icon type="info" />
      </Button>

      <Drawer
        position="right"
        width={getDrawerWidth()}
        isOpen={state.open}
        onClose={handleClose}
      >
        <VStack
          width="100%"
          height="100%"
          background="#fff"
        >
          <HStack
            width="100%"
            height="56px"
            padding="0 16px"
            borderBottom="1px solid #eee"
            align={{
              vertical: 'center'
            }}
            justify="space-between"
          >
            <h3 style={{ margin: 0, fontSize: '18px' }}>项目信息</h3>
            <Button shape="circle" type="flat" onClick={handleClose}>
              <Icon type="close" />
            </Button>
          </HStack>

          <Tabs value={state.activeKey} onChange={handleTabChange}>
            <TabsPane label="房源信息" value="info">
              <VStack padding="16px">
                <h4>贝壳·如视项目</h4>
                <p>这是一个使用@realsee/vapor构建的VR看房应用示例。</p>
                <p>通过这个示例，您可以了解如何使用vapor组件构建专业的VR看房应用。</p>
              </VStack>
            </TabsPane>
            <TabsPane label="用户评论" value="comment">
              <VStack padding="16px">
                <p>暂无评论</p>
              </VStack>
            </TabsPane>
            <TabsPane label="地图位置" value="map">
              <VStack padding="16px">
                <p>地图功能暂未实现</p>
              </VStack>
            </TabsPane>
          </Tabs>
        </VStack>
      </Drawer>
    </>
  );
};

export { MainPanel };
