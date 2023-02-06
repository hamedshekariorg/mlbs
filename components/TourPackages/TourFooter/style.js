import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledBlock = styled(StyledVertical)`
  width: 278px;
  height: 190px;
  margin: auto;
  background: ${({ theme }) => theme.colors.gray[0]};
  padding: ${({ theme }) => theme.space[5]}px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radii.md};
  & img {
    color: ${({ theme }) => theme.colors.gray[24]};
    width: 47px;
    height: 47px;
    margin: auto;
  }
`;
