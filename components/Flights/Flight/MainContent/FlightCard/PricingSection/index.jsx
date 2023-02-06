import React from 'react';
import {
  StyledContainer,
  StyledDividerWrapper,
  StyledTimingContainer,
  StyledPrice,
  StyledDescription,
  StyledButton,
} from './style';
import FlightCardDivider from 'components/Flights/Flight/MainContent/FlightCard/FlightCardDivider';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  selectDepartureFlight,
  selectReturnFlight,
} from 'store/flights/flights.action';

const PricingSection = () => {
  const router = useRouter();

  const { departure } = useSelector((state) => state.flights);
  const dispatch = useDispatch();

  /* 
    Change the state of selected tickets on redux store & 
    take user one step forward to order page.
  */
  const selectTicket = () => {
    if (departure.selected) {
      const { locale } = router.query;
      dispatch(selectReturnFlight());
      router.push(`/${locale}/flights/order`);
    } else {
      dispatch(selectDepartureFlight());
    }
  };

  return (
    <StyledContainer>
      <StyledDividerWrapper>
        <FlightCardDivider />
      </StyledDividerWrapper>
      <StyledTimingContainer>
        <StyledPrice>¥446.9</StyledPrice>
        <StyledDescription>included ¥ 6.99 Profit 6% Tax</StyledDescription>
        <StyledButton onClick={selectTicket}>
          {departure.selected ? 'Return' : 'Departure'}
        </StyledButton>
      </StyledTimingContainer>
    </StyledContainer>
  );
};

export default PricingSection;
