// constants (types)
import { getCookie } from 'utils/auth.utils';
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
  VERIFY_REGISTER_ERROR,
  VERIFY_REGISTER_SUCCESS,
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
  GET_OTPCODE_ERROR,
  GET_OTPCODE_SUCCESS,
  GET_OTPCODE_REQUEST,
  GET_LOGOUT_REQUSET,
  GET_LOGOUT_SECCESS,
  GET_LOGOUT_ERROR,
  SET_PROFILE_REQUEST,
  SET_PROFILE_SUCCESS,
  SET_PROFILE_ERROR,
} from './auth.constant';

const initialState = {
  authType: 'signin',

  // exist services
  servisId: '',
  existServices: {
    loading: false,
    error: false,
  },

  // register
  token: getCookie('access_token'),
  register: {
    loading: false,
    error: false,
  },

  // login
  isAuthenticated: false,
  login: {
    loading: false,
    error: false,
  },

  // forget password
  forgetPass: {
    loading: false,
    error: '',
  },

  // change password
  changePass: {
    loading: false,
    error: '',
  },

  // signup roles
  roles: [],
  rolesLoading: false,
  rolesError: false,

  // countries
  countries: [],
  countriesLoading: false,
  countriesError: false,

  //profile
  profile: {
    loading: false,
    data: {},
    error: false,
  },
  //edit profile
  editProfile: {
    loading: false,
    success: false,
    error: false,
  },

  //OTPCode
  OTPCode: {
    loading: false,
    error: false,
  },

  //logout
  logout: {
    loading: false,
    error: false,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return { ...state, [prop]: value };

    // exist services
    case GET_EXIST_SERVICES_REQUEST:
      return {
        ...state,
        existServices: {
          ...state.existServices,
          loading: true,
          error: false,
        },
      };
    case GET_EXIST_SERVICES_ERROR:
      return {
        ...state,
        existServices: {
          ...state.existServices,
          loading: false,
          error: true,
        },
      };
    case GET_EXIST_SERVICES_SUCCESS:
      const mlbs = action.payload.data.filter((i) => i.name === 'mlbs');
      return {
        ...state,
        servisId: mlbs[0].id,
        existServices: {
          ...state.existServices,
          loading: false,
          error: false,
        },
      };

    // register user
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        register: {
          ...state.register,
          loading: true,
          error: false,
        },
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        register: {
          ...state.register,
          loading: false,
          error: true,
        },
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        register: {
          ...state.register,
          loading: false,
          error: false,
        },
      };

    // login
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        login: { ...state.login, loading: true, error: false },
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        login: { ...state.login, loading: false, error: true },
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
        login: { ...state.login, loading: false, error: false },
      };

    // verify registeration
    case VERIFY_REGISTER_REQUEST:
      return {
        ...state,
        register: {
          ...state.register,
          loading: true,
          error: false,
        },
      };
    case VERIFY_REGISTER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        register: {
          ...state.register,
          loading: false,
          error: true,
        },
      };
    case VERIFY_REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: null,
        register: {
          ...state.register,
          loading: false,
          error: false,
        },
      };

    // forget password
    case FORGET_PASSWORD_REQUEST:
      return {
        ...state,
        forgetPass: {
          ...state.forgetPass,
          loading: true,
          error: false,
        },
      };
    case FORGET_PASSWORD_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        forgetPass: {
          ...state.forgetPass,
          loading: false,
          error: true,
        },
      };
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        forgetPass: {
          ...state.forgetPass,
          loading: false,
          error: false,
        },
      };

    // change password [may not be correct]
    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        changePass: {
          ...state.changePass,
          loading: true,
          error: false,
        },
      };
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        // isAuthenticated: false,
        // token: '',
        changePass: {
          ...state.changePass,
          loading: false,
          error: true,
        },
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        // token: action.payload.data.token,
        changePass: {
          ...state.changePass,
          loading: false,
          error: false,
        },
      };

    // signup roles
    case GET_SIGNUP_ROLES_REQUEST:
      return { ...state, rolesLoading: true, rolesError: false };
    case GET_SIGNUP_ROLES_SUCCESS:
      const data = action.payload.data;
      const roles = [];
      for (let i in data) {
        roles.push({
          label: data[i].name,
          value: data[i].id,
        });
      }

      return {
        ...state,
        rolesLoading: false,
        rolesError: false,
        roles,
      };
    case GET_SIGNUP_ROLES_ERROR:
      return { ...state, rolesLoading: false, rolesError: true };

    // countries
    case GET_COUNTRIES_REQUEST:
      return { ...state, countriesLoading: true, countriesError: false };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload.data.entities,
      };
    case GET_COUNTRIES_ERROR:
      return { ...state, countriesLoading: false, countriesError: true };

    case GET_PROFILE_REQUEST:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: true,
        },
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: false,
          data: action.payload,
        },
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        profile: {
          ...state.profile,
          error: true,
          loading: false,
        },
      };

    case SET_PROFILE_REQUEST:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          success: false,
          loading: true,
        },
      };
    case SET_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          loading: false,
          success: true,
        },
      };
    case SET_PROFILE_ERROR:
      return {
        ...state,
        editProfile: {
          ...state.editProfile,
          error: true,
          loading: false,
        },
      };

    case GET_OTPCODE_REQUEST:
      return {
        ...state,
        OTPCode: {
          ...state.OTPCode,
          loading: true,
        },
        token: null,
      };
    case GET_OTPCODE_SUCCESS:
      return {
        ...state,
        token: action.payload,
        OTPCode: {
          ...state.OTPCode,
          loading: false,
        },
      };
    case GET_OTPCODE_ERROR:
      return {
        ...state,
        OTPCode: {
          ...state.OTPCode,
          error: true,
          loading: false,
        },
      };

    case GET_LOGOUT_REQUSET:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: true,
        },
      };
    case GET_LOGOUT_SECCESS:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        logout: {
          ...state.logout,
          loading: false,
        },
      };
    case GET_LOGOUT_ERROR:
      return {
        ...state,
        logout: {
          ...state.logout,
          error: true,
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default authReducer;
