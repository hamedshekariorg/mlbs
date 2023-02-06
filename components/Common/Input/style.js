import styled from '@emotion/styled';
import { Select, Input, Button, Radio, Checkbox } from 'antd';
import {
  space,
  color,
  layout,
  border,
  flexbox,
  position,
  shadow,
  typography,
} from 'styled-system';
export const StyledInputGroup = styled(Input.Group)`
  display: flex;
  width: 100%;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
`;

export const StyledInput = styled(Input)`
  height: 44px;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
`;
export const StyledTextArea = styled(Input.TextArea)`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
`;

export const StyledSelect = styled(Select)`
  height: 44px;
  min-width: ${({ minWidth }) => minWidth};
  .ant-select-selector {
    border-color: ${({ borderColor }) => borderColor} !important;
    height: 44px !important;

    border-radius: ${({ borderRadius }) =>
      borderRadius ?? ' 10px 0 0 10px !important'};
    > span {
      line-height: 44px !important;
    }
  }
`;

export const StyledOption = styled(Select.Option)`
  height: 44px;
`;

export const StyledRadio = styled(Radio)`
  ${space}
  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ theme }) => theme.colors.blue[10]};
  }

  .ant-radio-checked .ant-radio-inner:after {
    background-color: ${({ theme }) => theme.colors.blue[10]};
  }

  .ant-radio-checked .ant-radio-inner:hover {
    background-color: ${({ theme }) => theme.colors.blue[10]};
  }

  color: ${({ theme }) => theme.colors.gray[27]};
`;

export const StyledButton = styled(Button)`
  height: 44px;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
`;
