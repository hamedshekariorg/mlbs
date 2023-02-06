import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledDiv)`
  width: 817px;
  height: 184px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledProviderContainer = styled.div`
  width: 29px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const StyledProviderWrapper = styled(StyledDiv)`
  height: 109px;
  width: 100%;
  color: #ffffff;
  border-radius: ${({ theme }) => theme.radii.lg} 0px 0px
    ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledProviderTitle = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 17px;
  transform: rotate(-90deg);
  text-align: center;
  color: #ffffff;
`;

export const StyledCardContainer = styled(StyledDiv)`
  width: 100%;
  height: 100%;
  color: #ffffff;
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 469px;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 22px 68px 20px 55px;
`;

export const StyledPricingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
