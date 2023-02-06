import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const StyledCarouselWrapper = styled(StyledDiv)`
  width: calc(100% - 280px);
  height: 100%;
  position: absolute;
  left: 280px;
  top: ${({ theme }) => theme.space[5]}px;
  & .swiper-slide {
    height: 500px !important;
  }
  & .swiper-slide:nth-child(2n + 1) {
    width: 278px;
  }
`;

export const StyledSwiperOptions = styled(StyledDiv)`
  #next-btn,
  #prev-btn {
    cursor: pointer;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: ${({ theme }) => theme.radii.full};
    border: ${({ theme }) => theme.borders.footerRight};
    background-color: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #next-btn {
    top: 54px;
    left: -76px;
  }
  #prev-btn {
    top: 120px;
    left: -76px;
  }
`;

export const StyledTourCount = styled(StyledDiv)`
  position: absolute;
  left: 140px;
  top: 70%;
  color: #fff;
  height: 40px;
  border-bottom: ${({ theme }) => theme.borders.iconWrapper};
`;
