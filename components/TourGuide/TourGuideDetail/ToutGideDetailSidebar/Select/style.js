import { StyledDiv } from 'components/Common/commonStyles';
import styled from '@emotion/styled';

export const StyledContainer = styled(StyledDiv)`
  .ant-select {
    &:hover {
      &::after {
        background: url(/static/images/tourGuide/g.svg) no-repeat 12px 2px;
        background-size: 16px;
      }
    }
    &::after {
      content: '';
      background: url(/static/images/tourGuide/g-gray.svg) no-repeat 12px 2px;
      background-size: 16px;
      width: 35px;
      height: 25px;
      position: absolute;
      left: 0;
      top: 12px;
    }
  }
  .ant-select-selector {
    padding: 2px 11px 0px 40px !important;
    border-radius: ${({ theme }) => theme.radii.lg} !important;
    border-color: ${({ theme }) => theme.colors.gray[47]} !important;
    height: 45px !important;
    color: ${({ theme }) => theme.colors.gray[47]};
    &:hover {
      border-color: ${({ theme }) => theme.colors.blue[10]} !important;
      box-shadow: 0 0 0 !important;
    }
  }
  .ant-select-single.ant-select-open .ant-select-selection-item {
    color: ${({ theme }) => theme.colors.gray[15]};
  }
  .ant-select-dropdown {
    border: ${({ theme }) => theme.borders.blue};
    border-radius: ${({ theme }) => theme.radii.lg} !important;
    box-shadow: 0 0 0 !important;
  }
`;
