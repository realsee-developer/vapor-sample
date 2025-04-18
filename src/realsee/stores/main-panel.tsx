import React, { FC } from 'react';
import { createStore } from '../utils/createStore';

export type MainPanelStateType = {
  open: boolean;
  activeKey: 'info' | 'comment' | 'map';
};

const { Provider, useStore } = createStore<MainPanelStateType>({
  open: false,
  activeKey: 'info',
});

export const useMainPanelStore = useStore;

export const MainPanelStore: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <Provider>{children}</Provider>;
};
