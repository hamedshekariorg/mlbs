import { getCookie } from 'utils/auth.utils';
export const getCommentsUrl = (id) => `/comments/${id}`;
export const postCommentsUrl = (id) => getCookie('access_token') ? `/comments/${id}` : `/comments/customers/${id}`;
