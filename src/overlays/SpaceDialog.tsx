import { Card, Fieldset, Grid, Icon, Modal, RealseeSymbol, TabView, Text, VStack, ZStack, useDimension } from '@realsee/vapor';
import { FC } from 'react';
import { useSpaceDialogStore } from '../stores/space-dialog';

const getMedia = () => {
  return "https://placehold.co/200x100?";
}

const dataSource = [
  {
    category: ['文化', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: true,
  },
  {
    category: ['文化', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['文化', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['文化', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['文化', '标题文字2'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['文化', '标题文字2'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['文化', '标题文字2'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['文化', '标题文字2'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['居家', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['居家', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['居家', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['居家', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['居家', '标题文字2'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['居家', '标题文字2'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['居家', '标题文字2'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['居家', '标题文字2'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['健康生活', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['美食', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['娱乐', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['打豆豆', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  },
  {
    category: ['深井冰', '标题文字1'],
    media: getMedia(),
    title: '我有一行很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
    select: false,
  }
];

const SpaceDialog: FC = () => {

  const { match, width, height, orientation } = useDimension();
  const [visible, hideSpaceDialog] = useSpaceDialogStore(store => [store.visible, store.hide]);

  let columnCount = 2;
  if (width > 520) {
    columnCount = 3;
  }
  if (width > 800) {
    columnCount = 4;
  }


  const panels: {
    tab: string;
    contents: {
      category: string;
      datas: {
        media: string;
        title: string;
        select: boolean
      }[];
    }[];
  }[] = [];

  for (const item of dataSource) {
    for (const tabName of ['全部', item.category[0]]) {
      let matched = panels.find(({ tab }) => tab === tabName);
      if (!matched) {
        matched = {
          tab: tabName,
          contents: [],
        }
        panels.push(matched);
      }
      let matched2 = matched.contents.find(({ category }) => category === item.category[1]);
      if (!matched2) {
        matched2 = {
          category: item.category[1],
          datas: [],
        }
        matched.contents.push(matched2);
      }
      matched2.datas.push(item);
    }
  }

  return <Modal
    title="空间切换"
    visible={visible}
    onClose={hideSpaceDialog}
    maxWidth={`${740 / 16}rem`}
  >
    <TabView
      width="100%"
      flex={1}
      tabSize={
        match('sm') ?
          'md' :
          match('md') ?
            (orientation === 'landscape' ? 'md' : 'lg') :
            match('lg') ?
              'lg' :
              'xl'
      }
      tabbarMargin={{
        top: match('<=md') ? 0 : `${9 / 16}rem`,
        bottom: match('<=md') ? `${23 / 16}rem` : `${32 / 16}rem`
      }}
      tabGap={
        match('sm') ?
          `${32 / 16}rem` :
          match('md') ?
            (orientation === 'landscape' ? `${32 / 16}rem` : `${65 / 16}rem`) :
            `${65 / 16}rem`
      }
      onTabChange={() => {
        console.log(1);
      }}
    >
      {
        panels.map((item) => {
          return <TabView.Panel key={item.tab} tabKey={item.tab} name={item.tab} scrollable preload>
            <VStack
              gap={match('<=md') ? `${32 / 16}rem` : `${40 / 16}rem`}
              padding={{
                bottom: `${50 / 16}rem`
              }}
            >
              {
                item.contents.map((item, key) => {
                  return <Fieldset
                    legend={
                      <Text
                        size={
                          match('sm') ?
                            'md' :
                            match('md') ?
                              (orientation === 'landscape' ? 'md' : 'lg') :
                              match('lg') ?
                                'lg' :
                                'xl'
                        }
                      >{item.category}</Text>
                    }
                    legendGap={
                      match('sm') ?
                        `${12 / 16}rem` :
                        match('md') ?
                          (orientation === 'landscape' ? `${12 / 16}rem` : `${16 / 16}rem`) :
                          `${16 / 16}rem`
                    }
                    key={key}
                  >
                    <Grid
                      datasource={item.datas}
                      columnCount={columnCount}
                      columnGap={
                        match('sm') ?
                          `${8 / 16}rem` :
                          match('md') ?
                            (orientation === 'landscape' ? `${8 / 16}rem` : `${12 / 16}rem`) :
                            match('lg') ?
                              `${12 / 16}rem` :
                              `${16 / 16}rem`
                      }
                      rowGap={
                        match('sm') ?
                          `${23 / 16}rem` :
                          match('md') ?
                            (orientation === 'landscape' ? `${23 / 16}rem` : `${34 / 16}rem`) :
                            `${34 / 16}rem`
                      }
                      cells={(data, index) => {
                        return <VStack
                          gap={
                            match('sm') ?
                              `${6 / 16}rem` :
                              match('md') ?
                                (orientation === 'landscape' ? `${6 / 16}rem` : `${8 / 16}rem`) :
                                match('lg') ?
                                  `${8 / 16}rem` :
                                  `${12 / 16}rem`
                          }
                        >
                          <Card
                            key={index}
                            image={data.media}
                            width="100%"
                            aspect={1.33}
                            selected={data.select}
                          >
                            <ZStack width="100%" height="100%" padding={`${8 / 16}rem`}>
                              {data.select &&
                                <ZStack width="100%" height="100%" align={{ horizontal: 'start', vertical: 'start' }}>
                                  <Text size='sm' weight="bold" opacity="80" appearance="solid" solidBackground={['#6672FF', '#6D92FF']}>当前空间</Text>
                                </ZStack>
                              }
                              <ZStack width="100%" height="100%" align={{ horizontal: 'start', vertical: 'end' }}>
                                <Text appearance="solid" solidBackground="rgba(0, 0, 0, 0.1)" solidRound="50%"><Icon symbol={RealseeSymbol} size="md"></Icon></Text>
                              </ZStack>
                            </ZStack>
                          </Card>
                          <Text
                            size={
                              match('sm') ?
                                'md' :
                                match('md') ?
                                  (orientation === 'landscape' ? 'md' : 'lg') :
                                  match('lg') ?
                                    'lg' :
                                    'xl'
                            }
                          >{data.title}</Text>
                        </VStack>
                      }}
                    />
                  </Fieldset>
                })
              }
            </VStack>
          </TabView.Panel>
        })
      }
    </TabView>
  </Modal>;
};

export { SpaceDialog };
