import { DatePicker } from 'antd';
import styled from '@emotion/styled';

export const StyledDatePicker = styled(DatePicker)`
  height: 44px;
  width: 100%;
  background: #fff;
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
  & div:nth-child(2) {
    position: unset !important;
    & .ant-picker-dropdown {
      position: unset !important;
      .ant-picker-panel-container {
        background-color: transparent !important;
        box-shadow: 0 0 0 !important;
        margin-left: -30px;
        margin-right: -30px;
        .ant-picker-date-panel {
          width: 265px;
        }
      }
    }
  }
`;
