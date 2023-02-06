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
const initailState = {
  moments: {
    loading: false,
    items: [],
    error: false,
    update: false,
  },
  saveMoment: {
    loading: false,
    erorr: false,
  },
  deleteMoment: {
    loading: false,
    erorr: false,
  },
};
const dashboardReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_MOMENTS_REQUSET:
      return {
        ...state,
        moments: {
          ...state.moments,
          loading: true,
        },
      };
    case GET_MOMENTS_SUCCESS:
      return {
        ...state,
        moments: {
          ...state.moments,
          loading: false,
          items: action.payload,
        },
      };
    case GET_MOMENTS_ERROR:
      return {
        ...state,
        moments: {
          ...state.moments,
          loading: false,
          erorr: true,
        },
      };

    case SAVE_MOMENT_REQUSET:
      return {
        ...state,
        saveMoment: {
          ...state.saveMoment,
          loading: true,
        },
        moments: {
          ...state.moments,
          update: false,
        },
      };
    case SAVE_MOMENT_SUCCESS:
      return {
        ...state,
        saveMoment: {
          ...state.saveMoment,
          loading: false,
        },
        moments: {
          ...state.moments,
          update: true,
        },
      };
    case SAVE_MOMENT_ERROR:
      return {
        ...state,
        saveMoment: {
          ...state.saveMoment,
          loading: false,
          erorr: true,
        },
      };

    case DELETE_MOMENT_REQUSET:
      return {
        ...state,
        deleteMoment: {
          ...state.deleteMoment,
          loading: true,
        },
        moments: {
          ...state.moments,
          update: false,
        },
      };
    case DELETE_MOMENT_SUCCESS:
      return {
        ...state,
        deleteMoment: {
          ...state.deleteMoment,
          loading: false,
        },
        moments: {
          ...state.moments,
          update: true,
        },
      };
    case DELETE_MOMENT_ERROR:
      return {
        ...state,
        deleteMoment: {
          ...state.deleteMoment,
          loading: false,
          erorr: true,
        },
      };

    default:
      return state;
  }
};
export default dashboardReducer;
