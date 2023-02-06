// services
import { centralURL } from 'services/request';

export const getExistServicesUrl = () => '/services';

// register
export const getRegisterUrl = () => `${centralURL}/signup?ident_kind=mobile`;

// login
export const getLoginUrl = () => `${centralURL}/login?ident_kind=username`;

// verify register
export const getVerifyRegisterUrl = (code) =>
  `${centralURL}/code/${code}/verify`;

// forget password
export const getForgetPasswordUrl = (forgetPassType) =>
  `${centralURL}/password/forgot?ident_kind=${forgetPassType}`;

// change password
export const getChangePasswordUrl = () => `${centralURL}/password/change`;

// signup roles
export const getSignupRolesUrl = () => '/roles/permitted';

// countries
export const getCountriesUrl = () => '/countries';

// OTP login
export const getLoginOTPUrl = () => `${centralURL}/login?ident_kind=mobile`;

//profile
export const getProfileUrl = () => `${centralURL}/users/profile`;

//logout
export const getLogoutUrl = () => `${centralURL}/logout`;
