import { CHANGE_LANGUAGE, SET_LANGUAGE } from './language.constant';

const initialState = {
  data: 'ch',
  language: 'ch',
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    case SET_LANGUAGE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
