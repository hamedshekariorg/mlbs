import styled from '@emotion/styled';

import {
  StyledDiv,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  align-items: center;
  width: 229px;
  margin-top: 76.5px;
  margin-bottom: 105px;
`;

export const StyledWrapper = styled(StyledDiv)`
  width: 260px;
  margin-top: 4px;
  padding: 0px 19px 4px 19px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledResetButton = styled(StyledText)`
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: ${({ theme }) => theme.colors.gray[27]};
  cursor: pointer;
  margin-bottom: 10px;
`;
