import React from 'react';
import { StyledDiv, StyledH3 } from 'components/Common/commonStyles';
import { StyledContainer, StyledSvgWrapper } from './style';
import HeaderCardDivider from 'components/Flights/Flight/HeaderCard/HeaderCardDivider';
import departurePlane from 'public/static/images/departurePlane.svg';
import returnPlane from 'public/static/images/returnPlane.svg';

const BasicHeaderCard = ({ type }) => {
  return (
    <StyledContainer>
      <StyledSvgWrapper>
        <StyledDiv position="relative">
          <StyledDiv
            width="100px"
            border="planeSvg"
            position="absolute"
            top="10px"
            left="-40px"
          />
          <img
            src={type == 'Return' ? returnPlane : departurePlane}
            width={18.5}
            height={18.5}
          />
        </StyledDiv>
        <StyledH3
          fontWeight={4}
          fontSize={65}
          lineHeight="77px"
          textAlign="center"
          color="gray.22"
        >
          {type == 'Return' ? 'Return' : 'Departure'}
        </StyledH3>
      </StyledSvgWrapper>
      <HeaderCardDivider />
    </StyledContainer>
  );
};

export default BasicHeaderCard;
