import styled from '@emotion/styled';

export const StyledCarouselOptions = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[4]}px;
  #prev-btn,
  #next-btn {
    cursor: pointer;
    ${({ chevronIcon, theme }) =>
      !chevronIcon && ` background:${theme.colors.blue[27]}`};
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
    width: ${({ dynamic }) => (dynamic ? '29px' : '12px')};
    height: ${({ dynamic }) => (dynamic ? '29px' : '12px')};
    margin: 0 12px !important;
    border-radius: ${({ theme }) => theme.radii.full};
    text-align: center;
    opacity: 1;
    background: ${({ theme }) => theme.colors.green[0]};
    transition: all 0.3s;
    &-active {
      color: #fff;
      ${({ dynamic, theme }) =>
        !dynamic &&
        `border-radius: ${theme.radii.sm};
         width: 22px;
      `};
      padding: ${({ theme }) => `${theme.space[1]}px ${theme.space[2]}px`};
      background: ${({ theme }) => theme.colors.blue[15]};
    }
  }
`;
