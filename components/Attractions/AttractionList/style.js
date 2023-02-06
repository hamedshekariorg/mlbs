import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const StyledFilterContainer = styled(StyledDiv)`
  padding: 10px;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.gray[27]};
  background: none;
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.colors.gray[27]};
  cursor: pointer;
`;
