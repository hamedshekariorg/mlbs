import { StyledContainer, StyledText } from './style';
import {
  StyledSpan,
  StyledDiv,
  StyledVertical,
} from 'components/Common/commonStyles';
import Rate from 'components/Common/Rate';

const TourGuideCard = ({ imageName, name, location }) => {
  return (
    <StyledContainer bgImg={`/static/images/tourGuide/${imageName}.svg`}>
      <StyledVertical position="absolute" bottom="18px" left="18px">
        <StyledText>{location}</StyledText>
        <Rate />
        <StyledText>{name}</StyledText>
      </StyledVertical>
    </StyledContainer>
  );
};

export default TourGuideCard;
