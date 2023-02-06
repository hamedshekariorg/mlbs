import styled from '@emotion/styled';
import { Button } from 'antd';
import {
  StyledH3,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  margin-bottom: 30px;
  width: 278px;
  padding: 33px 32px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};

  .ant-picker {
    width: 212px;
    height: 45px;
    border-radius: ${({ theme }) => theme.radii.lg};
    border: ${({ theme }) => theme.borders.darkGray};
    padding-right: 19px;
  }
  .ant-picker-focused {
    border-radius: 0;
    border: none;
  }

  .ant-picker-input > input {
    font-size: ${({ theme }) => theme.fontSizes[3]};
    color: ${({ theme }) => theme.colors.gray[15]};
  }
  .ant-picker-range-separator {
    display: none;
  }
  .ant-picker-suffix {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.orange[13]};
  }

  .ant-picker-active-bar {
    display: none;
  }
`;

export const StyledExpandingContainer = styled(StyledHorizontal)`
  width: 212px;
  height: 45px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  border: ${({ theme }) => theme.borders.input};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-top: 12px;
`;

export const StyledCalendarContainer = styled(StyledVertical)`
  align-items: center;
  justify-content: center;
  transition: max-height 0.15s ease-out;
  max-height: ${({ isCalendarPanelOpen }) =>
    isCalendarPanelOpen ? '402px' : '0px'};
  opacity: ${({ isCalendarPanelOpen }) => !isCalendarPanelOpen && '0'};
  overflow: hidden;
  z-index: ${({ isCalendarPanelOpen }) => (!isCalendarPanelOpen ? '-1' : '1')};

  .ant-picker-calendar-mode-switch {
    display: none !important;
  }
  .ant-picker-calendar {
    background-color: ${({ theme }) => theme.colors.gray[0]} !important;
    margin-bottom: 4px;
  }

  .ant-picker-panel {
    background-color: ${({ theme }) => theme.colors.gray[0]} !important;
  }

  .ant-picker-calendar-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-picker-calendar-header .ant-select .ant-select-selector {
    border-radius: ${({ theme }) => theme.radii.lg};
    width: auto;
    height: auto;
    padding: 4px;
  }

  .ant-select-selection-item {
    margin-left: 4px;
  }

  .ant-picker-cell-selected .ant-picker-cell-inner {
    background-color: ${({ theme }) => theme.colors.blue[10]} !important;
    border-radius: ${({ theme }) => theme.radii.xs};
  }
`;

export const StyledBookButton = styled(Button)`
  width: 212px;
  height: 44px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.blue[10]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 34px;
  box-shadow: ${({ theme }) => theme.shadows.btnSecondary};
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue[9]};
  }
`;

export const StyledButtonText = styled(StyledH3)`
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: #fff;
  margin-top: 10px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
`;
