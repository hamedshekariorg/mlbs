import styled from '@emotion/styled';
import Button from 'components/Common/Button';
import { StyledDiv, StyledVertical } from 'components/Common/commonStyles';

export const StyledCardContainer = styled(StyledVertical)`
  height: 100%;
  width: 100%;
  flex: 3;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  width: 147px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows.btnPrimary};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin: 16px 0px 72px 0px;
  &:hover {
    background-color: #fff;
  }
`;
