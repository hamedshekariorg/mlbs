import styled from '@emotion/styled';
import { StyledDiv, StyledImg } from 'components/Common/commonStyles';
import { Button } from 'antd';
import { border, color } from 'styled-system';
import { StyledHorizontal } from 'components/Common/commonStyles';

export const StyledTourDetailContainer = styled(StyledDiv)`
  width: 278px;
  height: 447px;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.card};
  position: relative;
  background-color: #fff;
  margin-bottom: 58px;
`;

export const StyledIconsWrapper = styled.div`
  margin-top: ${({ theme }) => theme.space[3]}px;
  & span[role='img'] {
    //this is for star icons
    color: ${({ theme }) => theme.colors.orange[7]};
    fill: ${({ theme }) => theme.colors.orange[7]};
  }
  & span:nth-child(6) {
    color: ${({ theme }) => theme.colors.orange[13]};
    margin-left: ${({ theme }) => theme.space[1]}px;
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
  & span:nth-child(7) {
    color: ${({ theme }) => theme.colors.gray[14]};
    margin-left: ${({ theme }) => theme.space[1]}px;
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue[10]};
  box-shadow: ${({ theme }) => theme.shadows.btnPrimary};
  color: #fff;
  border-radius: ${({ theme }) => theme.radii.lg};
  margin: auto;
  font-size: ${({ theme }) => theme.fontSizes[0]};
`;

export const StyledBottomIcons = styled(StyledHorizontal)`
  position: absolute;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  bottom: ${({ theme }) => theme.space[1]}px;
`;

export const StyledImgText = styled(StyledHorizontal)`
  margin-left: ${({ theme }) => theme.space[3]}px!important;
  align-items: center;
  & img {
    width: ${({ theme }) => theme.space[3]}px;
    height: 10px;
    display: inline-block;
  }
  & span {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 1px 1px 6px;
  }
`;

export const StyledTopLeftIcon = styled.div`
  ${border}
  position: absolute;
  height: 72px;
  border-width: 27px;
  border-style: solid;
  left: ${({ theme }) => theme.space[4]}px;
  top: -${({ theme }) => theme.space[1]}px;
  & div {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: -82%;
    transform: translate(-50%);
  }
`;

export const StyledTopRightDivIcons = styled(StyledHorizontal)`
  position: absolute;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  right: ${({ theme }) => theme.space[3]}px;
  top: ${({ theme }) => theme.space[3]}px;
`;

export const StyledDiscription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.gray[27]};
  margin-top: 16px;
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;

export const StyledIconBlock = styled.div`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: initial;
  background-position: center;
  background-color: #fff;
  padding: ${({ theme }) => theme.space[4]}px;
  border-radius: ${({ theme }) => theme.radii.full};
  margin: 2px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    background-image: url(${({ hoverSrc }) => hoverSrc && hoverSrc});
  }
`;

export const StyledCardIcons = styled(StyledHorizontal)`
  position: absolute;
  bottom: -47px;
  left: 50%;
  transform: translate(-50%);
  z-index: -${({ theme }) => theme.zIndices[1]};
  div {
    position: relative;
    margin-right: -18px;
  }
  span {
    position: absolute;
    top: 35%;
    color: white;
    font-size: 11px;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
  }
`;
