import React, { useState } from 'react';
import { StyledDiv } from 'components/Common/commonStyles';
import { Input } from 'components/Common/Input';
import Button from 'components/Common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction, verifyRegisterAction } from 'store/auth/auth.action';
import Icon from 'components/Icon';
import { useRouter } from 'next/router';

const ResetPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // const otpLoading = useSelector((state) => state.auth.login.loading);
  // const loginLoading = useSelector((state) => state.auth.register.loading);

  const handleResetPassword = () => {
    dispatch(verifyRegisterAction());
  };

  return (
    <StyledDiv>
      <StyledDiv fontSize={13} fontWeight={1}>
        Reset your password
      </StyledDiv>
      <StyledDiv fontSize={4}>Please enter your new password</StyledDiv>
      <StyledDiv width={310} margin={'auto'} mt={5}>
        <Input
          onChange={(value) => setUsername(value)}
          placeholder={'Username'}
          mt={5}
        />
        <Input
          type={'password'}
          onChange={(value) => setPassword(value)}
          placeholder={'Password'}
          mt={5}
        />
        <Button
          // loading={loginLoading}
          // disabled={!verifyCode}
          onClick={handleResetPassword}
          mt={6}
          mb={4}
          width={'100%'}
          borderRadius={'10px'}
        >
          Confirm
        </Button>
        <StyledDiv display={'flex'} justifyContent={'center'}>
          <Icon
            color={'blue.10'}
            cursor={'pointer'}
            fontSize={4}
            name={'icon-arrow'}
            onClick={() => router.back()}
          >
            Back
          </Icon>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};

export default ResetPassword;
