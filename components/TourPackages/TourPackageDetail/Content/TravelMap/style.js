import styled from '@emotion/styled';
import { StyledText } from 'components/Common/commonStyles';

export const StyledTxt = styled(StyledText)`
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 17px;
  color: ${({ theme }) => theme.colors.gray[15]};
`;

export const StyledImgBlock = styled.div`
  width: 817px;
  height: 458px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    image-rendering: pixelated;
  }
`;
