import {
  StyledDiv,
  StyledVertical,
  StyledSpan,
} from 'components/Common/commonStyles';

const Section = ({ title, children, isTitleComponent }) =>
  !isTitleComponent ? (
    <StyledVertical justifyContent="center" mt="28px">
      <StyledDiv mb="24px">
        <StyledSpan
          fontWeight={5}
          fontSize={4}
          lineHeight="160%"
          color="gray.15"
        >
          {title}
        </StyledSpan>
      </StyledDiv>
      {children}
    </StyledVertical>
  ) : (
    <>
      {title}
      <StyledVertical justifyContent="center">{children}</StyledVertical>
    </>
  );

export default Section;
