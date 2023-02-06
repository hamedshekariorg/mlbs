import request from 'services/request';
import {
  GET_EXCEPTIONAL_ADVENTURES_ERROR,
  GET_EXCEPTIONAL_ADVENTURES_REQUEST,
  GET_EXCEPTIONAL_ADVENTURES_SUCCESS,
  GET_UNESCO_ERROR,
  GET_UNESCO_REQUEST,
  GET_UNESCO_SUCCESS,
  GET_POPULAR_ATTRACTIONS_ERROR,
  GET_POPULAR_ATTRACTIONS_REQUEST,
  GET_POPULAR_ATTRACTIONS_SUCCESS,
  GET_SEASON_ATTRACTIONS_REQUEST,
  GET_SEASON_ATTRACTIONS_SUCCESS,
  GET_SEASON_ATTRACTIONS_ERROR,
  GET_ATTRACTIONS_LIST_REQUEST,
  GET_ATTRACTIONS_LIST_SUCCESS,
  GET_ATTRACTIONS_LIST_ERROR,
  GET_ATTRACTIONS_REQUEST,
  GET_ATTRACTIONS_SUCCESS,
  GET_ATTRACTIONS_ERROR,
  GET_FILTER_ATTRACTIONS_REQUEST,
  GET_FILTER_ATTRACTIONS_SUCCESS,
  GET_FILTER_ATTRACTIONS_ERROR,
  GET_EDIT_REQUEST,
  GET_EDIT_SUCCESS,
  GET_EDIT_ERROR,
} from './attractions.constant';
import {
  getAllAttractionsUrl,
  getAttractionsUrl,
  getEditAttractionUrl,
  getExceptionalAdventuresUrl,
  getPopularAttractionsUrl,
  getSeasonAttractionsUrl,
  getUnescoUrl,
} from './attractions.service';
import {
  normalizeAttractionsImages,
  normalizeSingleAttractions,
} from 'utils/attraction.utils';
import { message } from 'antd';

export const getExceptionalAttractionsAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_EXCEPTIONAL_ADVENTURES_REQUEST });
    const response = await request.get(getExceptionalAdventuresUrl());
    if (response.ok) {
      dispatch({
        type: GET_EXCEPTIONAL_ADVENTURES_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({ type: GET_EXCEPTIONAL_ADVENTURES_ERROR });
    }
  };
};

export const getUnescoAction = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: GET_UNESCO_REQUEST });
    const response = await request.get(getUnescoUrl(), {
      type: 'UNESCO',
      page,
    });
    if (response.ok) {
      const payload = await normalizeAttractionsImages(
        response.data.data.entities,
      );
      dispatch({
        type: GET_UNESCO_SUCCESS,
        payload,
      });
    } else {
      dispatch({ type: GET_UNESCO_ERROR });
    }
  };
};

export const getPopularAttractionsAction = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: GET_POPULAR_ATTRACTIONS_REQUEST });
    const response = await request.get(getPopularAttractionsUrl(), { page });
    if (response.ok) {
      const payload = await normalizeAttractionsImages(
        response.data.data.entities,
      );
      dispatch({
        type: GET_POPULAR_ATTRACTIONS_SUCCESS,
        payload,
      });
    } else {
      dispatch({ type: GET_POPULAR_ATTRACTIONS_ERROR });
    }
  };
};

export const getAttractionsListAction = (params) => {
  return async (dispatch) => {
    dispatch({ type: GET_ATTRACTIONS_LIST_REQUEST });
    const response = await request.get(getAllAttractionsUrl(), params);
    if (response.ok) {
      const payload = await normalizeAttractionsImages(
        response.data.data.entities,
      );
      dispatch({
        type: GET_ATTRACTIONS_LIST_SUCCESS,
        payload,
        number_of_pages: response.data.data.number_of_pages,
      });
    } else {
      dispatch({ type: GET_ATTRACTIONS_LIST_ERROR });
    }
  };
};

export const getFilterAttractionsAction = (params) => {
  return async (dispatch) => {
    dispatch({ type: GET_FILTER_ATTRACTIONS_REQUEST });
    const response = await request.get(getAllAttractionsUrl(), params);
    if (response.ok) {
      const payload = await normalizeAttractionsImages(
        response.data.data.entities,
      );

      dispatch({
        type: GET_FILTER_ATTRACTIONS_SUCCESS,
        payload,
        number_of_pages: response.data.data.number_of_pages,
      });
    } else {
      dispatch({ type: GET_FILTER_ATTRACTIONS_ERROR });
    }
  };
};

export const getSeasonAttractionsAction = (params) => {
  return async (dispatch) => {
    dispatch({ type: GET_SEASON_ATTRACTIONS_REQUEST });
    const response = await request.get(getSeasonAttractionsUrl(), params);
    if (response.ok) {
      const payload = await normalizeAttractionsImages(
        response.data.data.entities,
      );
      dispatch({
        type: GET_SEASON_ATTRACTIONS_SUCCESS,
        payload,
      });
    } else {
      dispatch({ type: GET_SEASON_ATTRACTIONS_ERROR });
    }
  };
};

export const getAttractionsAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_ATTRACTIONS_REQUEST });
    const response = await request.get(getAttractionsUrl(id));
    if (response.ok) {
      const payload = await normalizeSingleAttractions(response.data.data);
      dispatch({
        type: GET_ATTRACTIONS_SUCCESS,
        payload: payload,
      });
    } else {
      dispatch({ type: GET_ATTRACTIONS_ERROR });
    }
  };
};
export const getEditAttractionAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: GET_EDIT_REQUEST });
    const response = await request.post(getEditAttractionUrl(), data);
    if (response.ok) {
      dispatch({ type: GET_EDIT_SUCCESS });
    } else {
      dispatch({ type: GET_EDIT_ERROR });
    }
  };
};
