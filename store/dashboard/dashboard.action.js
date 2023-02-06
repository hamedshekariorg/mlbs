import request from 'services/request';
import {
  addMomentUrl,
  deleteMomentMediaUrl,
  deleteMomentUrl,
  editMomentUrl,
  getMomentsUrl,
  uploadImageUrl,
} from './dashboard.service';
import {
  DELETE_MOMENT_ERROR,
  DELETE_MOMENT_REQUSET,
  DELETE_MOMENT_SUCCESS,
  GET_MOMENTS_ERROR,
  GET_MOMENTS_REQUSET,
  GET_MOMENTS_SUCCESS,
  SAVE_MOMENT_ERROR,
  SAVE_MOMENT_REQUSET,
  SAVE_MOMENT_SUCCESS,
} from './dashboard.constant';

export const getMomenstAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MOMENTS_REQUSET });
    const response = await request.get(getMomentsUrl(), { page: 1 });
    if (response.ok) {
      dispatch({
        type: GET_MOMENTS_SUCCESS,
        payload: response.data.data.entities,
      });
    } else {
      dispatch({ type: GET_MOMENTS_ERROR });
    }
  };
};

export const putMomentAction = (data, id) => {
  return async (dispatch) => {
    dispatch({ type: SAVE_MOMENT_REQUSET });
    const response = await request.put(editMomentUrl(id), data);
    if (response.ok) {
      dispatch({ type: SAVE_MOMENT_SUCCESS });
    } else {
      dispatch({ type: SAVE_MOMENT_ERROR });
    }
  };
};

export const postMomentAction = (data, media) => {
  return async (dispatch) => {
    dispatch({ type: SAVE_MOMENT_REQUSET });
    const response = await request.post(addMomentUrl(), data);
    if (response.ok) {
      const uploadImage = await request.post(
        uploadImageUrl(response.data?.data?.id),
        media,
      );
      if (uploadImage.ok) {
        dispatch({ type: SAVE_MOMENT_SUCCESS });
      } else {
        dispatch({ type: SAVE_MOMENT_ERROR });
      }
    } else {
      dispatch({ type: SAVE_MOMENT_ERROR });
    }
  };
};

export const deleteMomentAction = (momentId, mediaId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_MOMENT_REQUSET });
    const responseMedia = await request.delete(
      deleteMomentMediaUrl(momentId, mediaId),
    );
    if (responseMedia.ok) {
      const response = await request.delete(deleteMomentUrl(momentId));
      if (response.ok) {
        dispatch({ type: DELETE_MOMENT_SUCCESS });
      }
    } else {
      dispatch({ type: DELETE_MOMENT_ERROR });
    }
  };
};
