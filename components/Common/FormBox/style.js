import styled from '@emotion/styled';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ full }) => (full ? '100vh' : 'calc(150vh - 328px)')};
`;

export const StyledBox = styled.div`
  background-color: #fff;
  width: 506px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.box};
  position: relative;
  margin-left: 180px;
`;
