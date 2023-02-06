import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray[1]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 32px 49px;
  margin: 5px;
`;
