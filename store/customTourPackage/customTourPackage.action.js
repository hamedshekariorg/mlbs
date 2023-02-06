import {
  DECREASE_LEVEL,
  INCREASE_LEVEL,
  DECREASE_STEP,
  INCREASE_STEP,
  CHANGE_TOUR_TYPE,
  CHANGE_TRAVELERS_COUNT,
  CHANGE_TRAVELER_AGES,
  CHANGE_TIME_TYPE,
  CHANGE_DEPARTURE,
  CHANGE_PREFERRED_DURATION,
  CHANGE_START,
  CHANGE_END,
  CHANGE_APPROXIMATE_DURATION,
  CHANGE_TRIP_GUIDANCE_TYPE,
  CHANGE_LODGINGS,
  CHANGE_BUDGET_PER_PERSON,
  CHANGE_CITIES_TO_VISIT_SEARCH,
  CHANGE_CITIES_TO_VISIT_FILTER_CHIP,
  CHANGE_SELECTED_SEARCH_RESULT,
  CHANGE_ATTRACTIONS_TO_VISIT_SEARCH,
  CHANGE_ATTRACTIONS_TO_VISIT_FILTER_CHIP,
  CHANGE_SELECTED_ATTRACTIONS_SEARCH_RESULT,
  CHANGE_ACTIVITIES,
  FINISH,
} from './customTourPackage.constant';

export const increaseStep = () => {
  return (dispatch) => dispatch({ type: INCREASE_STEP });
};

export const decreaseStep = () => {
  return (dispatch) => dispatch({ type: DECREASE_STEP });
};

export const increaseLevel = () => {
  return (dispatch) => dispatch({ type: INCREASE_LEVEL });
};

export const decreaseLevel = () => {
  return (dispatch) => dispatch({ type: DECREASE_LEVEL });
};

export const changeTourType = (tourType) => {
  return (dispatch) => dispatch({ type: CHANGE_TOUR_TYPE, payload: tourType });
};

export const changeTravelersCount = (count) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_TRAVELERS_COUNT, payload: count });
};

export const changeTravelerAges = (ages) => {
  return (dispatch) => dispatch({ type: CHANGE_TRAVELER_AGES, payload: ages });
};

export const changeTimeType = (type) => {
  return (dispatch) => dispatch({ type: CHANGE_TIME_TYPE, payload: type });
};

export const changeDeparture = (departure) => {
  return (dispatch) => dispatch({ type: CHANGE_DEPARTURE, payload: departure });
};

export const changePreferedDuration = (duration) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_PREFERRED_DURATION, payload: duration });
};

export const changeStart = (start) => {
  return (dispatch) => dispatch({ type: CHANGE_START, payload: start });
};

export const changeEnd = (ages) => {
  return (dispatch) => dispatch({ type: CHANGE_END, payload: ages });
};

export const changeApproximateDuration = (approximate) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_APPROXIMATE_DURATION, payload: approximate });
};

export const changeTripGuidanceType = (type) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_TRIP_GUIDANCE_TYPE, payload: type });
};

export const changeLodgings = (lodgingsArr) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_LODGINGS, payload: lodgingsArr });
};

export const changeBudgetPerPerson = (budget) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_BUDGET_PER_PERSON, payload: budget });
};

export const changeCitiesToVisitSearch = (cities) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_CITIES_TO_VISIT_SEARCH, payload: cities });
};

export const changeCitiesToVisitFilterChip = (chip) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_CITIES_TO_VISIT_FILTER_CHIP, payload: chip });
};

export const changeSelectedSearchResults = (results) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_SELECTED_SEARCH_RESULT, payload: results });
};

export const changeAttractionsToVisitSearch = (attractions) => {
  return (dispatch) =>
    dispatch({
      type: CHANGE_ATTRACTIONS_TO_VISIT_SEARCH,
      payload: attractions,
    });
};

export const changeAttractionsToVisitFilterChip = (chip) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_ATTRACTIONS_TO_VISIT_FILTER_CHIP, payload: chip });
};

export const changeSelectedAttractionsSearchResults = (results) => {
  return (dispatch) =>
    dispatch({
      type: CHANGE_SELECTED_ATTRACTIONS_SEARCH_RESULT,
      payload: results,
    });
};

export const changeActivities = (activities) => {
  return (dispatch) =>
    dispatch({ type: CHANGE_ACTIVITIES, payload: activities });
};

export const finish = () => {
  return (dispatch) => dispatch({ type: FINISH });
};
