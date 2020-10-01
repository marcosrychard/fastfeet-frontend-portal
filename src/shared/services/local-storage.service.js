import { userKey } from '@/global';

export const getAuthInfo = () => JSON.parse(localStorage.getItem(userKey));

export const saveAuthInfo = (data) => {
  localStorage.setItem(userKey, JSON.stringify(data));
};

export const destroyAuthInfo = () => {
  localStorage.removeItem(userKey);
};

export default { getAuthInfo, saveAuthInfo, destroyAuthInfo };
