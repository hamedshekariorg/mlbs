import React from 'react';
import { useSelector } from 'react-redux';
import { StyledHeaderCardsWrapper } from './style';
import BasicHeaderCard from './BasicHeaderCard';
import SelectedHeaderCard from './SelectedHeaderCard';
const HeaderCard = () => {
  const { departure, returnFlight } = useSelector((state) => state.flights);
  return (
    <StyledHeaderCardsWrapper>
      {returnFlight.selected ? (
        <>
          <SelectedHeaderCard type="Departure" />
          <SelectedHeaderCard type="Return" />
        </>
      ) : departure.selected ? (
        <>
          <SelectedHeaderCard type="Departure" />
          <BasicHeaderCard type="Return" />
        </>
      ) : (
        <>
          <BasicHeaderCard type="Departure" />
          <BasicHeaderCard type="Return" />
        </>
      )}
    </StyledHeaderCardsWrapper>
  );
};

export default HeaderCard;
