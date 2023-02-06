import React from 'react';
import {
  StyledContainer,
  StyledProviderWrapper,
  StyledProviderContainer,
  StyledProviderTitle,
  StyledCardContainer,
  StyledInfoContainer,
  StyledInfoWrapper,
  StyledPricingWrapper,
} from './style';
import iranAirLine from 'public/static/images/iranAirLine.svg';
import PricingSection from './PricingSection';
import InfoSection from './InfoSection';
import TimingSection from './TimingSection';

const FlightCard = () => {
  return (
    <StyledContainer mb={24}>
      <StyledProviderContainer>
        <StyledProviderWrapper bg="orange.7">
          <StyledProviderTitle>Travia</StyledProviderTitle>
        </StyledProviderWrapper>
      </StyledProviderContainer>
      <StyledCardContainer bg="green.16">
        {/* alt tag & src must be dynamic based on fetched data */}
        <img src={iranAirLine} width={127} height={155} alt="iran-air" />
        <StyledInfoContainer>
          <StyledInfoWrapper>
            <InfoSection />
            <TimingSection />
          </StyledInfoWrapper>
        </StyledInfoContainer>
        <StyledPricingWrapper>
          <PricingSection />
        </StyledPricingWrapper>
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default FlightCard;
