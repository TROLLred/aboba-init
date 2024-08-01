import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getAuthHeaders } from '../../lib/apiHelpers/getAuthHeaders';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SERVER + '/program-api',
  credentials: 'same-origin',
  prepareHeaders: (headers) => {
    const authHeaders = getAuthHeaders();

    Object.entries(authHeaders).forEach(([key, value]) => {
      headers.set(key, value);
    });

    const accept = headers.get('Accept') ?? '';
    headers.set('Accept', accept);

    return headers;
  },
});

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
