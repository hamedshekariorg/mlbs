import {
  GET_DETAILED_POLICY_ERROR,
  GET_DETAILED_POLICY_REQUEST,
  GET_DETAILED_POLICY_SUCCESS,
  GET_POLICY_ERROR,
  GET_POLICY_REQUEST,
  GET_POLICY_SUCCESS,
} from './policy.constant';

const initialState = {
  policyList: {
    loading: null,
    items: [],
    error: null,
  },
  policyDetail: {
    loading: null,
    items: [],
    error: null,
  },
};

const policyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POLICY_REQUEST:
      return {
        ...state,
        policyList: {
          ...state.policyList,
          loading: true,
        },
      };
    case GET_POLICY_ERROR:
      return {
        ...state,
        policyList: {
          ...state.policyList,
          loading: false,
          error: true,
        },
      };
    case GET_POLICY_SUCCESS:
      return {
        ...state,
        policyList: {
          ...state.policyList,
          items: action.payload,
          loading: false,
        },
      };
    case GET_DETAILED_POLICY_REQUEST:
      return {
        ...state,
        policyDetail: {
          ...state.policyDetail,
          loading: true,
        },
      };
    case GET_DETAILED_POLICY_ERROR:
      return {
        ...state,
        policyDetail: {
          ...state.policyDetail,
          loading: false,
          error: true,
        },
      };
    case GET_DETAILED_POLICY_SUCCESS:
      return {
        ...state,
        policyDetail: {
          ...state.policyDetail,
          loading: false,
          items: action.payload,
        },
      };
    default:
      return state;
  }
};

export default policyReducer;
