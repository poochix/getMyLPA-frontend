import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';

import { env } from '@/config/env';
import { ApiError } from '@/lib/api-error';

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,

  timeout: 15_000,

  withCredentials: true,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Authentication will be handled through HTTP-only cookies.
    // Do not manually read or attach JWT tokens from localStorage.

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response,

  (error: AxiosError) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    const responseData = error.response?.data as
      | {
          message?: string;
          code?: string;
          details?: unknown;
        }
      | undefined;

    const statusCode = error.response?.status ?? 0;
    const message =
      responseData?.message ??
      (error.code === 'ECONNABORTED'
        ? 'The request timed out. Please try again.'
        : error.response
          ? 'Something went wrong while processing your request.'
          : 'Unable to connect to the server. Please check your connection.');

    const apiError = new ApiError({
      message,
      statusCode,
      code: responseData?.code,
      details: responseData?.details,
    });

    return Promise.reject(apiError);
  },
);
