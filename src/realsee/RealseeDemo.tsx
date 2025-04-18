import { Button, HStack, VStack } from '@realsee/vapor';
import React, { useState } from 'react';
import { App } from './App';
import { PhoneLandscape, PhonePortrait } from './Phone';
import { Store } from './Store';
import { work } from './data-source/work';

const RealseeDemo: React.FC = () => {
  const [viewMode, setViewMode] = useState<'portrait' | 'landscape' | 'fullscreen'>('portrait');

  return (
    <VStack
      width="100%"
      height="100%"
      padding="16px"
      gap="16px"
    >
      <HStack
        width="100%"
        justify="center"
        gap="16px"
      >
        <Button
          type={viewMode === 'portrait' ? 'primary' : 'default'}
          onClick={() => setViewMode('portrait')}
        >
          手机竖屏
        </Button>
        <Button
          type={viewMode === 'landscape' ? 'primary' : 'default'}
          onClick={() => setViewMode('landscape')}
        >
          手机横屏
        </Button>
        <Button
          type={viewMode === 'fullscreen' ? 'primary' : 'default'}
          onClick={() => setViewMode('fullscreen')}
        >
          全屏模式
        </Button>
      </HStack>

      <VStack
        width="100%"
        flex="1"
        align={{
          horizontal: 'center'
        }}
        justify="center"
        overflow="auto"
      >
        <Store>
          {viewMode === 'portrait' && (
            <PhonePortrait>
              <App
                work={work}
                safeArea={{ insetTop: 44 }}
                width="100%"
                height="100%"
              />
            </PhonePortrait>
          )}

          {viewMode === 'landscape' && (
            <PhoneLandscape>
              <App
                work={work}
                safeArea={{ insetTop: 44 }}
                width="100%"
                height="100%"
              />
            </PhoneLandscape>
          )}

          {viewMode === 'fullscreen' && (
            <div style={{ width: '100%', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
              <App
                work={work}
                safeArea={{ insetTop: 0 }}
                width="100%"
                height="100%"
              />
            </div>
          )}
        </Store>
      </VStack>

      <VStack
        width="100%"
        padding="16px"
        background="#f5f5f5"
        borderRadius="8px"
      >
        <h3 style={{ margin: '0 0 8px' }}>Realsee 示例说明</h3>
        <p style={{ margin: '0 0 8px' }}>此示例展示了如何使用 @realsee/vapor 组件库构建专业的VR看房应用。主要特点包括：</p>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>使用Five引擎渲染VR场景</li>
          <li>响应式布局，支持多种设备尺寸</li>
          <li>丰富的UI交互组件</li>
          <li>多种查看模式切换</li>
          <li>模拟真实手机界面的展示</li>
        </ul>
      </VStack>
    </VStack>
  );
};

export default RealseeDemo;
