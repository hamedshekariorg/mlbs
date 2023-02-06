import {
  GET_CONTACTS_ERROR,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,

} from './contactUs.constant';

const initialState = {
  loading: null,
  items: [],
  error: null,
};

const contactUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CONTACTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
};
export default contactUsReducer;
