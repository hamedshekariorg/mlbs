import { getCookie } from 'utils/auth.utils';
import FourOhFour from 'components/404';

const AuthGuard = ({ children }) => {
  return getCookie('access_token') ? children : <FourOhFour />;
};

export default AuthGuard;
