import { Button, Divider } from 'antd';
import { StyledDiv, StyledH3 } from 'components/Common/commonStyles';
import React from 'react';
import {
  StyledContainer,
  StyledTypeTitleWrapper,
  StyledColumn,
  StyledInfoContainer,
  StyledWrapper,
  StyledFlightClassWrapper,
  StyledCircleContainer,
  StyledDivider,
} from './style';

const InfoSection = ({ type }) => {
  return (
    <StyledContainer>
      <StyledTypeTitleWrapper>
        <StyledH3
          fontSize={3}
          mt={1}
          fontWeight={7}
          color="#fff"
          lineHeight="14px"
        >
          {type}
        </StyledH3>
      </StyledTypeTitleWrapper>
      <StyledColumn>
        <StyledInfoContainer>
          <StyledWrapper>
            <StyledFlightClassWrapper>
              <StyledH3
                fontWeight={5}
                fontSize={0}
                lineHeight="12px"
                textAlign="center"
                color="gray.27"
                mt={1}
              >
                Economy
              </StyledH3>
            </StyledFlightClassWrapper>
            <StyledH3
              ml={2}
              mt={1}
              fontWeight={5}
              fontSize={0}
              lineHeight="12px"
              textAlign="center"
              color="gray.27"
            >
              W51036
            </StyledH3>
          </StyledWrapper>
          <StyledWrapper>
            <StyledInfoContainer>
              <StyledCircleContainer>5</StyledCircleContainer>
              <StyledH3
                ml={2}
                fontWeight={5}
                fontSize={0}
                lineHeight="12px"
                textAlign="center"
                color="gray.27"
                mt={1}
              >
                Seats Left
              </StyledH3>
            </StyledInfoContainer>
          </StyledWrapper>
        </StyledInfoContainer>
        <StyledDivider />
      </StyledColumn>
    </StyledContainer>
  );
};

export default InfoSection;
