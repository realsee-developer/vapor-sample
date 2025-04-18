import { store } from '../utils/createStore';

interface StoreType {

  visible: boolean;

  show(): void;
  hide(): void;
}

const [SpaceDialogStore, useSpaceDialogStore] = store<StoreType>((set, get) => ({

  visible: false,

  show() {
    set({ visible: true });
  },

  hide() {
    set({ visible: false });
  }


}));

export {
  SpaceDialogStore,
  useSpaceDialogStore
};
