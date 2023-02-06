import React from 'react';
import { StyledContainer } from './style';
import phone from 'public/static/images/phone.svg';
import {
  StyledImg,
  StyledText,
  StyledH3,
} from 'components/Common/commonStyles';
const Booking = () => {
  return (
    <StyledContainer>
      <StyledImg src={phone} width={36} height={28} mb="24px" alt="booking" />
      <StyledH3
        mb={24}
        color="blue.10"
        fontWeight="normal"
        fontSize={10}
        lineHeight="29px"
      >
        <StyledText
          fontSize={10}
          color="red.3"
          fontWeight={5}
          lineHeight="29px"
        >
          Book
        </StyledText>{' '}
        by phone
      </StyledH3>
      <StyledH3 fontSize={6} mb={24} color="blue.10" lineHeight="19px">
        + 400 51 77 00
      </StyledH3>
      <StyledH3 fontSize={2} color="gray.27" lineHeight="14px">
        Monday To Friday 9:00am - 7:30pm
      </StyledH3>
    </StyledContainer>
  );
};

export default Booking;
