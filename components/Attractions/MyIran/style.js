import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  height: 853px;
  width: 100%;
`;
export const StyledCarouselOptions = styled.div`
  z-index: ${({ theme }) => theme.zIndices[10]};
  position: absolute;
  right: 124px;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  #prev-btn,
  #next-btn {
    cursor: pointer;
    color: #fff;
    i {
      font-size: ${({ theme }) => theme.fontSizes[16]};
    }
  }
  #next-btn{
    margin-top:30px;
  }
  #prev-btn{
    margin-bottom:30px;
  }

  #pagination {
    position: relative;
    right: 0;
    top: 0;
    transform: translate3d(0px,0%,0); !important;
  }
  .swiper-pagination-bullet {
    width: 32px;
    height: 32px;
    display:flex !important;
    align-items:center;
    justify-content:center;
    margin: 20px 0 !important;
    opacity: 1;
    background: none;
    transition: all 0.3s;
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes[9]};
    &-active {
      background: ${({ theme }) => theme.colors.gray[31]};
    }
  }
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 130px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.gradient[8]};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
`;

export const StyledContent = styled.div`
  background: url(/static/images/myIran/Iran.png) no-repeat;
  padding: 115px 238px;
  background-position: 115px 73px;
`;
