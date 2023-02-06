import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RoleId } from 'services/request';
import Button from 'components/Common/Button';
import {
  StyledInput,
  StyledInputGroup,
  StyledSelect,
  StyledOption,
} from 'components/Common/Input/style';
import { StyledDiv, StyledImg } from 'components/Common/commonStyles';
import {
  verifyRegisterAction,
  registerUserAction,
  getLoginOTPAction,
} from 'store/auth/auth.action';
import useAuthModal from 'hooks/useAuthModal';
import { Checkbox } from 'antd';
import Link from 'components/Link';

const OTPcode = ({ countriesCode, isRegister, time, startTimer }) => {
  const dispatch = useDispatch();

  const [code, setCode] = useState(null);
  const [country_code, setCountry_code] = useState('+86');
  const [identifier, setIdentifier] = useState(null);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const { onClose } = useAuthModal();

  const { OTPCode, register, token } = useSelector((state) => state.auth);

  //send verify code to user
  const handleRequset = () => {
    isRegister
      ? dispatch(
          registerUserAction(
            {
              mobile: identifier,
              country_code,
              role_id: RoleId,
            },
            startTimer,
          ),
        )
      : dispatch(getLoginOTPAction({ country_code, identifier }, startTimer));
  };

  //Verification Verify code
  const handleLogin = () =>
    dispatch(verifyRegisterAction({ code, token }, onClose));

  return (
    <>
      <StyledInputGroup py="12px">
        <StyledSelect
          value={country_code}
          showSearch
          onChange={(value) => setCountry_code(value)}
        >
          {countriesCode?.map(({ value, icon, label }) => (
            <StyledOption key={value} value={value}>
              {icon && (
                <StyledImg mr={2} width="15px" height="12px" src={icon} />
              )}
              {label}
            </StyledOption>
          ))}
        </StyledSelect>
        <StyledInput
          onChange={(e) => setIdentifier(e.target.value)}
          width="100%"
          borderRadius="0 10px 10px 0"
        />
      </StyledInputGroup>
      <StyledInputGroup py="12px">
        <StyledInput
          onChange={(e) => setCode(e.target.value)}
          borderRadius="10px 0 0 10px"
        />
        <Button
          loading={isRegister ? register?.loading : OTPCode?.loading}
          disabled={!country_code || !identifier || time}
          border="input"
          btnType="greenLink"
          borderRadius="0 10px 10px 0"
          onClick={handleRequset}
          block
        >
          {time === 0 ? 'Request Verification Code' : time}
        </Button>
      </StyledInputGroup>
      {isRegister && (
        <StyledDiv mt="22px" mb="12px">
          <Checkbox
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          >
            I accept the <Link href="/terms">terms of service</Link> and{' '}
            <Link href="/policy">privacy policy</Link>
          </Checkbox>
        </StyledDiv>
      )}
      <Button
        mt="12px"
        loading={register?.loading}
        disabled={!identifier || !code || (isRegister && !acceptTerms)}
        block
        borderRadius="lg"
        justify="space-around"
        onClick={handleLogin}
      >
        Submit
      </Button>
    </>
  );
};

export default OTPcode;
