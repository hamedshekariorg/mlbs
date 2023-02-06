import styled from '@emotion/styled';
import { Button, Row, Select } from 'antd';
import {
  space,
  color,
  typography,
  border,
  shadow,
  fontSize,
} from 'styled-system';

export const StyledRow = styled(Row)`
  height: '100%';
`;

export const StyledFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSelect = styled(Select)`
  height: 44px;
  width: 100%;
  text-align: left;
  ${fontSize}
  .ant-select-selector {
    height: 44px !important;
    border-radius: ${({ borderRadius }) => borderRadius} !important;
    ${color}
    border-color: ${({ theme }) => theme.colors.blue[10]} !important;
    > span {
      line-height: 44px !important;
    }
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.radii.lg};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
  box-shadow: ${({ theme }) => theme.shadows.blue};
  ${color}
  ${border}
  ${shadow}
  ${typography}
  ${space}
`;
