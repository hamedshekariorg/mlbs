import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 278px;
  height: 230px;
  background-image: ${({ theme }) => theme.colors.gradient[16]},
    url(${({ bgImg }) => bgImg});
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  position: relative;
`;

export const StyledText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 17px;
  color: #fff;
`;
