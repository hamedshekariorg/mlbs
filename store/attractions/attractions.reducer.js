import { exceptionalAdventures } from 'utils/attraction.utils';
import {
  GET_EXCEPTIONAL_ADVENTURES_REQUEST,
  GET_EXCEPTIONAL_ADVENTURES_ERROR,
  GET_EXCEPTIONAL_ADVENTURES_SUCCESS,
  GET_POPULAR_ATTRACTIONS_ERROR,
  GET_POPULAR_ATTRACTIONS_REQUEST,
  GET_POPULAR_ATTRACTIONS_SUCCESS,
  GET_ATTRACTIONS_LIST_REQUEST,
  GET_ATTRACTIONS_LIST_SUCCESS,
  GET_ATTRACTIONS_LIST_ERROR,
  GET_ATTRACTIONS_REQUEST,
  GET_ATTRACTIONS_SUCCESS,
  GET_ATTRACTIONS_ERROR,
  GET_FILTER_ATTRACTIONS_REQUEST,
  GET_FILTER_ATTRACTIONS_SUCCESS,
  GET_FILTER_ATTRACTIONS_ERROR,
  GET_SEASON_ATTRACTIONS_REQUEST,
  GET_SEASON_ATTRACTIONS_SUCCESS,
  GET_SEASON_ATTRACTIONS_ERROR,
  GET_UNESCO_REQUEST,
  GET_UNESCO_SUCCESS,
  GET_UNESCO_ERROR,
  GET_EDIT_REQUEST,
  GET_EDIT_SUCCESS,
  GET_EDIT_ERROR,
} from './attractions.constant';

const initialState = {
  exceptionalAdventures: {
    loading: false,
    error: false,
    items: exceptionalAdventures, // currently static
  },
  popularAttractions: {
    loading: false,
    error: false,
    items: [],
  },
  attractions: {
    loading: false,
    error: false,
    data: [], // LIST OF ITEMS -> {src: IMAGE_SOURCE, title: IMAGE_TITLE, rate: IMAGE_RATE}
  },
  attractionsList: {
    loading: false,
    error: false,
    data: [],
    pagination_size: null,
  },
  unesco: {
    loading: false,
    error: false,
    items: [],
  },
  season: {
    loading: false,
    error: false,
    items: [],
  },

  iran: {
    loading: false,
    error: false,
    items: [],
  },
  handicrafts: {
    loading: false,
    error: false,
    items: [],
  },
  histoty: {
    loading: false,
    error: false,
    items: [],
  },
  postDetails: {
    loading: false,
    error: false,
    data: {},
  },
  edit: {
    loading: false,
    error: false,
    success: false,
  },
};

const attractionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXCEPTIONAL_ADVENTURES_REQUEST:
      return {
        ...state,
        exceptionalAdventures: {
          ...state.exceptionalAdventures,
          loading: true,
        },
      };
    case GET_EXCEPTIONAL_ADVENTURES_ERROR:
      return {
        ...state,
        exceptionalAdventures: {
          ...state.exceptionalAdventures,
          items: [],
          loading: false,
          error: true,
        },
      };
    case GET_EXCEPTIONAL_ADVENTURES_SUCCESS:
      return {
        ...state,
        exceptionalAdventures: {
          ...state.exceptionalAdventures,
          items: action.payload.data.entities,
          loading: false,
          error: false,
        },
      };
    case GET_POPULAR_ATTRACTIONS_ERROR:
      return {
        ...state,
        popularAttractions: {
          ...state.popularAttractions,
          loading: false,
          error: true,
        },
      };
    case GET_POPULAR_ATTRACTIONS_REQUEST:
      return {
        ...state,
        popularAttractions: {
          ...state.popularAttractions,
          loading: true,
        },
      };
    case GET_POPULAR_ATTRACTIONS_SUCCESS:
      return {
        ...state,
        popularAttractions: {
          ...state.popularAttractions,
          loading: false,
          error: false,
          items: action.payload, // TODO: action.payload
        },
      };
    case GET_ATTRACTIONS_LIST_REQUEST:
      return {
        ...state,
        attractionsList: {
          ...state.attractionsList,
          loading: true,
        },
      };
    case GET_ATTRACTIONS_LIST_SUCCESS:
      return {
        ...state,
        attractionsList: {
          loading: false,
          error: false,
          data: [...state.attractionsList.data, ...action.payload],
          number_of_pages: action.number_of_pages,
        },
      };
    case GET_ATTRACTIONS_LIST_ERROR:
      return {
        ...state,
        attractionsList: {
          loading: false,
          error: true,
          data: [],
          number_of_pages: null,
        },
      };

    case GET_ATTRACTIONS_REQUEST:
      return {
        ...state,
        attractions: {
          ...state.attractions,
          loading: true,
        },
      };
    case GET_ATTRACTIONS_SUCCESS:
      return {
        ...state,
        attractions: {
          ...state.attractions,
          loading: false,
          error: false,
          data: action.payload,
        },
      };
    case GET_ATTRACTIONS_ERROR:
      return {
        ...state,
        attractions: {
          ...state.attractions,
          loading: false,
          error: true,
          data: [],
        },
      };

    case GET_FILTER_ATTRACTIONS_REQUEST:
      return {
        ...state,
        attractionsList: {
          ...state.attractionsList,
          loading: true,
        },
      };
    case GET_FILTER_ATTRACTIONS_SUCCESS:
      return {
        ...state,
        attractionsList: {
          loading: false,
          error: false,
          data: action.payload,
          number_of_pages: action.number_of_pages,
        },
      };
    case GET_FILTER_ATTRACTIONS_ERROR:
      return {
        ...state,
        attractionsList: {
          loading: false,
          error: true,
          data: [],
          number_of_pages: null,
        },
      };
    case GET_SEASON_ATTRACTIONS_REQUEST:
      return {
        ...state,
        season: {
          ...state.season,
          loading: true,
        },
      };
    case GET_SEASON_ATTRACTIONS_SUCCESS:
      return {
        ...state,
        season: {
          ...state.season,
          loading: false,
          items: action.payload,
        },
      };
    case GET_SEASON_ATTRACTIONS_ERROR:
      return {
        ...state,
        season: {
          ...state.season,
          loading: false,
          error: true,
        },
      };

    case GET_UNESCO_REQUEST:
      return {
        ...state,
        unesco: {
          ...state.unesco,
          loading: true,
        },
      };
    case GET_UNESCO_SUCCESS:
      return {
        ...state,
        unesco: {
          ...state.unesco,
          loading: false,
          items: action.payload,
        },
      };
    case GET_UNESCO_ERROR:
      return {
        ...state,
        unesco: {
          ...state.unesco,
          loading: false,
          error: true,
        },
      };

    case GET_EDIT_REQUEST:
      return {
        ...state,
        edit: {
          error: false,
          success: false,
          loading: true,
        },
      };
    case GET_EDIT_SUCCESS:
      return {
        ...state,
        edit: {
          error: false,
          loading: false,
          success: true,
        },
      };
    case GET_EDIT_ERROR:
      return {
        ...state,
        edit: {
          error: true,
          success: false,
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default attractionsReducer;
