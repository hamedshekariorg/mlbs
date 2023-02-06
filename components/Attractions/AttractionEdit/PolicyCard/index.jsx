import {
  StyledDiv,
  StyledLink,
  StyledParagraph,
  StyledText,
} from 'components/Common/commonStyles';
import { StyledContainer, StyledImage } from './style';

const PolicyCard = () => {
  return (
    <StyledContainer>
      <StyledImage src="/static/images/attractions/1.svg" />
      <StyledDiv pt="75px" pb="37px">
        <StyledText italic fontSize={11} color="gray.15">
          Charming Persian
        </StyledText>
        <StyledParagraph color="gray.27" mt="20px">
          Charm Persia, a platform dedicated to Travel, there is an introduction
          to Chinese attractions to make you correct Unlock the charm culture of
          the ancient Persian country and enjoy traveling!
        </StyledParagraph>
        <StyledLink fontSize={6} color="blue.10">
          Edit Policy
        </StyledLink>
      </StyledDiv>
    </StyledContainer>
  );
};

export default PolicyCard;
