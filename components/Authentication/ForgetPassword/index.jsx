import React, { useEffect, useState } from 'react';
import { StyledDiv } from 'components/Common/commonStyles';
import { Divider } from 'antd';
import { ButtonInput, SelectInput } from 'components/Common/Input';
import Button from 'components/Common/Button';
import Link from 'components/Link';
import { getCountries } from 'services/countries';
import { useDispatch, useSelector } from 'react-redux';
import {
  forgetPasswordAction,
  verifyRegisterAction,
} from 'store/auth/auth.action';
import Icon from 'components/Icon';
import { useRouter } from 'next/router';

const ForgetPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [countriesCode, setCountriesCode] = useState([]);
  const [selectedCode, setSelectedCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [verifyCode, setVerifyCode] = useState(null);

  const otpLoading = useSelector((state) => state.auth.login.loading);
  const loginLoading = useSelector((state) => state.auth.register.loading);
  const setCountries = async () => {
    const countries = await getCountries({ page: 1, pagination_size: 250 });
    setCountriesCode(countries);
  };

  useEffect(() => {
    setCountries();
  }, []);

  const handleForgetPassword = () => {
    dispatch(
      forgetPasswordAction(
        {
          mobile: phoneNumber,
          country_code: selectedCode || '+86',
        },
        'mobile',
      ),
    );
  };

  const handleVerifyCode = () => {
    dispatch(verifyRegisterAction(verifyCode));
  };

  return (
    <StyledDiv>
      <StyledDiv fontSize={13} fontWeight={1}>
        Forgot password?
      </StyledDiv>
      <StyledDiv fontSize={4}>
        Enter phone number and verification code
      </StyledDiv>
      <StyledDiv width={310} margin={'auto'} mt={5}>
        <SelectInput
          placeholder={'Phone'}
          mt={5}
          selectMinWidth={'100px'}
          value={selectedCode || '+86'}
          options={countriesCode}
          onSelect={(item) => setSelectedCode(item.value)}
          onChange={(item) => setPhoneNumber(item)}
        />
        <ButtonInput
          mt={5}
          placeholder={'Code'}
          disabled={!phoneNumber}
          loading={otpLoading}
          onChange={setVerifyCode}
          onClick={handleForgetPassword}
        />
        <Button
          loading={loginLoading}
          disabled={!verifyCode}
          onClick={handleVerifyCode}
          mt={6}
          mb={4}
          width={'100%'}
          borderRadius={'10px'}
        >
          Confirm
        </Button>
        <Divider />
        <StyledDiv>
          <StyledDiv
            onClick={() => router.back()}
            color={'blue.10'}
            position={'absolute'}
            left={5}
          >
            <Icon cursor={'pointer'} fontSize={4} name={'icon-arrow'}>
              Back
            </Icon>
          </StyledDiv>
          <StyledDiv display={'flex'} justifyContent={'center'}>
            Don’t have an account?{' '}
            <Link href={'/account/register'}> Register</Link>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
};

export default ForgetPassword;
