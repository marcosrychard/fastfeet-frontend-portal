import {
  SIGN_OUT,
  SAVE_USER_INFO,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from './actionTypes';

export default {
  [SIGN_IN_REQUEST](state) {
    state.authStatus = 'loading';
  },
  [SIGN_IN_SUCCESS](state, { token, user }) {
    state.authStatus = 'success';
    state.token = token;
    state.user = user;
  },
  [SIGN_IN_FAILURE](state) {
    state.authStatus = 'failure';
  },
  [SAVE_USER_INFO](state, data) {
    state.token = data.access_token;
    state.user = data.user;
  },
  [SIGN_OUT](state) {
    state.authStatus = '';
    state.token = '';
  },
};
