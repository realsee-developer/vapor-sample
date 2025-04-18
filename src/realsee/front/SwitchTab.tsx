import { Mode } from '@realsee/five';
import { useFiveInstance, useFiveState } from '@realsee/five/react';
import { Button, HStack, Icon } from '@realsee/vapor';
import React, { FC } from 'react';

const SwitchTab: FC = () => {
  const five = useFiveInstance();
  const [fiveState] = useFiveState();

  const switchToFloorplan = () => {
    if (five && fiveState.mode !== Mode.Floorplan) {
      five.changeMode(Mode.Floorplan);
    }
  };

  const switchToPanorama = () => {
    if (five && fiveState.mode !== Mode.Panorama) {
      five.changeMode(Mode.Panorama);
    }
  };

  const switchToModel = () => {
    if (five && fiveState.mode !== Mode.Model) {
      five.changeMode(Mode.Model);
    }
  };

  return (
    <HStack
      width="auto"
      height="40px"
      background="rgba(0, 0, 0, 0.4)"
      align={{
        vertical: 'center'
      }}
      borderRadius="40px"
      padding="0 4px"
      gap="4px"
    >
      <Button
        size="small"
        shape="round"
        type={fiveState.mode === Mode.Panorama ? 'primary' : 'default'}
        onClick={switchToPanorama}
      >
        <Icon type="panorama" />
        <span>全景</span>
      </Button>
      <Button
        size="small"
        shape="round"
        type={fiveState.mode === Mode.Model ? 'primary' : 'default'}
        onClick={switchToModel}
      >
        <Icon type="model" />
        <span>模型</span>
      </Button>
      <Button
        size="small"
        shape="round"
        type={fiveState.mode === Mode.Floorplan ? 'primary' : 'default'}
        onClick={switchToFloorplan}
      >
        <Icon type="floorplan" />
        <span>户型</span>
      </Button>
    </HStack>
  );
};

export { SwitchTab };
