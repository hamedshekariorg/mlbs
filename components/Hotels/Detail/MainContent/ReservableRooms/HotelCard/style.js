import styled from '@emotion/styled';
import { StyledH3, StyledHorizontal } from 'components/Common/commonStyles';

export const StyledProviderWrapper = styled(StyledHorizontal)`
  width: 29px;
  height: 109px;
  border-radius: ${({ theme }) =>
    `${theme.radii.lg} 0px 0px ${theme.radii.lg}`};
  align-items: center;
  justify-content: center;
`;

export const StyledProviderText = styled(StyledH3)`
  transform: rotate(-90deg);
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 17px;
  text-align: center;
`;

export const StyledCard = styled(StyledHorizontal)`
  width: 788px;
  max-height: ${({ isSvgPanelExpaned }) =>
    isSvgPanelExpaned ? '226px' : '184px'};
  padding: 24px 0px 24px 0px;
  margin-bottom: 17px;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: ${({ theme }) => theme.borders.input};
`;
