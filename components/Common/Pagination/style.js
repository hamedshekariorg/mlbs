import styled from '@emotion/styled';
import { Pagination } from 'antd';

export const StyledPagination = styled(Pagination)`
  .ant-pagination-item-link {
    background: ${({ theme }) => theme.colors.green[0]};
    border-radius: ${({ theme }) => theme.radii.full};
  }
  .ant-pagination-item {
    color: ${({ theme }) => theme.colors.blue[15]};
    background: #fff;
    border: none;
  }
  .ant-pagination-item-active {
    background: ${({ theme }) => theme.colors.blue[15]};
    border-radius: ${({ theme }) => theme.radii.full};
    a {
      color: #ffffff !important;
    }
  }
  .ant-pagination-next,
  .ant-pagination-prev {
    border-radius: ${({ theme }) => theme.radii.full};
    margin: 0 32px;
    background: ${({ theme }) => theme.colors.green[0]};
    i {
      font-size: ${({ theme }) => theme.fontSizes[10]};

      color: ${({ theme }) => theme.colors.blue[15]};
    }
  }
`;
