import {
  StyledDiv,
  StyledDivider,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import { StyledImage } from 'components/Authentication/Login/style';
import Button from 'components/Common/Button';
import OTPcode from 'components/Authentication/OTPcode';

const Register = ({ changeMode, countriesCode, time, startTimer }) => {
  return (
    <StyledDiv>
      <StyledImage
        onClick={() => changeMode('QRcode')}
        src="/static/images/login/qr.svg"
      />
      <StyledDiv fontSize={13} fontWeight={1}>
        Register
      </StyledDiv>
      <StyledDiv fontSize={4}>
        Enter phone number and verification code
      </StyledDiv>
      <StyledDiv width="310px" mx="auto" mt={5}>
        <OTPcode
          countriesCode={countriesCode}
          isRegister
          time={time}
          startTimer={startTimer}
        />
        <StyledDivider />
        <StyledHorizontal justifyContent="center">
          Already have an account ?
          <Button
            py="0"
            px="3px"
            btnType="text"
            height="auto"
            onClick={() => changeMode('login')}
          >
            Login
          </Button>
        </StyledHorizontal>
      </StyledDiv>
    </StyledDiv>
  );
};

export default Register;
