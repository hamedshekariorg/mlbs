import styled from '@emotion/styled';
import Button from 'components/Common/Button';
import { StyledDiv, StyledH3 } from 'components/Common/commonStyles';

export const StyledBannerContainer = styled(StyledDiv)`
  margin-top: 90px;
  height: 75px;
  margin-bottom: 27px;
  background-color: ${({ theme }) => theme.colors.orange[13]};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const StyledBannerItemsWrapper = styled(StyledDiv)`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 140px;
`;

export const StyledBannerText = styled(StyledH3)`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  line-height: 34px;
  color: #fff;
  margin-top: 12px;
`;

export const StyledBannerDivider = styled(StyledDiv)`
  width: 55px;
  height: 0px;
  border: ${({ theme }) => theme.borders.footerRight};
  transform: rotate(90deg);
  margin-left: -8px;
`;

export const StyledIconWrapper = styled(StyledDiv)`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red[3]};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledContentContainer = styled(StyledDiv)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  width: 147px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows.btnPrimary};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: ${({ theme }) => theme.borders.blue};
  box-shadow: ${({ theme }) => theme.shadows.btnPrimary};
  margin: 40px 0px 52px 0px;
  &:hover {
    border: ${({ theme }) => theme.borders.blue};
  }
  align-self: center;
`;

export const StyledButtonText = styled(StyledH3)`
  font-size: ${({ theme }) => theme.fontSizes[7]};
  margin-top: 8px;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.blue[10]};
`;
