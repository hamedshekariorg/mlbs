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

export const StyledInfoContainer = styled.div`
  flex: 3;
  display: flex;
  margin-right: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledPricingContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledWrapper = styled.div`
  flex: ${({ flex }) => flex} !important;
  position: relative;
`;

export const StyledInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 24px;
  position: relative;
`;
