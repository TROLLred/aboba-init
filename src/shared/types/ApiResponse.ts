export type ApiResponse<T> = {
  success: boolean; // ?
  message: string;
  error: string;
  result: T;
  serviceName: string;
  timestamp: number;
  accessToken: string | null;
};

export type ApiQueryError<T> = {
  error: {
    data: T;
    status: number;
  };
};
