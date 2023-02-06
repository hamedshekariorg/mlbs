import { DatePicker } from 'antd';
import styled from '@emotion/styled';

export const StyledDatePicker = styled(DatePicker)`
  height: 44px;
  width: 100%;
  border: ${({ theme }) => theme.borders.input};
  border-radius: ${({ theme }) => theme.radii.lg};
  position: unset !important;
  box-shadow: 0 0 0 !important;
  border-color: ${({ open, theme }) =>
    open ? theme.colors.blue[10] : theme.colors.gray[47]};
  & span {
    margin-left: 0;
    margin-right: 7px;
  }
  & .ant-picker-input {
    flex-direction: row-reverse;
    &::before {
      content: '';
      color: ${({ open, theme }) =>
        open ? theme.colors.blue[10] : theme.colors.gray[47]};
      position: absolute;
      font-size: ${({ theme }) => theme.fontSizes[12]};
      color: ${({ theme }) => theme.colors.gray[47]};
      background-image: url('/static/images/delete/${({ open }) =>
        open ? 'arrowheadup.svg' : 'arrowheaddown.svg'}');
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      top: 7px;
      right: 1px;
    }
  }
`;

export const StyledPopupContainer = styled.div`
  position: relative;
  & > div:first-of-type {
    visibility: hidden;
    height: 0;
  }

  .ant-picker-header {
    border: 0 !important;
  }
  .ant-picker-year-btn,
  .ant-picker-header-super-next-btn,
  .ant-picker-header-super-prev-btn {
    display: none !important;
  }
  .ant-picker-cell {
    padding: 0 !important;
    font-size: 12px !important;
  }
  & > div:nth-child(2) {
    top: -10px !important;
    left: 8px !important;
    .ant-picker-panel {
      border: 0 !important;
    }
    .ant-picker-dropdown {
      position: unset !important;
      .ant-picker-panel-container {
        background-color: transparent !important;
        box-shadow: 0 0 0 !important;
        .ant-picker-date-panel {
          width: 265px;
        }
      }
    }
  }
`;
