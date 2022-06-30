import { ConnectionType } from '@/type';

import { axios } from './axios';

export const loadConnections = (): Promise<ConnectionType> => {
  return axios.get(`/connection`).then((res) => res.data);
};

export const updateConnection = (id: string | undefined, payload: any): Promise<any> => {
  return axios.put(`/connection/${id}`, payload).then((res) => res.data);
};
