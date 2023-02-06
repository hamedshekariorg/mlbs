import React from 'react';
import {
  StyledContainer,
  StyledTimingContainer,
  StyledPrice,
  StyledDescription,
  StyledButton,
} from './style';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
  clearFlightState,
  clearReturnState,
} from 'store/flights/flights.action';

const PricingSection = ({ type }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  /*
  a Description on these two function:
  Take user one step back into the flight page to select another ticket.
  Also, clear their flight information in redux store.
  */
  const departureClickHandler = () => {
    if (router.pathname.includes('/flights/order')) {
      router.back();
    }
    dispatch(clearFlightState());
  };

  const returnClickHandler = () => {
    dispatch(clearReturnState());
    router.back();
  };

  return (
    <StyledContainer>
      <StyledTimingContainer>
        <StyledPrice>¥446.9</StyledPrice>
        <StyledDescription>¥ 6.99 Profit 6% Tax</StyledDescription>
        <StyledButton
          onClick={
            type === 'Return' ? returnClickHandler : departureClickHandler
          }
        >
          Change
        </StyledButton>
      </StyledTimingContainer>
    </StyledContainer>
  );
};

export default PricingSection;
