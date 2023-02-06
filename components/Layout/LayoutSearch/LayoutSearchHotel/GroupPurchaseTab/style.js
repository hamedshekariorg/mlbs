import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const ReserveContainer = styled(StyledVertical)`
  width: 284px;
  height: 61px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[1]};
  border-radius: ${({ theme }) => theme.radii.lg};
  position: absolute;
  top: -47px;
  right: 0;
`;
