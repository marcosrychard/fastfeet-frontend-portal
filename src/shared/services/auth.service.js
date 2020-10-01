import httpService from './http.service';

export default {
  signin(user) {
    return httpService().post('auth/signin', user);
  },
  signup(user) {
    return httpService().post('auth/signup', user);
  },
};
