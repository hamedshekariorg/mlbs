import styled from '@emotion/styled';
import { StyledH3, StyledVertical } from 'components/Common/commonStyles';

export const StyledPrice = styled(StyledH3)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[10]};
  text-align: center;
  color: ${({ theme }) => theme.colors.blue[10]};
`;

export const StyledDescription = styled(StyledH3)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSizes[3]};
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[40]};
`;

export const StyledContainer = styled(StyledVertical)`
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 86px;
`;
