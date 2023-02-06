import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledDivider = styled.hr`
  position: absolute;
  height: 14rem;
  border: ${({ theme }) => theme.borders.divider};
`;
