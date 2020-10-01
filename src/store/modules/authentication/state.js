import { getAuthInfo } from '@/shared/services/local-storage.service';

export default {
  authStatus: '',
  token: getAuthInfo() && getAuthInfo().access_token,
  user: {},
};
