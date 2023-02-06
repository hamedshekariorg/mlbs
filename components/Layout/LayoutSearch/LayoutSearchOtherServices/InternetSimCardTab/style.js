import styled from '@emotion/styled';
import { Select } from 'antd';

export const StyledSelect = styled(Select)`
  height: 30px;
  width: 130px;
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

export const CustomSelect = styled(Select)`
  height: 44px;
  width: 270px;
  text-align: left;
  .ant-select-selector {
    height: 44px !important;
    border-radius: ${({ theme }) => theme.radii.lg} !important;
    > span {
      line-height: 44px !important;
    }
  }
`;
