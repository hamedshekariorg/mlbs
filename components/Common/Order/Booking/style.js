import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 278px;
  height: 222px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 30px;
`;
