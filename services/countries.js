import request, { centralURL } from './request';
import { normalizeCountries, normalizeCountryNames } from 'utils/common.utils';

export const getCountriesUrl = () => `${centralURL}/countries`;

export const getCountries = async (params) => {
  const response = await request.get(getCountriesUrl(), params);
  if (response.ok) {
    return Promise.all(normalizeCountries(response.data?.data));
  }
  return null;
};

export const getCountryNames = async (params) => {
  const response = await request.get(getCountriesUrl(), params);
  if (response.ok) {
    return Promise.all(normalizeCountryNames(response.data?.data));
  }
  return null;
};
