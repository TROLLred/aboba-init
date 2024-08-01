import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const isFulfilledPromise = <T>(
  input: PromiseSettledResult<T>,
): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';
export const isRejectedPromise = <T>(
  input: PromiseSettledResult<T>,
): input is PromiseRejectedResult => input.status === 'rejected';

export function isFetchError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error !== null && 'status' in error;
}
