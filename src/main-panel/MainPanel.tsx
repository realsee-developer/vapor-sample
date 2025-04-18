import { ModalRoute, RouterModal } from '@realsee/vapor';
import { FC } from "react";
import { useMainPanelStore } from '../stores/main-panel';
import { About } from './pages/About';
import { Album } from './pages/Album';
import { Infomation } from './pages/Infomation';
import { Map } from './pages/Map';

const MainPanel: FC = () => {

  const [history, setHistory] = useMainPanelStore(store => [store.history, store.setHistory]);

  return <RouterModal
    visible={history.length > 0}
    history={history}
    onHistoryChange={history => {
      setHistory(history);
    }}
    onClose={() => setHistory([])}
  >
    <ModalRoute title='泛海国际 2室1厅' path='/info' scrollable>
      <Infomation />
    </ModalRoute>

    <ModalRoute path='/map' fullContent>
      <Map />
    </ModalRoute>

    <ModalRoute path='/album' scrollable maxWidth={765}>
      <Album />
    </ModalRoute>

    <ModalRoute title='权益声明' subtitle='当前版本更新于 2020年10月25日' path='/about' scrollable>
      <About />
    </ModalRoute>
  </RouterModal>;
};

export { MainPanel };
