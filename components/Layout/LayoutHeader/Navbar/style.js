import styled from '@emotion/styled';
export const StyledNavLinkContainer = styled.div`
  transition: border-bottom 0.3s ease-in-out;
  border-bottom: ${({ theme, active }) =>
    active ? theme.borders.title : theme.borders.inactive};
  &:hover {
    border-bottom: ${({ theme }) => theme.borders.title};
  }
  margin: 0 ${({ theme }) => theme.space[3]}px;
  cursor: pointer;
  a {
    color: inherit;
  }
`;
