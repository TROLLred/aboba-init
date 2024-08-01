import { TokenService } from '../services/tokenService';

export const getAuthHeaders = () => {
  const accessToken = TokenService.getAccessToken();
  const headers: Record<string, string> = {};
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  headers.contentType = 'application/json';

  return headers;
};
