import styled from '@emotion/styled';
import { StyledH1, StyledH4 } from 'components/Common/commonStyles';

export const StyledTitle = styled(StyledH1)`
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[20]};
  line-height: 34px;
  color: ${({ theme }) => theme.colors.gray[15]};
  user-select: none;
`;

export const StyledParagraph = styled(StyledH4)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 27px;
  color: ${({ theme }) => theme.colors.gray[27]};
`;
