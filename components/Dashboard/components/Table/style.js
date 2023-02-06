import styled from '@emotion/styled';
import { Table } from 'antd';

export const StyledTable = styled(Table)`
  .ant-table {
    border-radius: ${({ theme }) => theme.radii.xxs};
    background: transparent;
  }

  .ant-table-thead > tr > th {
    border-bottom: ${({ theme }) => theme.borders.table};
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
  }

  .ant-table-thead > tr > th {
    background: transparent;
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    display: none;
  }
`;
