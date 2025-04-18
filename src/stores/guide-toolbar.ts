import { store } from '../utils/createStore';

interface StoreType {

  visible: boolean;

  show(): void;
  hide(): void;
}

const [GuideToolbarStore, useGuideToolbarStore] = store<StoreType>((set, get) => ({

  visible: false,

  show() {
    set({ visible: true });
  },

  hide() {
    set({ visible: false });
  }


}));

export {
  GuideToolbarStore,
  useGuideToolbarStore
};