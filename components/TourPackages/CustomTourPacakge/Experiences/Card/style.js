import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  height: 100%;
  width: 370px;
  margin-left: 16px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 20px 32px;
`;
