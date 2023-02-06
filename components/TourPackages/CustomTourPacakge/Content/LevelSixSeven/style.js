import styled from '@emotion/styled';
import { AutoComplete, Button } from 'antd';
import { StyledHorizontal } from 'components/Common/commonStyles';

export const StyledChip = styled(StyledHorizontal)`
  height: 31px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.green[1] : theme.colors.gray[1]};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.blue[10] : theme.colors.gray[27]};
  border-radius: ${({ theme }) => theme.radii.chart};
  margin: 0px 4px 12px 4px;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 19px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  padding: 7px 18px;
`;

export const StyledAutoComplete = styled(AutoComplete)`
  border: none !important;
`;

export const StyledButton = styled(Button)`
  width: 180px;
  height: 36px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.btnPrimary};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin: 10px 0px 37px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[0]};
  }
  border: ${({ theme }) => theme.borders.blue};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.blue[10]};
`;
