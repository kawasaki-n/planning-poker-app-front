import axios from 'axios';

import { API_URL } from '@/constants';

export const loadConnections = (): Promise<any> => {
  return axios.get(API_URL + '/connections').then((res) => res.data);
};
