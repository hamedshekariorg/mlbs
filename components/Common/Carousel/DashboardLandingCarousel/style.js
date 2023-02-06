import styled from '@emotion/styled';
import { StyledHorizontal } from 'components/Common/commonStyles';

export const StyledCarouselOptions = styled(StyledHorizontal)`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[4]}px;
  #prev-btn,
  #next-btn {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue[15]};
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
    margin-left: ${({ theme }) => theme.space[2]}px;
  }
  #prev-btn {
    margin-right: ${({ theme }) => theme.space[2]}px;
  }
  #pagination {
    width: fit-content;
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin: 0 12px !important;
    border-radius: ${({ theme }) => theme.radii.full};
    text-align: center;
    opacity: 1;
    background: ${({ theme }) => theme.colors.green[0]};
    transition: all 0.3s;
    &-active {
      color: #fff;
      width: 22px;
      border-radius: ${({ theme }) => theme.radii.sm};
      padding: ${({ theme }) => `${theme.space[1]}px ${theme.space[2]}px`};
      background: ${({ theme }) => theme.colors.blue[15]};
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 260px !important;
    height: 150px !important;
    background: ${({ theme }) => theme.colors.orange[20]};
    border-radius: 10px;
    overflow: hidden;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
