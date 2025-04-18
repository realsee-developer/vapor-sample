import { Button, Dialog, HStack, Text, useDimension, VStack } from '@realsee/vapor';
import { FC } from 'react';

const Share: FC<{ visible: boolean; onClose: () => void; }> = ({ visible, onClose }) => {

  const { match } = useDimension();

  return <Dialog
    title='分享'
    visible={visible}
    onClose={onClose}
  >
    <VStack gap={`${32 / 16}rem`}>
      <HStack width="100%" gap={`${12 / 16}rem`} align={{ vertical: 'stretch' }}>
        <Text appearance='solid' size="md" width={`${100 / 16}rem`} flex={1}>https://realsee.com/ke/novE3BBk6Jo36lRK/ND56eVW459ru7h1h1T1rPwgHoLnlY7ky/?v3=1</Text>
        <Button appearance='solid' size='lg' color='primary'>复制</Button>
      </HStack>
      {match('sm') &&
        <Button appearance='solid' size='lg' onClick={onClose}>取消</Button>
      }
    </VStack>
  </Dialog>;
};

export { Share };
