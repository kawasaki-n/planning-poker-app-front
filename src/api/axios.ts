import _axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from '@/constants';

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
};

export const axios = _axios.create(config);
