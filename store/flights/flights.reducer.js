import {
  DEPARTURE_CHANGE_SELECTED,
  RETURN_CHANGE_SELECTED,
  CLEAR,
  CLEAR_RETURN_STATE,
} from './flights.constant';

const initialState = {
  departure: {
    // loading: false,
    // error: false,
    selected: false,
    items: [], // ==> List of data (like time, price, & etc...)
  },
  returnFlight: {
    // loading: false,
    // error: false,
    selected: false,
    items: [], // ==> List of data (like time, price, & etc...)
  },
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPARTURE_CHANGE_SELECTED:
      return {
        ...state,
        departure: {
          ...state.departure,
          selected: true,
        },
      };
    case RETURN_CHANGE_SELECTED:
      return {
        ...state,
        returnFlight: {
          ...state.returnFlight,
          selected: true,
        },
      };
    case CLEAR:
      return {
        departure: {
          selected: false,
          items: [],
        },
        returnFlight: {
          selected: false,
          items: [],
        },
      };
    case CLEAR_RETURN_STATE:
      return {
        ...state,
        returnFlight: {
          selected: false,
          items: [],
        },
      };
    default:
      return state;
  }
};
export default flightReducer;
