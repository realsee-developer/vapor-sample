import { MainPanelStore } from './stores/main-panel';
import { compose } from './utils/createStore';

const Store = compose(MainPanelStore);

export { Store };
