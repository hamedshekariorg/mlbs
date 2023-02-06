import {
  StyledVertical,
  StyledDiv,
  StyledSpan,
  StyledImg,
} from 'components/Common/commonStyles';

export default function Welcome() {
  return (
    <StyledVertical>
      <StyledSpan
        fontWeight={4}
        fontSize={18}
        lineHeight="34px"
        color="gray.52"
      >
        Hi there! Nice to meet you
      </StyledSpan>
      <StyledDiv width="817px" height="346px" borderRadius="lg" mt="32px">
        <StyledImg
          overflow="hidden"
          width="100%"
          height="100%"
          src="/static/images/tourguide/girl.svg"
        />
      </StyledDiv>
    </StyledVertical>
  );
}
