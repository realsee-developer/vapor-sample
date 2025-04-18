import { Box, Button, Card, Grid, Icon, Modal, RealseeSymbol, Text, useDimension, VStack } from '@realsee/vapor';
import { FC } from 'react';

const List: FC<{ visible: boolean; onClose: () => void; }> = ({ visible, onClose }) => {
  const { match } = useDimension();
  const datasource: { name: string }[] = [
    {
      name: '青青园中葵',
    },
    {
      name: '朝露待日晞',
    },
    {
      name: '阳春布德泽',
    },
    {
      name: '万物生光辉',
    },
    {
      name: '常恐秋节至',
    },
    {
      name: '焜黄华叶衰',
    },
    {
      name: '百川东到海',
    },
    {
      name: '何时复西归',
    },
    {
      name: '少壮不努力',
    },
    {
      name: '老大徒伤悲',
    }
  ];

  const cells = (data: { name: string }, cellIndex: number, rowIndex: number, columnIndex: number) => {
    const image = `https://placehold.co/400x300`;

    return <Box boxShadow={true}>
      <Card
        aspect={1.5}
        image={image}
        round={{
          bottomLeft: 0,
          bottomRight: 0,
          topLeft: `${4 / 16}rem`,
          topRight: `${4 / 16}rem`,
        }}>
        <VStack flex={1} align={{ vertical: 'end', horizontal: 'start' }}>
          <div
            style={{
              borderRadius: `${12 / 16}rem`,
              margin: `${8 / 16}rem`,
              background: 'rgba(0, 0, 0, 0.1)',
              display: 'flex',
              width: `${24 / 16}rem`,
              height: `${24 / 16}rem`
            }}
          >
            <Button icon={<Icon symbol={RealseeSymbol} />} flex={1}></Button>
          </div>
        </VStack>
      </Card>
      <VStack
        padding={{
          top: `${10 / 16}rem`,
          left: `${12 / 16}rem`,
          right: `${12 / 16}rem`,
          bottom: `${16 / 16}rem`,
        }
        }>
        <Text wrap={1} size='md'>{`${rowIndex}/${columnIndex} 上图下文的格式: ${data.name}`}</Text>
      </VStack>
    </Box>
  };

  return <Modal
    visible={visible}
    onClose={onClose}
    scrollable
  >
    <Grid columnCount={match('sm') ? 2 : 4} padding={10} datasource={datasource} cells={cells} />
  </Modal>
}

export { List };
