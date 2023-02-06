// request service
import request from 'services/request';
import { message } from 'antd';
import moment from 'moment';
// constants (types)
import {
  CHANGE_AUTH,
  GET_EXIST_SERVICES_REQUEST,
  GET_EXIST_SERVICES_ERROR,
  GET_EXIST_SERVICES_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_ERROR,
  VERIFY_REGISTER_REQUEST,
  VERIFY_REGISTER_SUCCESS,
  VERIFY_REGISTER_ERROR,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_ERROR,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  GET_SIGNUP_ROLES_REQUEST,
  GET_SIGNUP_ROLES_SUCCESS,
  GET_SIGNUP_ROLES_ERROR,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_ERROR,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  GET_OTPCODE_REQUEST,
  GET_OTPCODE_SUCCESS,
  GET_OTPCODE_ERROR,
  GET_LOGOUT_REQUSET,
  GET_LOGOUT_SECCESS,
  GET_LOGOUT_ERROR,
  SET_PROFILE_REQUEST,
  SET_PROFILE_SUCCESS,
  SET_PROFILE_ERROR,
} from './auth.constant';

// services (urls)
import {
  getChangePasswordUrl,
  getExistServicesUrl,
  getForgetPasswordUrl,
  getLoginUrl,
  getRegisterUrl,
  getSignupRolesUrl,
  getVerifyRegisterUrl,
  getCountriesUrl,
  getVerifyCodeUrl,
  getProfileUrl,
  getLoginOTPUrl,
  getLogoutUrl,
} from './auth.service';
import { removeCookie, setUaaCookie } from '../../utils/auth.utils';

// ----- CHANGE AUTH -----
export const changeAuthAction = (prop, value) => ({
  type: CHANGE_AUTH,
  payload: { prop, value },
});

// ----------- GET EXIST SERVICES -----------
export const getExistServicesAction = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_EXIST_SERVICES_REQUEST,
    });
    const response = await request.get(getExistServicesUrl());
    if (response.ok) {
      dispatch({
        type: GET_EXIST_SERVICES_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({ type: GET_EXIST_SERVICES_ERROR });
    }
  };
};

// --------- REGISTER USER ----------
export const registerUserAction = (data, action) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_USER_REQUEST });
    const response = await request.post(getRegisterUrl(), data);
    if (response.ok) {
      action();
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };
};

// ---------- LOGIN USER ---------
export const loginUserAction = (data, action) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST });
    const response = await request.post(getLoginUrl(), data);
    if (response.ok) {
      setUaaCookie(response.data.data.token);
      action();
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({ type: LOGIN_USER_ERROR });
    }
  };
};

// ---------- REQUSET VERIFY CODE ---------
export const getLoginOTPAction = (data, action) => {
  return async (dispatch) => {
    dispatch({ type: GET_OTPCODE_REQUEST });
    const response = await request.post(getLoginOTPUrl(), data);
    if (response.ok) {
      dispatch({
        type: GET_OTPCODE_SUCCESS,
        payload: response.data.data.token,
      });
      action();
    } else {
      dispatch({ type: GET_OTPCODE_ERROR });
    }
  };
};

// -------- VERIFY USER REGISTRATION -------
export const verifyRegisterAction = ({ code, token }, action) => {
  return async (dispatch) => {
    setUaaCookie(token);
    dispatch({
      type: VERIFY_REGISTER_REQUEST,
    });
    const response = await request.get(getVerifyRegisterUrl(code));
    if (response.ok) {
      message.success(response.data.message);
      action();
      dispatch({
        type: VERIFY_REGISTER_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: VERIFY_REGISTER_ERROR,
      });
      removeCookie('access_token');
    }
  };
};

// --------- FORGET PASSWORD ---------
export const forgetPasswordAction = (body, forgetPassType) => {
  return async (dispatch) => {
    dispatch({ type: FORGET_PASSWORD_REQUEST });
    const response = await request.post(
      getForgetPasswordUrl(forgetPassType),
      body,
    );
    if (response.ok) {
      setUaaCookie(response.data.data.token);
      dispatch({
        type: FORGET_PASSWORD_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({ type: FORGET_PASSWORD_ERROR });
    }
  };
};

// -------- CHANGE PASSWORD --------
export const changePasswordAction = (body) => {
  return async (dispatch) => {
    dispatch({ type: CHANGE_PASSWORD_REQUEST });
    const response = await request.post(getChangePasswordUrl(), body);
    if (response.ok) {
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
      });
      message.success('The password was changed successfully');
    } else {
      dispatch({ type: CHANGE_PASSWORD_ERROR });
    }
  };
};

// ------- GET Logout -------
export const getLogoutAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LOGOUT_REQUSET });
    const response = await request.get(getLogoutUrl());
    if (response.ok) {
      removeCookie('access_token');

      dispatch({ type: GET_LOGOUT_SECCESS });
    } else {
      dispatch({ type: GET_LOGOUT_ERROR });
    }
  };
};

export const getProfileAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    const response = await request.get(getProfileUrl());
    if (response.ok) {
      const data = response.data.data;
      const formatBirthDay =
        data.birth_day && moment(new Date(data.birth_day)).format('YYYY-MM-DD');
      const image = data.image && Object.values(data.image)[0];
      const payload = { ...data, image, birth_day: formatBirthDay };
      dispatch({ type: GET_PROFILE_SUCCESS, payload });
    } else {
      dispatch({ type: GET_PROFILE_ERROR });
    }
  };
};

export const getEditProfileAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: SET_PROFILE_REQUEST });
    const response = await request.post(getProfileUrl(), data);
    if (response.ok) {
      dispatch({ type: SET_PROFILE_SUCCESS });
    } else {
      dispatch({ type: SET_PROFILE_ERROR });
    }
  };
};

// this action  is not yet complete
// export const getDeletePhoto = () => {
//   return async (dispatch) => {
//     dispatch({ type: DELETE_PHOTO_REQUSET });
//     const response = await request.delete();
//     if (response.ok) {
//       dispatch({ type: DELETE_PHOTO_SUCCESS });
//     } else {
//       dispatch({ type: DELETE_PHOTO_ERROR });
//     }
//   };
// };

// ---------- GET COUNTRIES ---------
