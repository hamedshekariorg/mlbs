import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledInfoContainer = styled(StyledVertical)`
  justify-content: space-between;
  width: 229px;
  height: 201px;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 16px 21px 24px 21px;
`;
