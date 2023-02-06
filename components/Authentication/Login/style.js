import styled from '@emotion/styled';

export const StyledAuthenticationContainer = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: 100vw;
  height: 100vh;
}
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
`;
