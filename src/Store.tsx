import { GuideToolbarStore } from './stores/guide-toolbar';
import { MainPanelStore } from './stores/main-panel';
import { QuickSwitchToolbarStore } from './stores/quick-switch-toolbar';
import { SpaceDialogStore } from './stores/space-dialog';
import { compose } from './utils/createStore';
const Store = compose(MainPanelStore, QuickSwitchToolbarStore, GuideToolbarStore, SpaceDialogStore);

export { Store };
