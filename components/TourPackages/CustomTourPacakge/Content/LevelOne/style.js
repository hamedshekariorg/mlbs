import styled from '@emotion/styled';
import { Checkbox, Select } from 'antd';

export const StyledSelect = styled(Select)`
  height: 45px !important;
  width: 323px !important;
  .ant-select-selector {
    border-color: ${({ borderColor }) => borderColor} !important;
    height: 44px !important;
    border-radius: ${({ theme }) => theme.radii.lg} !important;
    > span {
      line-height: 44px !important;
    }
  }
`;
