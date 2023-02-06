import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';
import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: ${({ theme }) => theme.fontSizes[10]};
    font-weight: ${({ theme }) => theme.fontWeights[1]};
  }
`;
export const StyledSwiperOption = styled(StyledDiv)`
  img {
    height: 155px;
    width: 100%;
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;
