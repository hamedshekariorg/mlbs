import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  width: 278px;
  height: 226px;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-top: 46px;
  align-items: center;
  padding-top: 26px;
  padding-left: 31px;
  padding-right: 31px;
`;
