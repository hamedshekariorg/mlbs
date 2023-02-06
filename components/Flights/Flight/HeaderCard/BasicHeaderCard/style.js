import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 572px;
  height: 164px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: ${({ theme }) => theme.borders.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  position: relative;
`;

export const StyledSvgWrapper = styled.div`
  width: 288px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 34px 210px 34px 64px;
`;
