import styled from '@emotion/styled';

export const StyledOverlay = styled.div`
  padding: ${({ theme }) => theme.space[4]}px;
  position: absolute;
  top: 0;
  display: none;
  background: ${({ theme }) => theme.colors.gray[28]};
  height: 100%;
  width: 100%;
  transition: 0.5s all ease;
`;

export const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  cursor: pointer;
  &:hover {
    ${StyledOverlay} {
      display: block;
    }
  }
`;

export const StyledContent = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.space[5]}px;
  border: ${({ theme }) => theme.borders.footerRight};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
