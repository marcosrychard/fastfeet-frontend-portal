/* eslint-disable no-unused-vars */
import axios from 'axios';
import AuthService from '@/shared/services/auth.service';
import {
  saveAuthInfo,
  destroyAuthInfo,
  getAuthInfo,
} from '@/shared/services/local-storage.service';
import {
  SAVE_USER_INFO,
  SIGN_OUT,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from './actionTypes';

export default {
  signin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(SIGN_IN_REQUEST);

      AuthService.signin(payload)
        .then((response) => {
          const { data } = response;

          const { user } = data;

          const token = data.access_token;

          saveAuthInfo(data);

          axios.defaults.headers.common.Authorization = `Bearer ${ token}`;

          commit(SIGN_IN_SUCCESS, { token, user });

          resolve(response);
        })
        .catch((error) => {
          commit(SIGN_IN_FAILURE);

          destroyAuthInfo();

          reject(error);
        });
    });
  },
  signout({ commit }) {
    return new Promise((resolve, _reject) => {
      commit(SIGN_OUT);

      destroyAuthInfo();

      delete axios.defaults.headers.common.Authorization;

      resolve();
    });
  },
  saveUserInfo({ commit }) {
    const userInfo = getAuthInfo();

    commit(SAVE_USER_INFO, userInfo);
  },
  userLogout({ commit }) {
    window.localStorage.removeItem('token');

    window.localStorage.removeItem('tokenExpiration');

    window.localStorage.removeItem('user');

    commit(SIGN_OUT);
  },
};
