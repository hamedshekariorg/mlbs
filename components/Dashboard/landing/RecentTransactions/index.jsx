import {
  StyledImg,
  StyledSpan,
  StyledVertical,
  StyledDiv,
} from 'components/Common/commonStyles';
import { StyledContainer } from './style';

const RecentTransactions = () => {
  return (
    <StyledContainer>
      <StyledImg
        width="23px"
        height="19px"
        src="/static/images/delete/twoArrows.svg"
      />
      <StyledSpan
        color="blue.46"
        fontWeight={8}
        fontSize={6}
        lineHeight="20px"
        ml="8px"
      >
        Recent transactions
      </StyledSpan>
      <StyledVertical mt="48px" alignItems="center">
        <StyledImg
          width="74px"
          height="100px"
          src="/static/images/dashboard/onchairGirl.svg"
        />
        <StyledDiv mt="12px" textAlign="center" px="113px">
          <StyledSpan
            fontWeight={5}
            fontSize={11}
            lineHeight="26px"
            letterSpacing="0.04em"
            color="blue.46"
          >
            You can earn point for free and use them to make transactions
          </StyledSpan>
          <StyledDiv mt="48px">
            <StyledSpan
              fontWeight={6}
              fontSize={6}
              lineHeight="19px"
              letterSpacing="0.05em"
              textDecoration="underline"
              color="blue.10"
            >
              Learn how
            </StyledSpan>
          </StyledDiv>
        </StyledDiv>
      </StyledVertical>
    </StyledContainer>
  );
};

export default RecentTransactions;
