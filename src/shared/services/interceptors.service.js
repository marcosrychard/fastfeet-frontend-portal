import { destroyAuthInfo } from './local-storage.service';

export default (http) => {
  // Add a request interceptor
  http.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
  );

  // Add a response interceptor
  http.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        destroyAuthInfo();
        return Promise.reject(error);
      }

      if (error.response.status === 401) {
        window.location.href = '/';
        destroyAuthInfo();
      } else {
        return Promise.reject(error);
      }
      return Promise.reject(error);
    },
  );
};
