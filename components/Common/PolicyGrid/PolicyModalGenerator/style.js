import styled from '@emotion/styled';
import { StyledHorizontal, StyledSpan } from 'components/Common/commonStyles';

export const StyledOptionWrapper = styled(StyledHorizontal)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledOptionText = styled(StyledSpan)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 19px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.blue[10]};
  text-decoration: underline;
`;
