import { message } from 'antd';
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_ERROR,
  GET_COMMENTS_SUCCESS,
} from './comments.constant';

const initialState = {
  loading: false,
  error: false,
  items: [],
  countPage: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.payload.data],
        countPage: action.payload.countPage,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default commentsReducer;
