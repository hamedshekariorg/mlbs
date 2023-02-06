import request from 'services/request';
import { destroyCookie, parseCookies, setCookie as setNookie } from 'nookies';

export const universalAtob = (b64Encoded) => {
  try {
    return atob(b64Encoded);
  } catch (err) {
    return Buffer.from(b64Encoded, 'base64').toString();
  }
};

export const setCookie = (name, value, params = {}) => {
  setNookie(null, name, value, { path: '/', ...params });
};

export const GetTokenExpireTime = (token) => {
  const hash = token.split('.');
  const result = JSON.parse(universalAtob(hash[1])).exp;
  return new Date(result * 1000);
};

export const setUaaCookie = (token) => {
  const tokenExpires = GetTokenExpireTime(token);
  setCookie('access_token', token, { expires: tokenExpires });
  request.setHeader('Authorization', `Bearer ${token}`);
};

export const getCookie = (name) => {
  return parseCookies()[name];
};

export const removeCookie = (name) => {
  destroyCookie({}, name, { path: '/' });
  request.deleteHeader('Authorization');
};

export const EXPIRE_OTP_CODE_TIME = {
  minutes: 2,
};
