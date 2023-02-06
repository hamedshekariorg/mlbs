import { create } from 'apisauce';
import Router from 'next/router';
import { message } from 'antd';
import { getCookie } from 'utils/auth.utils';

const isDevelopment = process.env.NODE_ENV !== 'production';
const serviceId =
  process.env.NEXT_PUBLIC_MLBS_SERVICE_ID || '60fd1e0470faa73861648608';

const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://api.mlbs.stg.blytd.com';

const centralURL =
  process.env.NEXT_PUBLIC_Central_URL || 'https://api.central.stg.blytd.com';

const RoleId =
  process.env.NEXT_PUBLIC_MLBS_ROLE_ID || '60fd1e3b488d08610b48c0d4';

// create main request configs
const request = (() => {
  const headers = {
    'Service-ID': serviceId,
    'Content-Type': 'application/json',
  };

  // eslint-disable-next-line no-underscore-dangle
  const _api = create({
    baseURL,
    headers,
  });

  return _api;
})();

request.addRequestTransform(async (req) => {
  const _token = getCookie('access_token');
  const currency = getCookie('currency');
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const lang = window.location.pathname.split('/');
  req.headers['Lang'] = lang[1] || 'ch';
  // req.headers['Currency'] = currency || 'USD';

  if (serviceId) {
    req.headers['Service-ID'] = serviceId.toString();
  }
  if (_token) {
    req.headers['Authorization'] = `Bearer ${_token}`;
  }
});

export const logOutOnTokenExpired = () => {
  removeAllItem();
  Router.router.push('/login');
};

/*
 * handle unexpected error here.
 * if access token expire we get an 401 error on api requests and logout.
 */
request.axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    // if request status is 401 should be redirect to login
    if (error.response.status === 401) {
      logOutOnTokenExpired();
      request.setHeader('Authorization', '');
      return Promise.reject(error);
    }
    return error;
  },
);

// for show notification on errors.
export const requestMonitor = (response) => {
  const dict = {
    CLIENT_ERROR: 'CLIENT ERROR',
    SERVER_ERROR: 'SERVER ERROR',
    TIMEOUT_ERROR: 'TIMEOUT ERROR',
    CONNECTION_ERROR: 'CONNECTION ERROR',
    NETWORK_ERROR: 'NETWORK ERROR',
    CANCEL_ERROR: 'CANCEL ERROR',
    UNKNOWN_ERROR: 'UNKNOWN ERROR',
  };
  const originalMessage = response?.data?.message || dict[response.problem];

  if (!response.ok) {
    message.warning(originalMessage);
  }
};

export default request;
export { baseURL, centralURL, isDevelopment, RoleId };
