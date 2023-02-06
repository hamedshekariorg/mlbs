import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const StyledCarouselWrapper = styled(StyledDiv)`
  position: relative;
  height: 250px;
  width: 1220px;
  padding-top: 20px;
  & .swiper {
    padding-left: 21px;
    padding-right: 40px;
  }
`;

export const StyledBox = styled(StyledDiv)`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 278px;
  height: 230px;
  background-image: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 59.35%,
      rgba(0, 28, 32, 0) 59.35%,
      #001c20 100%
    ),
    ${({ type }) =>
      type === 'restaurant'
        ? "url('/static/images/landingPage/home.svg')"
        : "url('/static/images/landingPage/home.svg')"};
  padding: ${({ theme }) => theme.space[4]}px;
  background-repeat: no-repeat;
  & img {
    background-image: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0) 59.35%,
      rgba(0, 28, 32, 0) 59.35%,
      #001c20 100%
    );
  }
`;
