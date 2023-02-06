import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  width: 278px;
  height: 222px;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 0px 30px 0px 29px;
`;
