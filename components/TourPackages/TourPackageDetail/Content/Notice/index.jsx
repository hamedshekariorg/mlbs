import { StyledDiv, StyledVertical } from 'components/Common/commonStyles';

const Notice = ({ notice }) => {
  return (
    <StyledVertical id="Notice">
      <StyledDiv
        fontWeight={5}
        fontSize={6}
        lineHeight="160%"
        letterSpacing="0.02em"
        color="gray.27"
        ml="21px"
        dangerouslySetInnerHTML={{ __html: notice }}
      />
    </StyledVertical>
  );
};

export default Notice;
