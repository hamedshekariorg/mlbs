import { useTheme } from '@emotion/react';
import {
  StyledText,
  StyledRow,
  StyledCol,
  StyledDiv,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledContainer, StyledTxt, StyledProgress } from './style';
import Rate from 'components/Common/Rate';
import { travelReviewRate } from 'utils/tourPackage.utils';

const TravelReviews = () => {
  const theme = useTheme();
  return (
    <StyledContainer id="TravelReviews">
      <StyledRow>
        <StyledCol span={10}>
          <StyledVertical
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <StyledText fontSize="10" lineHeight="24px" color="gray.27">
              5.5
            </StyledText>
            <Rate />
            <StyledTxt fontSize="4" lineHeight="17px" mb="22px">
              Superb
            </StyledTxt>
            <StyledTxt fontSize="8" lineHeight="22px">
              Based on Evaluation
            </StyledTxt>
          </StyledVertical>
        </StyledCol>
        <StyledCol span={14}>
          {travelReviewRate.map(({ id, star, percent }) => (
            <StyledDiv key={id} mt="20px">
              <StyledTxt fontSize="2" mr="10px">
                {star} starts
              </StyledTxt>
              <StyledProgress
                percent={percent}
                strokeColor={theme.colors.blue[15]}
                trailColor={theme.colors.gray[1]}
              />
            </StyledDiv>
          ))}
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
};

export default TravelReviews;
