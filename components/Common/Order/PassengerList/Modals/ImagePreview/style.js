import styled from '@emotion/styled';
export const StyledModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  width: 421px;
  height: 565px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.borders.input};
  box-sizing: border-box;
`;
