import styled from '@emotion/styled';
import { Radio } from 'antd';

export const StyledRadioGroup = styled(Radio.Group)`
  width: ${({ width }) => width};
  height: 44px;

  label > span:active {
    color: ${({ theme }) => theme.colors.blue[10]};
  }
  > label {
    width: ${({ width }) => `calc(${width}/2)`};
    height: 44px !important;
    line-height: 44px !important;
    font-size: ${({ theme }) => theme.fontSizes[4]} !important;
    text-align: center !important;

    .ant-radio-button-wrapper-checked {
      border-color: ${({ theme }) => theme.colors.blue[10]} !important;
    }
  }
`;

export const StyledRadioButton = styled(Radio.Button)`
  height: 44px;
  :first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  :last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
