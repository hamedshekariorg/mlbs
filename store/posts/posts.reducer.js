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

const initialState = {
  iran: {
    loading: false,
    error: false,
    items: [],
  },
  history: {
    loading: false,
    error: false,
    items: [],
  },
  handicrafts: {
    loading: false,
    error: false,
    items: [],
  },
  details: {
    loading: false,
    error: false,
    data: {},
  },
  related: {
    loading: false,
    error: false,
    items: [],
  },
  recent: {
    loading: false,
    error: false,
    items: [],
  },
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IRAN_REQUEST:
      return {
        ...state,
        iran: {
          ...state.iran,
          loading: true,
        },
      };
    case GET_IRAN_SUCCESS:
      return {
        ...state,
        iran: {
          ...state.iran,
          loading: false,
          items: action.payload,
        },
      };
    case GET_IRAN_ERROR:
      return {
        ...state,
        iran: {
          ...state.iran,
          loading: false,
          error: true,
        },
      };

    case GET_HANDICRAFTS_REQUEST:
      return {
        ...state,
        handicrafts: {
          ...state.handicrafts,
          loading: true,
        },
      };
    case GET_HANDICRAFTS_SUCCESS:
      return {
        ...state,
        handicrafts: {
          ...state.handicrafts,
          loading: false,
          items: action.payload,
        },
      };
    case GET_HANDICRAFTS_ERROR:
      return {
        ...state,
        handicrafts: {
          ...state.handicrafts,
          loading: false,
          error: true,
        },
      };

    case GET_HISTORY_REQUEST:
      return {
        ...state,
        history: {
          ...state.history,
          loading: true,
        },
      };
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        history: {
          ...state.history,
          loading: false,
          items: action.payload,
        },
      };
    case GET_HISTORY_ERROR:
      return {
        ...state,
        history: {
          ...state.history,
          loading: false,
          error: true,
        },
      };

    case GET_DETAILS_REQUEST:
      return {
        ...state,
        details: {
          ...state.details,
          loading: true,
        },
      };
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          data: action.payload,
        },
      };
    case GET_DETAILS_ERROR:
      return {
        ...state,
        details: {
          ...state.details,
          loading: false,
          error: true,
        },
      };

    case GET_RELATED_REQUEST:
      return {
        ...state,
        related: {
          ...state.related,
          loading: true,
        },
      };
    case GET_RELATED_SUCCESS:
      return {
        ...state,
        related: {
          ...state.related,
          loading: false,
          items: action.payload,
        },
      };
    case GET_RELATED_ERROR:
      return {
        ...state,
        related: {
          ...state.related,
          loading: false,
          error: true,
        },
      };

    case GET_RECENT_REQUEST:
      return {
        ...state,
        recent: {
          ...state.recent,
          loading: true,
        },
      };
    case GET_RECENT_SUCCESS:
      return {
        ...state,
        recent: {
          ...state.recent,
          loading: false,
          items: action.payload,
        },
      };
    case GET_RECENT_ERROR:
      return {
        ...state,
        recent: {
          ...state.recent,
          loading: false,
          error: true,
        },
      };

    default:
      return state;
  }
};
export default postsReducer;
