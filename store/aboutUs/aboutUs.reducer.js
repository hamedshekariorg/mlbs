import {
  GET_PREAMBLE_ERROR,
  GET_PREAMBLE_REQUEST,
  GET_PREAMBLE_SUCCESS,
  GET_SPECIALTIES_ERROR,
  GET_SPECIALTIES_REQUEST,
  GET_SPECIALTIES_SUCCESS,
  GET_TEAM_ERROR,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
} from './aboutUs.constant';

const initialState = {
  specialties: {
    loading: null,
    items: [],
    error: null,
  },
  team: {
    loading: null,
    items: [],
    error: null,
  },

  preamble: {
    loading: null,
    data: [],
    error: null,
  }
};

const aboutUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIALTIES_REQUEST:
      return {
        ...state,
        specialties: {
          ...state.specialties,
          loading: true,
        }
      };
    case GET_SPECIALTIES_ERROR:
      return {
        ...state,
        specialties: {
          ...state.specialties,
          loading: false,
          error: true,
        }
      };
    case GET_SPECIALTIES_SUCCESS:
      return {
        ...state,
        specialties: {
          ...state.specialties,
          loading: false,
          items: action.payload,
        }
      };

    case GET_TEAM_REQUEST:
      return {
        ...state,
        team: {
          ...state.team,
          loading: true,
        }
      };
    case GET_TEAM_ERROR:
      return {
        ...state,
        team: {
          ...state.team,
          loading: false,
          error: true,
        }
      };
    case GET_TEAM_SUCCESS:
      return {
        ...state,
        team: {
          ...state.team,
          loading: false,
          items: action.payload.entities,
          total: action.payload.number_of_entities
        }
      };

    case GET_PREAMBLE_REQUEST:
      return {
        ...state,
        preamble: {
          ...state.preamble,
          loading: true,
        }
      };
    case GET_PREAMBLE_ERROR:
      return {
        ...state,
        preamble: {
          ...state.preamble,
          loading: false,
          error: true,
        }
      };
    case GET_PREAMBLE_SUCCESS:
      return {
        ...state,
        preamble: {
          ...state.preamble,
          loading: false,
          data: action.payload,
        }
      };
    default:
      return state;
  }
};
export default aboutUsReducer;
