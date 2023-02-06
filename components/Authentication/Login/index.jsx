import { useState } from 'react';
import { Divider } from 'antd';
import { StyledDiv, StyledHorizontal } from 'components/Common/commonStyles';
import { RadioButton } from 'components/Common/Radio';
import Button from 'components/Common/Button';
import { StyledImage } from './style';
import OTPcode from 'components/Authentication/OTPcode';
import UserName from './Username';

const Login = ({ changeMode, time, startTimer, countriesCode }) => {
  const [loginMode, setLoginMode] = useState('otp');

  return (
    <StyledDiv>
      <StyledImage
        onClick={() => changeMode('QRcode')}
        src="/static/images/login/qr.svg"
      />
      <StyledDiv fontSize={13} fontWeight={1}>
        Log in
      </StyledDiv>

      <StyledDiv fontSize={4}>
        Enter phone number and verification code
      </StyledDiv>
      <StyledDiv width="310px" mx="auto" mt={5}>
        <RadioButton
          width="310px"
          defaultValue={loginMode}
          options={[
            { value: 'otp', label: 'One Time Code' },
            { value: 'username', label: 'Username' },
          ]}
          onChange={(item) => setLoginMode(item.value)}
        />
        <StyledDiv pt="22px">
          {loginMode === 'otp' ? (
            <OTPcode
              countriesCode={countriesCode}
              time={time}
              startTimer={startTimer}
            />
          ) : (
            <UserName />
          )}
        </StyledDiv>
        <Divider />
        <StyledHorizontal justifyContent="center">
          Don’t have an account ?
          <Button
            py="0"
            px="3px"
            btnType="text"
            height="auto"
            onClick={() => changeMode('register')}
          >
            Register
          </Button>
        </StyledHorizontal>
      </StyledDiv>
    </StyledDiv>
  );
};

export default Login;
