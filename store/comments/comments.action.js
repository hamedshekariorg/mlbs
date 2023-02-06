import { message } from 'antd';
import request from 'services/request';
import { normalizeComments } from 'utils/common.utils';
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_ERROR,
  GET_COMMENTS_SUCCESS,
  POST_COMMENT_KEY,
} from './comments.constant';

import { getCommentsUrl, postCommentsUrl } from './comments.service';

export const getCommentsAction = ({ id, page }) => {
  return async (dispatch) => {
    dispatch({ type: GET_COMMENTS_REQUEST });
    const response = await request.get(getCommentsUrl(id), {
      page,
      pagination_size: 3,
    });
    if (response.ok) {
      const normalData = await normalizeComments(response.data.data.entities);
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: {
          data: normalData,
          countPage: response.data.data.number_of_pages,
        },
      });
    } else {
      dispatch({ type: GET_COMMENTS_ERROR });
    }
  };
};

export const postCommentsAction = async ({ data, id }) => {
  message.loading({ content: 'please wait ...', key: POST_COMMENT_KEY });
  const response = await request.post(postCommentsUrl(id), data);
  if (response.ok) {
    message.success({ content: 'Successful request', key: POST_COMMENT_KEY });
  } else {
    message.error({ content: 'Failed request', key: POST_COMMENT_KEY });
  }
};
