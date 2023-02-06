import styled from '@emotion/styled';
import { Select } from 'antd';

export const StyledSelect = styled(Select)`
  height: 44px;
  width: 270px;
  text-align: left;
  .ant-select-selector {
    border: ${({ theme }) => theme.borders.input} !important;
    height: 44px !important;
    border-radius: ${({ borderRadius }) => borderRadius} !important;
    > span {
      line-height: 44px !important;
    }
  }
`;
