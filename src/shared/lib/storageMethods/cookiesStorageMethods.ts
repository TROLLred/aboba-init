import { Cookies } from 'react-cookie';

const cookies = new Cookies(null, { path: '/' });
type CookiesType = typeof cookies;

export const cookiesStorageMethods = {
  setItem: (name: string, value: unknown): void =>
    cookies.set(name, JSON.stringify(value)),
  /**
   * T = ожидаемый интерфейс на выходе
   */
  getItem: <T extends unknown | Record<string, unknown>>(
    name: string,
  ): T | null => {
    const entity: string | undefined = cookies.get(name);
    if (!entity) return null;
    try {
      return JSON.parse(entity);
    } catch {
      return entity as T;
    }
  },
  removeItem: (name: string) => cookies.remove(name),
  getAll: (options?: Parameters<CookiesType['getAll']>[number]) =>
    cookies.getAll(options),
};
