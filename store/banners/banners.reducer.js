import {
  GET_BANNERS_ERROR,
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
} from './banners.constant';

const initialState = {
  loading: false,
  error: null,
  items: [],
};

const bannersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BANNERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_BANNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
};
export default bannersReducer;
