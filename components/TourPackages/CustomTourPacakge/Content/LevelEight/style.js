import styled from '@emotion/styled';
import { StyledHorizontal, StyledVertical } from 'components/Common/commonStyles';

export const StyledBox = styled(StyledVertical)`
  min-height: 257px;
  width: 670px;
  background-color: #fff;
  margin: 16px 0px 8px 0px;
  padding: 16px 16px 1px 16px;
  border: ${({ theme }) => theme.borders.input};
  border-radius: ${({ theme }) => theme.radii.lg};
  .ant-input {
    border: none;
    border-radius: ${({ theme }) => theme.radii.lg};
    &:focus {
      box-shadow: none !important;
    }
  }
`;

export const StyledSuggestionContainer = styled(StyledHorizontal)`
  height: 30px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[1]};
  border: ${({ theme }) => theme.borders.divider};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 8px 16px;
  margin-top: 13px;
  margin-right: 6px;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[27]};
  cursor: pointer;
`;
