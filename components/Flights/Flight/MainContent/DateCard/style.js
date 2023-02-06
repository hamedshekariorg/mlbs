import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 131px;
  height: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  margin: 0px 8px 0px 8px;
  cursor: pointer;
`;

export const StyledDateContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[5]};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.gray[12]};
  border-radius: ${({ theme }) => theme.radii.lg}
    ${({ theme }) => theme.radii.lg} 0px 0px;
  user-select: none;
`;

export const StyledPriceContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.blue[10]};
  border-radius: 0px 0px ${({ theme }) => theme.radii.lg}
    ${({ theme }) => theme.radii.lg};
  user-select: none;
`;
