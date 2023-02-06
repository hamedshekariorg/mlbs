import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const StyledCarouselOptions = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[4]}px;

  #prev-btn,
  #next-btn {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.gray[39]};
    color: ${({ theme }) => theme.colors.blue[14]};
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radii.full};
    i {
      font-size: ${({ theme }) => theme.fontSizes[14]};
    }
  }
  #next-btn {
    margin-left: ${({ theme }) => theme.space[6]}px;
  }
  #prev-btn {
    margin-right: ${({ theme }) => theme.space[6]}px;
  }

  #pagination {
    width: fit-content;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    .swiper-pagination-bullet {
      width: 29px;
      height: 29px;
      margin: 0 10px;
      text-align: center;
      line-height: 29px;
      color: ${({ theme }) => theme.colors.blue[14]};
      opacity: 1;
      background-color: #fff;
    }
  }
  .swiper-pagination-bullet-active {
      color: #fff;
      background: ${({ theme }) => theme.colors.blue[14]};
    }
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  .swiper-wrapper {
    height: calc(100% - 60px) !important;
  }
  .swiper-slide {
    height: calc((100% - 16px) / 2) !important;
  }
`;
