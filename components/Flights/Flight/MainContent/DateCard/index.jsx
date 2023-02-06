import React from 'react';
import {
  StyledContainer,
  StyledDateContainer,
  StyledPriceContainer,
} from './style';

const DateCard = ({ date, price }) => {
  return (
    <StyledContainer className="item">
      <StyledDateContainer>{date}</StyledDateContainer>
      <StyledPriceContainer>{price}</StyledPriceContainer>
    </StyledContainer>
  );
};

export default DateCard;
