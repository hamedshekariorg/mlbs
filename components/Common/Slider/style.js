import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const SliderContainer = styled(StyledDiv)`
  width: 100%;
  .ant-slider-rail {
    background-color: ${({ theme }) => theme.colors.gray[22]} !important;
  }
  .ant-slider-handle {
    border: ${({ theme }) => theme.borders.blue} !important;
    margin-top: -9px;
    padding: 10px;
    &::before {
      content: '=';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -44%);
      color: ${({ theme }) => theme.colors.blue[10]};
      font-size: ${({ theme }) => theme.fontSizes[10]};
    }
  }
  .ant-slider-track {
    background-color: ${({ theme }) => theme.colors.blue[10]} !important;
  }
`;
