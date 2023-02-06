import { createContext, useEffect, useState } from 'react';
import { getCountries } from 'services/countries';
import Modal from 'components/Common/Modal';
import Login from 'components/Authentication/Login';
import Register from 'components/Authentication/Register';
import QRcode from 'components/Authentication/QRcode';
import useCountDown from 'hooks/useCountDown';
import { EXPIRE_OTP_CODE_TIME } from 'utils/auth.utils';

const AuthModalContext = createContext();
const AuthModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState(null);

  const { time, startTimer } = useCountDown(EXPIRE_OTP_CODE_TIME);
  const [countriesCode, setCountriesCode] = useState([]);

  //get & set countries
  const setCountries = async () => {
    const countries = await getCountries({ page: 1, pagination_size: 250 });
    setCountriesCode(countries);
  };
  useEffect(() => {
    setCountries();
  }, []);

  //open modal
  const onOpen = (mode) => {
    setVisible(true);
    setMode(mode);
  };

  //close modal
  const onClose = () => setVisible(false);
  return (
    <AuthModalContext.Provider value={{ visible, onOpen, onClose, mode }}>
      <Modal
        visible={visible}
        footer={null}
        onCancel={onClose}
        closable={false}
      >
        {mode === 'login' && (
          <Login
            time={time}
            startTimer={startTimer}
            changeMode={setMode}
            countriesCode={countriesCode}
          />
        )}
        {mode === 'register' && (
          <Register
            time={time}
            startTimer={startTimer}
            changeMode={setMode}
            countriesCode={countriesCode}
          />
        )}
        {mode === 'QRcode' && <QRcode changeMode={setMode} />}
      </Modal>
      {children}
    </AuthModalContext.Provider>
  );
};

export { AuthModalContext, AuthModalProvider };
