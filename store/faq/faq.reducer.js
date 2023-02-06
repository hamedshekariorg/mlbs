import {
  GET_FAQ_ERROR,
  GET_FAQ_REQUEST,
  GET_FAQ_SUCCESS,
} from './faq.constant';

const initialState = {
  loading: null,
  items: [],
  error: null,
};

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAQ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FAQ_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_FAQ_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
};
export default faqReducer;
