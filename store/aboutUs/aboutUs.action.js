import request from 'services/request';
import { extractionMedias } from 'utils/common.utils';
import {
  GET_SPECIALTIES_ERROR,
  GET_SPECIALTIES_REQUEST,
  GET_SPECIALTIES_SUCCESS,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  GET_TEAM_ERROR,
  GET_PREAMBLE_REQUEST,
  GET_PREAMBLE_SUCCESS,
  GET_PREAMBLE_ERROR,
} from './aboutUs.constant';
import {
  getSpecialtiesUrl,
  getTeamUrl,
  getPreambleUrl,
} from './aboutUs.service';

export const getSpecialtiesAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_SPECIALTIES_REQUEST });
    const response = await request.get(getSpecialtiesUrl(), { page: 1 });
    if (response.ok) {
      const normalData = extractionMedias(response.data.data.entities);
      dispatch({
        type: GET_SPECIALTIES_SUCCESS,
        payload: normalData,
      });
    } else {
      dispatch({ type: GET_SPECIALTIES_ERROR });
    }
  };
};

export const getTeamAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_TEAM_REQUEST });
    const response = await request.get(getTeamUrl(), { page: 1 });
    if (response.ok) {
      dispatch({
        type: GET_TEAM_SUCCESS,
        payload: response.data.data,
      });
    } else {
      dispatch({ type: GET_TEAM_ERROR });
    }
  };
};

export const getPreamble = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PREAMBLE_REQUEST });
    const response = await request.get(getPreambleUrl(), { page: 1 });
    if (response.ok) {
      const data = response.data.data;
      const normalData = {
        ...data,
        image: data.medias ? Object.values(data.medias)[0] : '',
      };
      dispatch({
        type: GET_PREAMBLE_SUCCESS,
        payload: normalData,
      });
    } else {
      dispatch({ type: GET_PREAMBLE_ERROR });
    }
  };
};
