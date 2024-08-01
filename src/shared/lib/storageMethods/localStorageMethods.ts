export const localStorageMethods = {
  setItem: (name: string, value: unknown): void =>
    localStorage.setItem(name, JSON.stringify(value)),
  /**
   * T = ожидаемый интерфейс на выходе
   */
  getItem: <T extends unknown | Record<string, unknown>>(
    name: string,
  ): T | null => {
    const entity: string | null = localStorage.getItem(name);
    if (!entity) return null;
    try {
      return JSON.parse(entity);
    } catch {
      return entity as T;
    }
  },
  removeItem: (name: string) => localStorage.removeItem(name),
};
