import styled from '@emotion/styled';
import { Tabs, Input } from 'antd';

const { TabPane } = Tabs;

export const StyledContainer = styled.div`
  direction: ltr;
`;

export const StyledTabs = styled(Tabs)`
  direction: ltr;
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
  #main-content {
    display: flex;
    height: 550px;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    text-align: center;
    padding-top: 20px;
  }
`;

export const StyledSearchInput = styled(Input)`
  height: ${({ theme }) => theme.sizes[7]}px;
  margin-right: 10px;
`;

export const StyledImage = styled.img`
  cursor: pointer;
`;
