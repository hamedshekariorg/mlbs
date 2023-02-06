import React from 'react';
import { Typography } from 'antd';
import {
  StyledContainer,
  StyledInfoContainer,
  StyledPricingContainer,
  StyledWrapper,
  StyledInfoWrapper,
} from './style';
import HeaderCardDivider from 'components/Flights/Flight/HeaderCard/HeaderCardDivider';
import PricingSection from './PricingSection';
import iranAirLine from 'public/static/images/iranAirLine.svg';
import TimingSection from './TimingSetion';
import InfoSection from './InfoSection';
import { StyledImg } from 'components/Common/commonStyles';

const SelectedHeaderCard = ({ type }) => {
  return (
    <StyledContainer>
      <StyledInfoContainer>
        <InfoSection type={type} />
        <StyledInfoWrapper>
          <StyledWrapper flex={0.9}>
            <StyledImg
              src={iranAirLine}
              width={75}
              height={93}
              position="absolute"
              top={-10}
              left={0}
              alt="airline"
            />
          </StyledWrapper>
          <StyledWrapper flex={3}>
            <TimingSection />
          </StyledWrapper>
        </StyledInfoWrapper>
      </StyledInfoContainer>
      <StyledPricingContainer>
        <PricingSection type={type} />
      </StyledPricingContainer>
      <HeaderCardDivider divider={true} />
    </StyledContainer>
  );
};

export default SelectedHeaderCard;
