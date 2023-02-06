import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS
} from './categories.constant';

const initialState = {
  loading: false,
  error: false,
  items: [],

};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        items: [],
        loading: false,
        error: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.payload.data.entities,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
