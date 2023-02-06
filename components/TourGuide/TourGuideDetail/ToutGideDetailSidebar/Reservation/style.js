import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.161);
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 100%;
  min-height: 276px;
  padding: 24px 30px 24px 29px;
  margin-top: 38px;
`;
