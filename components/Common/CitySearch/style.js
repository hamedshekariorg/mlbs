import styled from '@emotion/styled';
import { Tabs } from 'antd';
import { Input } from 'components/Common/Input';

const { TabPane } = Tabs;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin: auto;
  }
  .ant-tabs-tab-btn {
    font-size: ${({ theme }) => theme.fontSizes[8]};
    color: ${({ theme }) => theme.colors.orange[13]};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.colors.blue[10]};
  }
  .ant-tabs-nav-wrap {
    margin-left: ${({ theme }) => theme.space[5]}px;
  }
  .ant-tabs-extra-content {
    width: 131px;
    height: 45px;
    transition: all 0.5s;
  }
  .ant-tabs-extra-content:hover {
    width: 100%;
  }
  .ant-tabs-tab {
    padding: 0 ${({ theme }) => theme.space[1]}px;
  }
  .ant-tabs-nav::before {
    border-bottom: 0;
  }
  .ant-tabs-nav-list {
    border-bottom: ${({ theme }) => theme.borders.tab};
  }
`;
export const StyledInput = styled(Input)`
  border: ${({ theme }) => theme.borders.input};
  cursor: pointer;
`;
export const StyledTabPane = styled(TabPane)`
  padding-top: ${({ theme }) => theme.space[6]}px;
`;
