import {
  StyledImg,
  StyledText,
  StyledDiv,
} from 'components/Common/commonStyles';
import { StyledContainer } from './style';

const TourCard = () => {
  return (
    <StyledContainer>
      <StyledImg
        width="40px"
        height="39px"
        src="/static/images/tourPackage/Group-card.svg"
      />
      <StyledDiv mt="27px">
        <StyledText
          fontWeight="5"
          fontSize="14"
          lineHeight="29px"
          color="red.3"
        >
          Customize
        </StyledText>
        <StyledText
          fontWeight="5"
          fontSize="14"
          lineHeight="29px"
          color="blue.10"
          pl="5px"
          whiteSpace="nowrap"
        >
          your tour
        </StyledText>
      </StyledDiv>
      <StyledText
        fontWeight="6"
        fontSize="6"
        lineHeight="150%"
        letterSpacing="0.02em"
        color="gray.27"
        mt="8px"
        textAlign="center"
      >
        Charming Persian custom tour let’s you build your own tour experience
      </StyledText>
    </StyledContainer>
  );
};

export default TourCard;
