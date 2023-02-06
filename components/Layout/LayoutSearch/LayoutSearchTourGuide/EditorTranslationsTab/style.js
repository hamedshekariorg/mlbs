import styled from '@emotion/styled';
import { Select } from 'antd';

export const StyledSelect = styled(Select)`
  height: 30px;
  width: 180px;
  display: flex;
  align-items: center;
  justifycontent: center;
  text-align: left;
  .ant-select-selector {
    border-radius: ${({ theme }) => theme.radii.chart} !important;
    background-color: ${({ theme }) => theme.colors.gray[1]};
    height: 30px !important;
  }
`;
