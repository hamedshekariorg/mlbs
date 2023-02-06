import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  margin: 0px 5px;
  max-height: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  transition: 0.5s all;
  background: ${({ theme }) => theme.colors.gradient[3]};
  color: #ffffff;
  img {
    transition: 0.5s all;
    position: absolute;
    left: 60px;
    bottom: 18px;
  }
  div {
    transition: 0.5s all;
    position: absolute;
    left: 118px;
    bottom: 16px;
  }
`;

export const StyledImageCard = styled.div`
  width: 53%;
  position: relative;
  &:hover {
    ${Overlay} {
      height: 100%;
      flex-direction: column;
      img {
        width: 90px;
        height: 68px;
        left: 94px;
        bottom: 137px;
      }
      div {
        left: 85px;
        bottom: 63px;
      }
    }
  }
`;

export const StyledContentCard = styled.div`
  width: 47%;
  padding: ${({ theme }) => theme.space[5]}px;
  text-align: left;
`;
