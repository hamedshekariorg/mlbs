import {
  DECREASE_STEP,
  INCREASE_STEP,
  DECREASE_LEVEL,
  INCREASE_LEVEL,
  CHANGE_TOUR_TYPE,
  CHANGE_TRAVELERS_COUNT,
  CHANGE_TRAVELER_AGES,
  CHANGE_TIME_TYPE,
  CHANGE_DEPARTURE,
  CHANGE_START,
  CHANGE_END,
  CHANGE_APPROXIMATE_DURATION,
  CHANGE_PREFERRED_DURATION,
  CHANGE_TRIP_GUIDANCE_TYPE,
  CHANGE_LODGINGS,
  CHANGE_BUDGET_PER_PERSON,
  CHANGE_CITIES_TO_VISIT_SEARCH,
  CHANGE_CITIES_TO_VISIT_FILTER_CHIP,
  CHANGE_SELECTED_SEARCH_RESULT,
  CHANGE_ATTRACTIONS_TO_VISIT_SEARCH,
  CHANGE_SELECTED_ATTRACTIONS_SEARCH_RESULT,
  CHANGE_ATTRACTIONS_TO_VISIT_FILTER_CHIP,
  CHANGE_ACTIVITIES,
  FINISH,
} from './customTourPackage.constant';

const initialState = {
  done: false,
  step: 0,
  level: 0,
  tourType: null,
  travelersCount: null,
  travelersAgeRanges: [],
  timeType: null,
  departure: null,
  preferredDuration: null,
  startDate: null,
  endDate: null,
  approximateDuration: null,
  tripGuidanceType: null,
  lodgings: [],
  budgetPerPerson: null,
  citiesToVisitSearchCities: [],
  citiesToVisitFilterChip: null,
  selectedSearchResult: [],
  attractionsToVisitSearchAttractions: [],
  attractionsToVisitFilterChip: null,
  selectedAttractions: [],
  activities: [],
};

const customTourPackageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_STEP:
      return {
        ...state,
        step: ++state.step,
      };
    case DECREASE_STEP:
      return {
        ...state,
        step: --state.step,
      };
    case INCREASE_LEVEL:
      return {
        ...state,
        level: ++state.level,
      };
    case DECREASE_LEVEL:
      return {
        ...state,
        level: --state.level,
      };
    case CHANGE_TOUR_TYPE:
      return {
        ...state,
        tourType: action.payload,
      };
    case CHANGE_TRAVELERS_COUNT:
      return {
        ...state,
        travelersCount: action.payload,
      };
    case CHANGE_TRAVELER_AGES:
      return {
        ...state,
        travelersAgeRanges: action.payload,
      };
    case CHANGE_TIME_TYPE:
      return {
        ...state,
        timeType: action.payload,
      };
    case CHANGE_DEPARTURE:
      return {
        ...state,
        departure: action.payload,
      };
    case CHANGE_PREFERRED_DURATION:
      return {
        ...state,
        preferredDuration: action.payload,
      };
    case CHANGE_START:
      return {
        ...state,
        startDate: action.payload,
      };
    case CHANGE_END:
      return {
        ...state,
        endDate: action.payload,
      };
    case CHANGE_APPROXIMATE_DURATION:
      return {
        ...state,
        approximateDuration: action.payload,
      };
    case CHANGE_TRIP_GUIDANCE_TYPE:
      return {
        ...state,
        tripGuidanceType: action.payload,
      };
    case CHANGE_LODGINGS:
      return { ...state, lodgings: action.payload };
    case CHANGE_BUDGET_PER_PERSON:
      return { ...state, budgetPerPerson: action.payload };
    case CHANGE_CITIES_TO_VISIT_SEARCH:
      return { ...state, citiesToVisitSearchCities: action.payload };
    case CHANGE_CITIES_TO_VISIT_FILTER_CHIP:
      return { ...state, citiesToVisitFilterChip: action.payload };
    case CHANGE_SELECTED_SEARCH_RESULT:
      return { ...state, selectedSearchResult: action.payload };
    case CHANGE_ATTRACTIONS_TO_VISIT_SEARCH:
      return { ...state, attractionsToVisitSearchAttractions: action.payload };
    case CHANGE_ATTRACTIONS_TO_VISIT_FILTER_CHIP:
      return { ...state, attractionsToVisitFilterChip: action.payload };
    case CHANGE_SELECTED_ATTRACTIONS_SEARCH_RESULT:
      return { ...state, selectedAttractions: action.payload };
    case CHANGE_ACTIVITIES:
      return { ...state, activities: action.payload };
    case FINISH:
      return { ...state, done: true };
    default:
      return state;
  }
};

export default customTourPackageReducer;
