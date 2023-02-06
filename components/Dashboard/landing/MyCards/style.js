import styled from '@emotion/styled';
import { StyledSpan } from 'components/Common/commonStyles';

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 508px;
  height: 313px;
  padding: 23px 27px;
`;

export const StyledText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[8]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.blue[46]};
  line-height: 20px;
  letter-spacing: 0.075em;
  margin-left: 10px;
`;

export const StyledCard = styled.div`
  background-image: ${({ theme, gradient }) => theme.colors.gradient[gradient]};
  & > div {
    position: relative;
    padding: 13px 24px 20px;
    max-width: 260px;
    max-height: 150px;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radii.lg};
    background: url('/static/images/dashboard/dashboardLandingCard.svg')
      no-repeat 100% 100%;
  }
`;

export const StyledSquare = styled.div`
  position: absolute;
  top: 63px;
  right: 40px;
  width: 30px;
  height: 25px;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.gray[58]};
`;

export const StyledCurrency = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[10]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  border-right: ${({ theme }) => theme.borders.iconWrapper};
  line-height: 32px;
  letter-spacing: 2.37px;
  color: #fff;
  padding-right: 10px;
`;

export const StyledPoint = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.gray[59]};
  line-height: 32px;
  white-space: nowrap;
  margin-left: 7px;
`;

export const StyledTxt = styled(StyledSpan)`
  color: #fff;
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSizes[2]};
  line-height: ${({ lineHeight }) => lineHeight || '14px'};
`;
