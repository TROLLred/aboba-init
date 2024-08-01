import './styles/index.scss';
import '@shared/styles/index.scss';
import '@shared/lib/domyland';
import { Page } from './providers/ui/Page';

import { MainPage } from '@pages/MainPage';

const App: React.FC = () => {
  return (
    <Page>
      <MainPage />
    </Page>
  );
};

export default App;
