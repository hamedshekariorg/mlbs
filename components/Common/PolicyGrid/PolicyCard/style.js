import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  cursor: pointer;
  justify-content: space-evenly;
  align-items: center;
  width: 278px;
  height: 190px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.card};
  margin: 16px 0px 16px 0px;
  border-radius: ${({ theme }) => theme.radii.lg};
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[4]};
  }
`;
