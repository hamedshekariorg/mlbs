import request from 'services/request';
import {
  GET_FAQ_ERROR,
  GET_FAQ_REQUEST,
  GET_FAQ_SUCCESS,
} from './faq.constant';
import { getFaqUrl } from './faq.service';

export const getFaqAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_FAQ_REQUEST });
    const response = await request.get(getFaqUrl(), { page: 1 });
    if (response.ok) {
      dispatch({
        type: GET_FAQ_SUCCESS,
        payload: response.data.data.entities,
      });
    } else {
      dispatch({ type: GET_FAQ_ERROR });
    }
  };
};
