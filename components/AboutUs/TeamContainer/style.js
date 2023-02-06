import styled from '@emotion/styled';
import { Tabs } from 'antd';

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin: 32px;
  }
  .ant-tabs-nav-list {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .ant-tabs-ink-bar {
      background: ${({ theme }) => theme.colors.gray[15]};
    }
  }
  .ant-tabs-tab {
    width: 100%;
    justify-content: center;
    color: ${({ theme }) => theme.colors.orange[13]};
  }
  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      color: ${({ theme }) => theme.colors.gray[15]};
    }
  }
`;
