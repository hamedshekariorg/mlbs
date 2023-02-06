import request, { centralURL } from './request';
import { normalizeStates } from 'utils/common.utils';

// create the states api url
export const getStatesUrl = (countryId) =>
  `${centralURL}/countries/${countryId}/states`;

// actually get the states from api
export const getStates = async (countryId) => {
  const response = await request.get(getStatesUrl(countryId));
  if (response.ok) {
    return Promise.all(normalizeStates(response.data?.data));
  }
  return null;
};
