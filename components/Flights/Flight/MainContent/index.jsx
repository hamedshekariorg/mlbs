import React from 'react';
import {
  StyledDiv,
  StyledH3,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import Filter from './Filters';
import FlightCard from './FlightCard';
import InfoCardGrid from 'components/Common/PolicyGrid';
import { StyledCardContainer, StyledButton } from './style';
const MainContent = () => {
  return (
    <StyledVertical justifyContent="flex-start" alignItems="space-between">
      <StyledHorizontal>
        <StyledCardContainer>
          {[...Array(6)].map((item) => (
            <FlightCard key={item} />
          ))}
          <StyledHorizontal
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <StyledButton>
              <StyledH3
                fontSize={7}
                mt={2}
                fontWeight={6}
                lineHeight="19px"
                textAlign="center"
                letterSpacing="0.05em"
                color="blue.10"
              >
                Load More
              </StyledH3>
            </StyledButton>
          </StyledHorizontal>
        </StyledCardContainer>

        <Filter />
      </StyledHorizontal>
      <InfoCardGrid type="flight" />
    </StyledVertical>
  );
};

export default MainContent;
