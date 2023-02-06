import React from 'react';
import { hotelCards } from 'utils/hotel.utils';
import HotelCard from './HotelCard';
import { StyledContainer } from './style';

const HotelList = () => {
  return (
    <StyledContainer>
      {hotelCards.map(({ city, rate, title, subtitle, id, price }, index) => (
        <HotelCard
          key={`${index}_city-title`}
          city={city}
          rate={rate}
          title={title}
          subtitle={subtitle}
          id={id}
          price={price}
        />
      ))}
    </StyledContainer>
  );
};

export default HotelList;
