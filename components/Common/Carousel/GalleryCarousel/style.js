import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';
import { Swiper } from 'swiper/react';

export const StyledSwiperOption = styled.div`
  height: 496px;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;

export const StyledSwiperThumbs = styled(Swiper)`
  margin-top: ${({ theme }) => theme.space[5]}px;
`;
export const StyledSwiperThumbsOption = styled.div`
  height: 109px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;
export const StyledNavigationDiv = styled(StyledDiv)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 20%;
  padding: ${({ theme }) => theme.space[3]}px;
  display: flex;
  align-items: center;
  justify-content: ${({ right }) => (right ? 'end' : 'start')};
  font-size: ${({ theme }) => theme.fontSizes[10]};
  color: #fff;
  z-index: ${({ theme }) => theme.zIndices[2]};
  cursor: pointer;
  span {
    z-index: ${({ theme }) => theme.zIndices[2]};
  }
  &:before {
    z-index: ${({ theme }) => theme.zIndices[1]};
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: ${({ theme }) => theme.radii.lg};
    background: ${({ theme }) => theme.colors.gradient[7]};
    transform: ${({ left }) => (left ? 'rotate(180deg);' : '')};
  }
`;
