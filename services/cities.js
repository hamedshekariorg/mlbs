import { normalizeCities } from 'utils/common.utils';
import request, { centralURL } from './request';

// create the states api url
export const getCitiesUrl = (countryId, stateId) =>
  `${centralURL}/countries/${countryId}/states/${stateId}/cities`;

// actually get the states from api
export const getCities = async (countryId, stateId) => {
  const response = await request.get(getCitiesUrl(countryId, stateId));
  if (response.ok) {
    return Promise.all(normalizeCities(response.data?.data));
  }
  return null;
};
