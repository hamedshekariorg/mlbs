import styled from '@emotion/styled';
import { StyledHorizontal } from 'components/Common/commonStyles';
import { Slider } from 'antd';

export const StyledContainer = styled.div`
  margin-top: 32px;
  min-height: 296px;
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 100%;
  overflow: hidden;
  .ant-tabs-content-holder {
    min-height: 248px !important;
  }
  .ant-tabs-nav-wrap {
    background: #fff;
  }
  & .ant-tabs-tab {
    padding: 0 !important;
    margin: 0 !important;
    width: 139px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray[27]};
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
  & .ant-tabs-tab-active {
    & .ant-tabs-tab-btn {
      color: #fff !important;
    }
    background-color: ${({ theme }) => theme.colors.gray[22]};
  }
  & .ant-tabs-ink-bar {
    background-color: transparent !important;
  }
  & .ant-tabs-nav {
    margin-bottom: 0 !important;
  }
`;

export const StyledImage = styled.img`
  width: 13px;
  height: 13px;
  border-radius: ${({ theme }) => theme.radii.full};
  position: absolute;
  transform: translate(0, -50%);
  z-index: ${({ theme }) => theme.zIndices[10]};
  top: 20px;
  left: 8px;
`;

export const StyledImgBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledPlayerBlock = styled(StyledHorizontal)`
  width: 27px;
  height: 27px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue[10]};
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 1px;
    top: 1px;
  }
`;

export const StyledSlider = styled(Slider)`
  .ant-slider-handle {
    border: 0 !important;
    background-color: ${({ theme }) => theme.colors.blue[10]};
  }
  .ant-slider-rail {
    background-color: ${({ theme }) => theme.colors.gray[6]};
  }
  &:hover {
    .ant-slider-track {
      background-color: ${({ theme }) => theme.colors.orange[21]};
    }
  }
  .ant-slider-track {
    background-color: ${({ theme }) => theme.colors.orange[21]};
  }
`;
