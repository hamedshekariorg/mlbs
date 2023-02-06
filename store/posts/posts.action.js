import request from 'services/request';
import { extractionMedias, timeAgo } from 'utils/common.utils';
import {
  GET_IRAN_REQUEST,
  GET_IRAN_SUCCESS,
  GET_IRAN_ERROR,
  GET_HANDICRAFTS_REQUEST,
  GET_HANDICRAFTS_SUCCESS,
  GET_HANDICRAFTS_ERROR,
  GET_HISTORY_REQUEST,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_ERROR,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_ERROR,
  GET_RELATED_REQUEST,
  GET_RELATED_SUCCESS,
  GET_RELATED_ERROR,
  GET_RECENT_REQUEST,
  GET_RECENT_SUCCESS,
  GET_RECENT_ERROR,
} from './posts.constant';
import { getPostDetailsUrl, getPostsUrl } from './posts.service';

export const getIranAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_IRAN_REQUEST });
    const response = await request.get(getPostsUrl(), { tag: 'Iran', page: 1 });
    if (response.ok) {
      const payload = extractionMedias(response.data.data.entities);
      dispatch({ type: GET_IRAN_SUCCESS, payload });
    } else {
      dispatch({ type: GET_IRAN_ERROR });
    }
  };
};

export const getHandicraftsAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_HANDICRAFTS_REQUEST });
    const response = await request.get(getPostsUrl(), {
      page: 1,
      tag: 'Handicrafts',
    });
    if (response.ok) {
      const payload = extractionMedias(response.data.data.entities);
      dispatch({ type: GET_HANDICRAFTS_SUCCESS, payload });
    } else {
      dispatch({ type: GET_HANDICRAFTS_ERROR });
    }
  };
};

export const getHistoryAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_HISTORY_REQUEST });
    const response = await request.get(getPostsUrl(), {
      page: 1,
      tag: 'History',
    });
    if (response.ok) {
      const payload = extractionMedias(response.data.data.entities);
      dispatch({ type: GET_HISTORY_SUCCESS, payload });
    } else {
      dispatch({ type: GET_HISTORY_ERROR });
    }
  };
};

export const getDetailsAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_DETAILS_REQUEST });
    const response = await request.get(getPostDetailsUrl(id));
    if (response.ok) {
      const data = response.data.data;
      dispatch({
        type: GET_DETAILS_SUCCESS,
        payload: {
          ...data,
          image: Object.values(data.medias)[0],
          timeAgo: timeAgo(data.updated_at),
        },
      });
    } else {
      dispatch({ type: GET_DETAILS_ERROR });
    }
  };
};

export const getRelatedAction = (tag) => {
  return async (dispatch) => {
    dispatch({ type: GET_RELATED_REQUEST });
    const response = await request.get(getPostsUrl(), { tag, page: 1 });
    if (response.ok) {
      const payload = extractionMedias(response.data.data.entities);
      dispatch({ type: GET_RELATED_SUCCESS, payload });
    } else {
      dispatch({ type: GET_RELATED_ERROR });
    }
  };
};

export const getRecentAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_RECENT_REQUEST });
    const response = await request.get(getPostsUrl(), { page: 1 });
    if (response.ok) {
      const payload = extractionMedias(response.data.data.entities);
      dispatch({ type: GET_RECENT_SUCCESS, payload });
    } else {
      dispatch({ type: GET_RECENT_ERROR });
    }
  };
};
