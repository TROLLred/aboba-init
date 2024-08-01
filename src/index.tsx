import * as ReactDOM from 'react-dom/client';

import App from '@app/app';
import { StoreProvider } from '@app/providers/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
);
