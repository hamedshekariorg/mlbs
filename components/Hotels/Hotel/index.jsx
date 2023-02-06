import React, { useState, useEffect } from 'react';
import CustomCitySearch from 'components/Common/CustomCitySearch';
import { Cities } from 'utils/attraction.utils';
import InfoCardGrid from 'components/Common/PolicyGrid';
import HotelList from './HotelList';
import {
  CustomTitle,
  StyledContainer,
  StyledButton,
  StyledHotelWrapper,
  StyledMainContainer,
  StyledMainWrapper,
  StyledInfoGridWrapper,
  StyledButtonText,
} from './style';
import HotelFilters from './Filters';
import { StyledH3 } from 'components/Common/commonStyles';

const Hotel = () => {
  const [cityId, setCityId] = useState(null);

  useEffect(() => {
    // Search for hotels based on the city id
  }, [cityId]);

  return (
    <StyledContainer>
      <StyledMainContainer>
        <CustomTitle>Accommodations</CustomTitle>
        <StyledMainWrapper>
          <StyledHotelWrapper>
            <CustomCitySearch
              tabs={Cities}
              handleSetCityId={setCityId}
              cityId={cityId}
            />
            <HotelList />
            <StyledButton>
              <StyledButtonText>Load More</StyledButtonText>
            </StyledButton>
          </StyledHotelWrapper>
          <HotelFilters />
        </StyledMainWrapper>
      </StyledMainContainer>
      <StyledInfoGridWrapper>
        <InfoCardGrid type="hotel" />
      </StyledInfoGridWrapper>
    </StyledContainer>
  );
};

export default Hotel;
