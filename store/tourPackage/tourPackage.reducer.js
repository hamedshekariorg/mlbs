import {
  GET_TOUR_PACKAGE_LIST_REQUEST,
  GET_TOUR_PACKAGE_LIST_ERROR,
  GET_TOUR_PACKAGE_LIST_SUCCESS,
  GET_TOUR_REQUEST,
  GET_TOUR_ERROR,
  GET_TOUR_SUCCESS,
} from './tourPackage.constant';

const initialState = {
  tourList: {
    loading: false,
    error: false,
    data: [],
    total: 0,
  },
  tour: {
    loading: false,
    error: false,
    data: {},
  },
};

const attractionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOUR_PACKAGE_LIST_REQUEST:
      return {
        ...state,
        tourList: {
          ...state.tourList,
          loading: true,
        },
      };
    case GET_TOUR_PACKAGE_LIST_SUCCESS:
      return {
        ...state,
        tourList: {
          loading: false,
          error: false,
          data: [...action.payload.entities],
          total: action.payload.number_of_entities,
        },
      };
    case GET_TOUR_PACKAGE_LIST_ERROR:
      return {
        ...state,
        tourList: {
          loading: false,
          error: true,
          data: [],
        },
      };
    case GET_TOUR_REQUEST:
      return {
        ...state,
        tour: {
          ...state.tour,
          loading: true,
        },
      };
    case GET_TOUR_SUCCESS:
      return {
        ...state,
        tour: {
          loading: false,
          error: false,
          data: { ...action.payload },
        },
      };
    case GET_TOUR_ERROR:
      return {
        ...state,
        tour: {
          loading: false,
          error: true,
          data: {},
        },
      };
    default:
      return state;
  }
};

export default attractionsReducer;
