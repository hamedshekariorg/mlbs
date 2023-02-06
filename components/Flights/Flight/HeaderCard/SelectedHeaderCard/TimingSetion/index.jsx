import React from 'react';
import {
  StyledContainer,
  StyledDepartureWrapper,
  StyledDestinationWrapper,
  StyledSvgWrapper,
  StyledDescription,
  StyledTitle,
} from './style';
import departurePlane from 'public/static/images/departurePlane.svg';
import { StyledDiv, StyledImg } from 'components/Common/commonStyles';
const TimingSection = () => {
  return (
    <StyledContainer>
      <StyledDepartureWrapper>
        <StyledTitle>Tehran</StyledTitle>
        <StyledDescription>20:30 PM</StyledDescription>
        <StyledDescription>Thursday</StyledDescription>
        <StyledDescription>7 April 2022</StyledDescription>
      </StyledDepartureWrapper>
      <StyledSvgWrapper>
        <StyledDiv
          width="100px"
          border={'divider'}
          position="absolute"
          mt="10px"
        />
        <StyledImg
          src={departurePlane}
          width={18.5}
          height={18.5}
          mt="2px"
          alt="departure"
        />
      </StyledSvgWrapper>
      <StyledDestinationWrapper>
        <StyledTitle>Tehran</StyledTitle>
        <StyledDescription>20:30 PM</StyledDescription>
        <StyledDescription>Thursday</StyledDescription>
        <StyledDescription>7 April 2022</StyledDescription>
      </StyledDestinationWrapper>
    </StyledContainer>
  );
};

export default TimingSection;
