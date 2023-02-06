import styled from '@emotion/styled';
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37px;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ randomCount }) =>
      `url(/static/images/aboutUs/background/${randomCount}.png)`}
    no-repeat;
  background-size: cover;
`;
