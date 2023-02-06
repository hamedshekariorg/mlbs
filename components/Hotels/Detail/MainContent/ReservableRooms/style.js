import styled from '@emotion/styled';
import {
  StyledDiv,
  StyledH1,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import { Tabs } from 'antd';
import Icon from 'components/Icon';
const { TabPane } = Tabs;

export const StyledTitle = styled(StyledH1)`
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[20]};
  line-height: 34px;
  color: ${({ theme }) => theme.colors.gray[15]};
`;

export const StyledContainer = styled(StyledDiv)`
  .container {
    scroll-behavior: smooth;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledChip = styled(StyledDiv)`
  width: 84px;
  height: 31px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.green[1] : theme.colors.gray[1]};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.blue[10] : theme.colors.gray[27]};
  border-radius: ${({ theme }) => theme.radii.chart};
  margin: 0px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 19px;
  text-align: center;
  user-select: none;
  cursor: pointer;
`;

export const StyeldHotelCount = styled(StyledDiv)`
  width: 138px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green[7]};
  color: #fff;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 17px;
`;

export const StyledTabSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 16px 0px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border: ${({ theme }) => theme.borders.blue};
  border-radius: ${({ theme }) => theme.radii.lg}
    ${({ theme }) => theme.radii.lg} 0px 0px;
`;

export const StyledTabs = styled(Tabs)`
  border-radius: ${({ theme }) => theme.radii.chart} !important;

  .ant-tabs-tab-btn {
    h4 {
      margin: 0px 22px !important;
      font-size: ${({ theme }) => theme.fontSizes[6]};
      color: ${({ theme }) => theme.colors.gray[27]};
      background-color: ${({ theme }) => theme.colors.gray[0]} !important;
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active {
    h4 {
      color: ${({ theme }) => theme.colors.blue[10]} !important;
      border-bottom: ${({ theme }) => theme.borders.blue};
    }
    background-color: ${({ theme }) => theme.colors.gray[0]} !important;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    h4 {
      background-color: ${({ theme }) => theme.colors.gray[0]} !important;
      color: ${({ theme }) => theme.colors.blue[10]} !important;
    }
  }

  .ant-tabs-nav-more {
    display: none;
  }
`;

export const StyledTabPane = styled(TabPane)`
  width: 100%;
  height: 100%;
`;

export const StyledOverlayContainer = styled(StyledDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gradient[10]};
  width: 100%;
  height: 190px;
  position: sticky;
  bottom: -10px;
`;

export const StyledExpandContainer = styled(StyledHorizontal)`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: ${({ theme }) => theme.borders.footer};
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(Icon)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[27]};
  font-size: ${({ theme }) => theme.fontSizes[14]};
`;
