import axios from 'axios';

import {AxiosErrorHandler} from '../utils/helpers/axiosHelper';

axios.interceptors.response.use(response => response, AxiosErrorHandler);
axios.defaults.headers.common.accept = 'application/json';

export const agendaApiAxios = axios.create({
  baseURL: 'https://www.boredapi.com/api',
});

const APIS = [axios, agendaApiAxios];

APIS.forEach(api =>
  api.interceptors.response.use(response => response, AxiosErrorHandler),
);
