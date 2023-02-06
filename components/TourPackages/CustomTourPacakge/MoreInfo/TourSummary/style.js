import styled from '@emotion/styled';
import { StyledHorizontal, StyledVertical } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  width: 229px;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 0px 10px 0px 10px;
`;

export const StyledRowContainer = styled(StyledHorizontal)`
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.gray[15]};
`;

export const StyledTitleContainer = styled(StyledHorizontal)`
  margin-left: 3px;
  color: ${({ theme }) => theme.colors.gray[27]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;

export const StyledCircle = styled(StyledHorizontal)`
  width: 14px;
  height: 14px;
  align-items: center;
  justify-content: center;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.green[6] : theme.colors.gray[1]};
  border: ${({ theme, selected }) =>
    selected ? theme.borders.selectedCircle : theme.borders.circle};
  border-radius: 40.25px;
  margin-right: 6px;
`;
