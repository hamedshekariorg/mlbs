import React, { useEffect } from 'react';
import HeaderCard from 'components/Flights/Flight/HeaderCard';
import { StyledContainer, StyledMainWrapper } from './style';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Content from './Content';

const Order = () => {
  const router = useRouter();
  const { departure, returnFlight } = useSelector((state) => state.flights);

  useEffect(() => {
    if (!departure.selected || !returnFlight.selected) router.back();
  }, []);

  return (
    <StyledContainer>
      <HeaderCard />
      <StyledMainWrapper>
        <Content />
      </StyledMainWrapper>
    </StyledContainer>
  );
};

export default Order;
