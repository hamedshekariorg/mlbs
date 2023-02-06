import {
  CLEAR,
  DEPARTURE_CHANGE_SELECTED,
  RETURN_CHANGE_SELECTED,
  CLEAR_RETURN_STATE,
} from './flights.constant';

export const selectDepartureFlight = () => {
  return (dispatch) => {
    dispatch({ type: DEPARTURE_CHANGE_SELECTED });
    // dispatch({ type: DEPARTURE_CHANGE_SELECTED, payload: items });
  };
};

export const selectReturnFlight = () => {
  return (dispatch) => {
    dispatch({ type: RETURN_CHANGE_SELECTED });
    // dispatch({ type: RETURN_CHANGE_SELECTED, payload: items });
  };
};

export const clearFlightState = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR });
  };
};

export const clearReturnState = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_RETURN_STATE });
  };
};
