import request from 'services/request';
import {
  GET_DETAILED_POLICY_ERROR,
  GET_DETAILED_POLICY_REQUEST,
  GET_DETAILED_POLICY_SUCCESS,
  GET_POLICY_ERROR,
  GET_POLICY_REQUEST,
  GET_POLICY_SUCCESS,
} from './policy.constant';
import { getDetailedPolicy, getPolicy } from './policy.service';

export const getPolicyAction = (type) => {
  return async (dispatch) => {
    dispatch({ type: GET_POLICY_REQUEST });
    const response = await request.get(getPolicy(), { tag: type });
    if (response.ok) {
      dispatch({ type: GET_POLICY_SUCCESS, payload: response.data.data });
    } else {
      dispatch({ type: GET_POLICY_ERROR });
    }
  };
};

export const getDetailedPolicyAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_DETAILED_POLICY_REQUEST });
    const response = await request.get(getDetailedPolicy(id));
    if (response.ok) {
      const details = response.data.data;
      dispatch({ type: GET_DETAILED_POLICY_SUCCESS, payload: details });
    } else {
      dispatch({ type: GET_DETAILED_POLICY_ERROR });
    }
  };
};
