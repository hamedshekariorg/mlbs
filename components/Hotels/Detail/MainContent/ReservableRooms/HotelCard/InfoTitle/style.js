import styled from '@emotion/styled';
import { StyledH3 } from 'components/Common/commonStyles';

export const StyledTitle = styled(StyledH3)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.blue[10]};
  width: fit-content;
`;
