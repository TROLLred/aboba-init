import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './reducers';

import { rtkApi } from '@shared/api/rtkq/rtkApi';

export function createReduxStore(initialState?: RootStateType) {
  return configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatchType = AppStore['dispatch'];
