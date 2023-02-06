import request from 'services/request';
import {
  GET_SEASONS_ERROR,
  GET_SEASONS_REQUEST,
  GET_SEASONS_SUCCESS,
} from './seasons.constant';
import { getSeasonsUrl } from './seasons.service';

export const getSeasonsAction = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: GET_SEASONS_REQUEST });
    const response = await request.get(getSeasonsUrl(), {
      page,
    });
    if (response.ok) {
      dispatch({
        type: 'GET_SEASONS_SUCCESS',
        payload: response.data.data.entities,
      });
    } else {
      dispatch({ type: GET_SEASONS_ERROR });
    }
  };
};
