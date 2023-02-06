import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 508px;
  height: 417px;
  padding: 24px 25px;
  margin-top: 37px;
`;
