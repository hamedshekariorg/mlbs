import styled from '@emotion/styled';
import { StyledHorizontal } from '../commonStyles';

export const StyledContainer = styled(StyledHorizontal)`
  span {
    margin-left: 4px;
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.green[1] : theme.colors.gray[1]};
    padding: 4px 12px;
    align-items: center;
    color: ${({ theme, selected }) =>
      selected ? theme.colors.blue[10] : theme.colors.gray[27]};
    border-radius: ${({ theme }) => theme.radii.xxl};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    cursor: pointer;
  }
`;
