import { combineReducers } from '@reduxjs/toolkit';

import { rtkApi } from '@shared/api/rtkq/rtkApi';

const appReducer = combineReducers({
  [rtkApi.reducerPath]: rtkApi.reducer,
});

export const rootReducer = (...params: Parameters<typeof appReducer>) => {
  const [state, action] = params;
  return appReducer(state, action);
};
