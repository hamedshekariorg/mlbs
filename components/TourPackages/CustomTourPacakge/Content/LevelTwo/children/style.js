import styled from '@emotion/styled';
import { DatePicker, Select } from 'antd';

export const StyledSelect = styled(Select)`
  height: 45px !important;
  width: 323px !important;
  margin-left: -24px;
  margin-top: 8px;
  .ant-select-selector {
    border-color: ${({ borderColor }) => borderColor} !important;
    height: 44px !important;
    border-radius: ${({ theme }) => theme.radii.lg} !important;
    > span {
      line-height: 44px !important;
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  height: 45px !important;
  width: 323px !important;
  margin-left: -24px;
  margin-top: 8px;
  border-color: ${({ borderColor }) => borderColor} !important;
  border-radius: ${({ theme }) => theme.radii.lg} !important;
  > span {
    line-height: 44px !important;
  }
`;
