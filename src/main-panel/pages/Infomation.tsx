import { ArrowRightSymbol, Button, Card, Divide, Fieldset, Font, HStack, Icon, Image, Text, useDimension, useModalRouter, VStack } from '@realsee/vapor';
import { FC } from 'react';

const Infomation: FC = () => {
  const { push } = useModalRouter();
  const { match, orientation } = useDimension();

  const fieldWith = match('sm') ? '50%' : '25%';
  const fieldLegendGap = match('sm') || (match('md') && orientation === 'landscape') ? `${1 / 16}rem` : `${2 / 16}rem`;
  const fieldPadding = match('sm') || (match('md') && orientation === 'landscape') ? { top: `${6 / 16}rem`, bottom: `${6 / 16}rem` } : { top: `${12 / 16}rem`, bottom: `${12 / 16}rem` };
  const blockGap = match('sm') ? `${26 / 16}rem` : `${28 / 16}rem`;
  const blockTitleSize = match('sm') || (match('md') && orientation === 'landscape') ? 'md' : 'lg';
  const blockTitleGap = match('sm') ? `${6 / 16}rem` : `${4 / 16}rem`;
  const marginTop = match('sm') || (match('md') && orientation === 'landscape') ? `${2 / 16}rem` : `${18 / 16}rem`;

  return <VStack gap={blockGap} padding={{ top: marginTop }}>

    <VStack gap={blockTitleGap}>
      <Text size={blockTitleSize} weight='bold'>空间信息</Text>
      <HStack wrap align={{ horizontal: 'start', vertical: 'start' }}>
        <Fieldset maxWidth="100%" width={fieldWith} legend="售价" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>约600万</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="单价" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>55431元/m²</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="户型" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>2室1厅</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="面积" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>108.42m²</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="挂牌" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>2022年05月08日</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="朝向" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>南 北</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="年代" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>2003年</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="楼型" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>板楼</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="城市" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>北京</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="楼层" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>中楼层 / 6层</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="供暖类型" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>集中供暖</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width="100%" legend="地址" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text size='md'>北京市朝阳区京通快速北关桥东北角泛海国际家园</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width="100%" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>泛海国际房源南北通透两居室，客厅和主卧室朝南，客厅朝南，主卧带阳台，次卧室朝北，厨房朝北带生活阳台，卫生间在中间使用方便，交通便利，商圈配套设施完善。</Text>
        </Fieldset>
      </HStack>
    </VStack>

    <VStack gap={blockTitleGap}>
      <Text size={blockTitleSize} weight='bold'>小区信息</Text>
      <HStack wrap align={{ horizontal: 'start', vertical: 'start' }}>
        <Fieldset maxWidth="100%" width={fieldWith} legend="建成年代" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>2003年</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="绿化率" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>38%</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="容积率" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>1.5</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="物业费用" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>0.7元/月/m²</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="燃气费用" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>2.6元/m³</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="固定车位" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>316</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="停车费" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>150元/月/位</Text>
        </Fieldset>
        <Fieldset maxWidth="100%" width={fieldWith} legend="物业公司" legendGap={fieldLegendGap} padding={fieldPadding}>
          <Text wrap size='md'>北京天鸿宝地物业公司</Text>
        </Fieldset>
        {
          match('sm') ?
            <>
              <Fieldset maxWidth="100%" width="100%" legend="周边配套" legendGap={fieldLegendGap} padding={fieldPadding}>
                <Card
                  height={`${150 / 16}rem`}
                  width="100%"
                  image="https://vr-image-4.realsee-cdn.cn/release/web/map/static-map.a543e63d.png"
                  round={`${4 / 16}rem`}
                  onClick={() => push('/map')}
                />
              </Fieldset>
              <Fieldset maxWidth="100%" width="100%" legend="小区图片" legendGap={fieldLegendGap} padding={fieldLegendGap}>
                <HStack gap={`${4 / 16}rem`} align={{ vertical: 'stretch' }}>
                  <VStack flex={2}>
                    <Card flex={1} aspect={1.5} width="100%" image="https://placehold.co/400x300" round={`${4 / 16}rem`} onClick={() => push('/album?index=0')} />
                  </VStack>
                  <VStack flex={1} gap={`${4 / 16}rem`}>
                    <Card flex={1} width="100%" image="https://placehold.co/400x300" round={`${4 / 16}rem`} onClick={() => push('/album?index=1')} />
                    <Card flex={1} width="100%" image="https://placehold.co/400x300" round={`${4 / 16}rem`} mask={0.5} onClick={() => push('/album?index=0')}>
                      <VStack flex={2} align={{ horizontal: 'center', vertical: 'center' }}>
                        <Button appearance='text-reverse' icon={<Icon symbol={ArrowRightSymbol} />} size="sm">查看更多</Button>
                      </VStack>
                    </Card>
                  </VStack>
                </HStack>
              </Fieldset>
            </> :
            <>
              <HStack width="100%" gap={4} align={{ vertical: 'stretch' }} margin={{ top: `${24 / 16}rem`, bottom: `${15 / 16}rem` }}>
                <VStack flex={2}>
                  <Card
                    flex={1}
                    width="100%"
                    aspect={1.5}
                    image="https://vr-image-4.realsee-cdn.cn/release/web/map/static-map.a543e63d.png"
                    round={`${4 / 16}rem`}
                    onClick={() => push('/map')}
                  />
                </VStack>
                <VStack flex={2}>
                  <Card flex={1} width="100%" aspect={1.5} image="https://placehold.co/400x300" round={`${4 / 16}rem`} onClick={() => push('/album?index=0')} />
                </VStack>
                <VStack flex={1} gap={`${4 / 16}rem`}>
                  <Card flex={1} width="100%" image="https://placehold.co/400x300" round={`${4 / 16}rem`} onClick={() => push('/album?index=1')} />
                  <Card flex={1} width="100%" image="https://placehold.co/400x300" round={`${4 / 16}rem`} onClick={() => push('/album?index=0')}>
                    <VStack flex={2} align={{ horizontal: 'end', vertical: 'end' }} margin={{ right: `${4 / 16}rem`, bottom: `${4 / 16}rem` }}>
                      <Text size="sm" appearance='solid'>查看更多房源</Text>
                    </VStack>
                  </Card>
                </VStack>
              </HStack>
            </>
        }

      </HStack>
    </VStack>

    <VStack>
      <HStack align={{ horizontal: 'start', vertical: 'start' }}>
        <VStack flex={1} maxWidth="100%" width="50%" gap={blockTitleGap}>
          <Text size={blockTitleSize} weight='bold'>采集信息</Text>
          <VStack
            gap={`${12 / 16}rem`}
            padding={{ top: match('sm') ? `${6 / 16}rem` : `${17 / 16}rem` }}
          >
            <Font size={match('sm') || (match('md') && orientation === 'landscape') ? "sm" : 'md'}>
              <Text>采集设备：伽罗华-RS41010</Text>
              <Text>深度数据：850nm Lidar</Text>
              <Text>彩色信息：2048*2048px</Text>
              <Text>采集高度：112.4cm</Text>
              <Text>采集人员：专业VR采集者</Text>
            </Font>
          </VStack>
        </VStack>
        {
          match('sm') ?
            <VStack padding={{ top: `${45 / 16}rem` }}>
              <Image width={`${80 / 16}rem`} height={`${110 / 16}rem`} fit="contain" src="https://vr-static.realsee-cdn.cn/release/web/shootdevice/tinified/shootdevice-radar.15873535.png" />
            </VStack> :
            <VStack padding={{ top: `${30 / 16}rem` }}>
              <Image width={`${130 / 16}rem`} height={`${179 / 16}rem`} fit="contain" src="https://vr-static.realsee-cdn.cn/release/web/shootdevice/tinified/shootdevice-radar.15873535.png" />
            </VStack>
        }
      </HStack>
    </VStack>
    <VStack
      align={{ horizontal: 'center' }}
      margin={{ top: 0 }}
      gap={match('sm') ? `${12 / 16}rem` : `${16 / 16}rem`}
    >
      <Divide />
      <Text opacity='50'>于2022年02月10日采集</Text>
    </VStack>
  </VStack>
}

export { Infomation };
