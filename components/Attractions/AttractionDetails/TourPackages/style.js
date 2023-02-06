import styled from '@emotion/styled';
import { Tabs } from 'antd';

export const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.blue[10]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  width: 100%;
  min-height: 607px;
  border-radius: 10px 10px 200px 200px;
  .list {
    list-style: none;
  }
`;
export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab {
    width: 100% !important;
    border: none !important;
    margin-left: 0 !important;
    border-radius: 0 !important;
    color: ${({ theme }) => theme.colors.blue[10]};
  }
  .ant-tabs-tab-active {
    background: ${({ theme }) => theme.colors.blue[10]} !important;
  }
  .ant-tabs-tab-active div {
    color: #fff !important;
  }
`;
