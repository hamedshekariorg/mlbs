import styled from '@emotion/styled';
import {
  StyledH3,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';

export const StyledReviewDescriptionContainer = styled(StyledVertical)`
  width: 817px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  align-items: flex-start;
  padding: 50px 49px 32px 49px;
`;

export const StyledReviewText = styled(StyledH3)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  color: ${({ theme }) => theme.colors.gray[15]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const StyledRateContainer = styled(StyledHorizontal)`
  align-items: center;
  justify-content: space-between;
  min-width: 190px;
  height: 18px;
  margin-bottom: 16px;
`;
