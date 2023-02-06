import {
  StyledText,
  StyledImg,
  StyledVertical,
} from 'components/Common/commonStyles';

const LandingMotion = () => {
  return (
    <StyledVertical height="601px" mb="6" alignItems="center">
      <StyledImg
        src="/static/images/landingPage/motion-bg.svg"
        width="100%"
        height="545px"
        position="absolute"
      />
      <StyledText mt="72px" color="gray.15" zIndex={2} fontSize={26}>
        Motion
      </StyledText>
      <StyledImg
        src="/static/images/landingPage/motion-video.png"
        width="670px"
        height="367px"
        mt="48px"
      />
    </StyledVertical>
  );
};

export default LandingMotion;
