import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledCard = styled.div`
  margin-top: -100px;
  background: ${({ theme }) => theme.colors.blue[40]};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: ${({ theme }) => `${theme.space[5]}px ${theme.space[8]}px`};
  border-radius: ${({ theme }) => theme.radii.lg};
  color: #ffffff !important;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  position: relative;
  z-index: ${({ theme }) => theme.zIndices[2]};
`;
export const StyledHeaderTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue[15]};
  font-size: ${({ theme }) => theme.fontSizes[50]};
  font-weight: ${({ theme }) => theme.fontWeights[8]};
  padding-left: ${({ theme }) => theme.space[6]}px;
  margin-top: 40px;
  line-height: 72px;
  &:before {
    content: '';
    position: absolute;
    width: 4px;
    height: 119px;
    left: 0;
    background: ${({ theme }) => theme.colors.blue[15]};
    opacity: 0.4;
  }
`;
export const StyledHeaderText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[20]};
  line-height: 36px;
  letter-spacing: 0.065em;
  color: ${({ theme }) => theme.colors.blue[15]};
  opacity: 0.8;
  margin-top: 35px;
`;
