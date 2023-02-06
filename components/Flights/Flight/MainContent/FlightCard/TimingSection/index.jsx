import React from 'react';
import {
  StyledContainer,
  StyledDepartureWrapper,
  StyledReturnWrapper,
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
          width="13rem"
          height="1px"
          border="divider"
          position="absolute"
          mt="12px"
        />
        <StyledImg
          src={departurePlane}
          width={26.5}
          height={26.5}
          position="absolute"
          alt="departure"
        />
      </StyledSvgWrapper>
      <StyledReturnWrapper>
        <StyledTitle>Tehran</StyledTitle>
        <StyledDescription>20:30 PM</StyledDescription>
        <StyledDescription>Thursday</StyledDescription>
        <StyledDescription>7 April 2022</StyledDescription>
      </StyledReturnWrapper>
    </StyledContainer>
  );
};

export default TimingSection;
