import styled from '@emotion/styled';
import { Tabs, Input } from 'antd';
const { TabPane } = Tabs;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-tab-btn {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    color: ${({ theme }) => theme.colors.orange[13]};
  }
  .ant-tabs-nav {
    margin: 0 auto;
    width: fit-content;
    display: flex !important;
    justify-content: space-between !important;
    .ant-tabs-nav-wrap {
      display: flex;
      justify-content: flex-end;
      margin-left: 10px;
    }
  }
`;
export const StyledTabPane = styled(TabPane)`
  padding-top: ${({ theme }) => theme.space[5]}px;
`;
