import styled from '@emotion/styled';

export const StyledAuthenticationContainer = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: calc(100vw - 10px);
  height: 100vh;
  display: flex;
}
`;
