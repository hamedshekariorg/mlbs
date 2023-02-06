import Button from 'components/Common/Button';
import {
  StyledDiv,
  StyledH1,
  StyledParagraph,
  StyledVertical,
} from 'components/Common/commonStyles';

const DescriptionCard = ({ title, description }) => {
  return (
    <StyledVertical height="100%" justifyContent="space-between" pb="60px">
      <StyledDiv>
        <StyledH1 fontSize={26} color="gray.15">
          {title}
        </StyledH1>
        <StyledParagraph fontSize={9} color="gray.25">
          {description}
        </StyledParagraph>
      </StyledDiv>
      <StyledDiv>
        <Button px="30px">Explore Related Posts</Button>
      </StyledDiv>
    </StyledVertical>
  );
};

export default DescriptionCard;
