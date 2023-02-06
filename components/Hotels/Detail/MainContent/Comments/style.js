import styled from '@emotion/styled';
import { StyledDiv, StyledH3, StyledH4 } from 'components/Common/commonStyles';

export const StyledParagraph = styled(StyledH4)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 27px;
  color: ${({ theme }) => theme.colors.gray[27]};
`;

export const StyledText = styled(StyledH3)`
  font-weight: ${({ theme, fontWeight }) => fontWeight || theme.fontWeights[5]};
  color: ${({ theme, color }) => color || theme.colors.gray[27]};
  line-height: 17px;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0.05em'};
`;

export const StyledCommentContainer = styled(StyledDiv)`
  width: 817px;
  display: flex;
  margin-top: 72px;
`;

export const StyledProfileImageContainer = styled(StyledDiv)`
  width: 49px;
  height: 49px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-image: ${({ src }) => `url(${src})`};
`;
