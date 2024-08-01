export interface PaginationWrapper<T> {
  perPage: number;
  currentPage: number;
  totalPages: number;
  total: number;
  count: number;
  items: T;
}
