import styled from '@emotion/styled';
import { Tabs } from 'antd';

export const StyledSearchContainer = styled.div`
  width: 100%;
  height: 224px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav-list {
    width: 100%;
    .ant-tabs-tab {
      flex: 1;
      justify-content: center;
    }
  }

  .ant-tabs-tab-btn {
    font-size: ${({ theme }) => theme.fontSizes[6]};
    color: ${({ theme }) => theme.colors.orange[13]};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    background-color: #e7f2f3 !important;
    color: #363636 !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    background-color: #e7f2f3 !important;
  }
`;
