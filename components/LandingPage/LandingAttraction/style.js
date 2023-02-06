import styled from '@emotion/styled';
import {
  StyledDiv,
  StyledHorizontal,
  StyledVertical,
  StyledText,
} from 'components/Common/commonStyles';

export const StyledSwiperContainer = styled(StyledDiv)`
  position: relative;
  margin-top: 72px;
  & .swiper-pagination-bullets {
    position: absolute;
    left: 212px;
    bottom: 144px;
    width: fit-content;
  }
  & .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: ${({ theme }) => theme.fontSizes[4]};
    color: #fff;
    opacity: 1;
    background: transparent;
    width: 29px;
    height: 29px;
    padding: 5px;
    margin-right: 15px !important;
    margin-left: 0 !important;
  }
  & .swiper-pagination-bullet-active {
    color: ${({ theme }) => theme.colors.blue[36]};
    background: #fff;
  }
  & #next-button,
  #prev-button {
    border: ${({ theme }) => theme.borders.iconWrapper};
    color: #fff;
    position: absolute;
    z-index: ${({ theme }) => theme.zIndices[2]};
    bottom: 25px;
    padding: 13px;
    border-radius: ${({ theme }) => theme.radii.full};
    cursor: pointer;
  }
  & #next-button {
    right: 0;
  }
  & #prev-button {
    left: 0;
  }
`;

export const StyledTextAndImgs = styled(StyledHorizontal)`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices[5]};
  left: 140px;
  right: 140px;
  top: 180px;
`;

export const StyledTextTitle = styled(StyledText)`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes[26]};
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices[2]};
  width: 100%;
  margin-top: 53px;
`;

export const StyledTextBlock = styled(StyledVertical)`
  position: relative;
  justify-content: flex-start;
  z-index: ${({ theme }) => theme.zIndices[7]};
  margin-right: ${({ theme }) => theme.space[10]}px;
  height: 475px;
`;

export const StyledImgsBlock = styled(StyledDiv)`
  height: 457px;
  width: 500px;
  display: grid;
  grid-template-areas:
    'one one two'
    'three four two'
    'five five five';
`;

export const StyledParagraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  color: #fff;
  margin-top: 29px;
`;
