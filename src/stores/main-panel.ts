import { store } from '../utils/createStore';

interface StoreType {

  history: string[];

  setHistory(history: string[]): void;

}

const [MainPanelStore, useMainPanelStore] = store<StoreType>((set, get) => ({

  history: [],

  setHistory(history: string[]) {
    set({ history: history });
  },

}));

export {
  MainPanelStore,
  useMainPanelStore
};