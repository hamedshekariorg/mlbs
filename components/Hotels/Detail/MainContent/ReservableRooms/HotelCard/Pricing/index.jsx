import {
  StyledDiv,
  StyledHorizontal,
  StyledImg,
  StyledVertical,
} from 'components/Common/commonStyles';
import React from 'react';
import { StyledContainer, StyledDescription, StyledPrice } from './style';
import plus from 'public/static/images/plus.svg';
import minus from 'public/static/images/minus.svg';
const Pricing = () => {
  return (
    <StyledContainer>
      <StyledVertical>
        <StyledPrice>¥446.9</StyledPrice>
        <StyledDescription>
          Included <br /> ¥ 6.99 Profit <br /> 6% Tax
        </StyledDescription>
      </StyledVertical>
      <StyledHorizontal
        justifyContent="space-between"
        alignSelf="flex-end"
        mb="-12px"
      >
        <StyledDiv
          width="24px"
          height="24px"
          backgroundColor="green.0"
          borderRadius="full"
        >
          <StyledImg src={plus} />
        </StyledDiv>
        <StyledDescription mr="27px" ml="27px" fontSize={10}>
          1
        </StyledDescription>
        <StyledDiv
          width="24px"
          height="24px"
          backgroundColor="green.0"
          borderRadius="full"
        >
          <StyledImg src={minus} />
        </StyledDiv>
      </StyledHorizontal>
    </StyledContainer>
  );
};

export default Pricing;
