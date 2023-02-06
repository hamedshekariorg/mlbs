import request from 'services/request';
import { message } from 'antd';
import {
  GET_TOUR_PACKAGE_LIST_REQUEST,
  GET_TOUR_PACKAGE_LIST_SUCCESS,
  GET_TOUR_PACKAGE_LIST_ERROR,
  GET_TOUR_REQUEST,
  GET_TOUR_SUCCESS,
  GET_TOUR_ERROR,
} from './tourPackage.constant';
import {
  getTourPackageListUrl,
  getTourPackageUrl,
  postTourPackageLikeUrl,
} from './tourPackage.service';
import { getCookie } from 'utils/auth.utils';
import { handleLikeInList } from 'utils/tourPackage.utils';

export const getTourListAction = (params) => {
  return async (dispatch) => {
    dispatch({ type: GET_TOUR_PACKAGE_LIST_REQUEST });
    const response = await request.get(getTourPackageListUrl(), params);
    if (response.ok) {
      const payload = response.data.data;
      dispatch({
        type: GET_TOUR_PACKAGE_LIST_SUCCESS,
        payload,
      });
    } else {
      dispatch({ type: GET_TOUR_PACKAGE_LIST_ERROR });
    }
  };
};

export const postLikeAction = (id, status) => {
  return async (dispatch, selector) => {
    dispatch({ type: GET_TOUR_PACKAGE_LIST_REQUEST });
    const response = await request.post(
      postTourPackageLikeUrl(id, status ? 'like' : 'dislike'),
    );
    if (response.ok) {
      let tourPackageList = selector().tourPackage.tourList.data;
      const payload = handleLikeInList({ list: tourPackageList, id, status });
      dispatch({
        type: GET_TOUR_PACKAGE_LIST_SUCCESS,
        payload,
      });
    } else {
      if (response.data.code === 403) {
        message.warning('Please login!');
      }
    }
  };
};

export const getTourPackageAction = (id) => {
  return async (dispatch, selector) => {
    dispatch({ type: GET_TOUR_REQUEST });
    const response = await request.get(getTourPackageUrl(id));
    const payload = response.data.data;
    if (response.ok) {
      dispatch({
        type: GET_TOUR_SUCCESS,
        payload,
      });
    } else {
      dispatch({ type: GET_TOUR_ERROR });
    }
  };
};
