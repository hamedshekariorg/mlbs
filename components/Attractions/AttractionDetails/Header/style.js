import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => `${theme.space[5]}px  ${theme.space[10]}px`};
  color: #ffffff;
  position: absolute;
  top:  ${({theme}) => theme.space[0]};
  left: ${({theme}) => theme.space[0]};
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.gradient[5]};
`;
