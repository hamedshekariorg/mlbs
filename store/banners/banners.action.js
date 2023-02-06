import request from 'services/request';
import {
  GET_BANNERS_ERROR,
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
} from './banners.constant';
import { getBannersUrl } from './banners.service';

export const getBannersAction = (type) => {
  return async (dispatch) => {
    dispatch({ type: GET_BANNERS_REQUEST });
    const response = await request.get(getBannersUrl(), { page: 1, type });
    if (response.ok) {
      dispatch({
        type: GET_BANNERS_SUCCESS,
        payload: response.data.data,
      });
    } else {
      dispatch({ type: GET_BANNERS_ERROR });
    }
  };
};
