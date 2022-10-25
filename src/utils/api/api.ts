import { create } from 'apisauce';

const api = create({
  baseURL: 'https://i.instagram.com/api/v1',
});

export const authenticationApi = create({
  baseURL: 'http://192.168.1.17:5000',
});

export default api;
