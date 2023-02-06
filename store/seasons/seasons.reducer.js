import {
  GET_SEASONS_REQUEST,
  GET_SEASONS_ERROR,
  GET_SEASONS_SUCCESS,
} from './seasons.constant';

const initialState = {
  loading: false,
  error: false,
  items: [],
};

const seasonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEASONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SEASONS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_SEASONS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default seasonsReducer;
