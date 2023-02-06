import { StyledVertical, StyledSpan } from 'components/Common/commonStyles';
import { StyledSectionContentItemWrapper } from './style';

export default function SectionContent({ title, component }) {
  return (
    <StyledVertical width="100%" justifyContent="center">
      <StyledSectionContentItemWrapper>
        <StyledSpan
          color="gray.27"
          fontWeight={5}
          fontsize={4}
          lineHeight="17px"
        >
          {title && title}
        </StyledSpan>
        {component}
      </StyledSectionContentItemWrapper>
    </StyledVertical>
  );
}
