import Welcome from './Welcome';
import {
  StyledDiv,
  StyledHorizontal,
  StyledSpan,
  StyledImg,
} from 'components/Common/commonStyles';
import { StyledContainer } from './style';
import { temporaryTourDetailContent } from 'utils/tourGuide.utils';
import Review from 'components/Common/Review';
import Comments from 'components/Common/Comments';
import { temporaryComments } from 'utils/tourPackage.utils';

const AboutMe = () => {
  return (
    <StyledDiv mr="65px" maxWidth="817px">
      <Welcome />
      {temporaryTourDetailContent.map(({ id, title, component, icon }) => (
        <StyledContainer mt="100px" mr="40px" key={id}>
          <StyledHorizontal alignItems="center" mb="25px">
            <StyledImg src={`/static/images/tourguide/${icon}.svg`} />
            <StyledSpan
              ml="14px"
              fontWeight={4}
              fontSize={18}
              lineHeight="34px"
              color="gray.52"
            >
              {title}
            </StyledSpan>
          </StyledHorizontal>
          {component}
        </StyledContainer>
      ))}
      <StyledDiv mt="72px">
        <Review />
        <Comments comments={temporaryComments} />
      </StyledDiv>
    </StyledDiv>
  );
};

export default AboutMe;
