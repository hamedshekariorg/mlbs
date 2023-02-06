import request from 'services/request';
import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_ERROR, GET_CATEGORIES_SUCCESS } from './categories.constant';

import {
  getCategoriesUrl
} from './categories.service';


export const getCategoriesAction = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: GET_CATEGORIES_REQUEST });
    const response = await request.get(getCategoriesUrl(), {
      page,
    });
    if (response.ok) {
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({ type: GET_CATEGORIES_ERROR });
    }
  };
};

