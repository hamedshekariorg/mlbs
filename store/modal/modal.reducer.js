import { SHOW_MODAL } from './modal.constant';

const initialState = {
  login: false,
  privacy: false,
  privacyFlight: false,
  formFlight: false,
  photoFlight: false,
  searchFlight: false,
  question: false,
  editPassenger: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default modalReducer;
