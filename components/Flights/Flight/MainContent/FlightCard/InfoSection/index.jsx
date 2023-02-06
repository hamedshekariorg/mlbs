import React from 'react';
import { StyledDiv, StyledH3 } from 'components/Common/commonStyles';
import {
  StyledContainer,
  StyledInfoContainer,
  StyledDividerWrapper,
  StyledImageWrapper,
  StyledClassWrapper,
  StyledCodeWrapper,
  StyledDivider,
} from './style';
import insurance from 'public/static/images/insurance.svg';
import { useTheme } from '@emotion/react';
const InfoSection = () => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <StyledInfoContainer>
        <StyledDiv>
          <StyledDiv
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <StyledImageWrapper>
              <img src={insurance} alt="insurance" />
            </StyledImageWrapper>
            <StyledClassWrapper>Business</StyledClassWrapper>
            <StyledCodeWrapper>
              <StyledH3
                mt={3}
                fontSize={6}
                color="orange.13"
                textAlign="center"
                opacity={0.73}
              >
                W51036
              </StyledH3>
            </StyledCodeWrapper>
          </StyledDiv>
        </StyledDiv>
        <StyledDiv
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StyledDiv
            mr={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight={6}
            fontSize={4}
            lineHeight="17px"
            bg="#fff"
            borderRadius={'full'}
            width="24px"
            height="24px"
            color="blue.14"
          >
            5
          </StyledDiv>
          <StyledH3
            fontSize={4}
            fontWeight={5}
            lineHeight="14px"
            mt={2}
            color="gray.1"
          >
            Seats Left
          </StyledH3>
        </StyledDiv>
      </StyledInfoContainer>
      <StyledDividerWrapper>
        <StyledDivider />
      </StyledDividerWrapper>
    </StyledContainer>
  );
};

export default InfoSection;
