import styled from '@emotion/styled';
import { AutoComplete, Tabs } from 'antd';
import { StyledDiv } from 'components/Common/commonStyles';

const { TabPane } = Tabs;

export const StyledBox = styled(StyledDiv)`
  .tabs {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 30px;
  }
  .input {
    width: 131px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.25s ease-in-out;
    &:hover {
      width: 100%;
    }
  }
  .stack-top {
    z-index: ${({ theme }) => theme.zIndices[1]};
  }
`;

export const StyledAutoComplete = styled(AutoComplete)`
  border: none !important;
`;

export const StyledTabs = styled(Tabs)`
  margin-top: 5px;
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
  .ant-tabs-tab {
    padding: 0 ${({ theme }) => theme.space[1]}px;
  }
  .ant-tabs-nav::before {
    border-bottom: 0;
  }
  .ant-tabs-nav-list {
    border-bottom: ${({ theme }) => theme.borders.tab};
  }
  .ant-tabs-nav-more {
    display: none;
  }
  .ant-tabs-ink-bar {
    background: ${({ theme }) => theme.colors.blue[10]};
  }
`;
export const StyledTabPane = styled(TabPane)`
  padding-top: ${({ theme }) => theme.space[6]}px;
`;
