import axios from 'axios';
import useInterceptors from './interceptors.service';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
});

useInterceptors(instance);

export default () => instance;
