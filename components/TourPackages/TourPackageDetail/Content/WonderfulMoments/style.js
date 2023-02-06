import styled from '@emotion/styled';

export const StyledImgBlock = styled.div`
  width: 180px;
  height: 180px;
  filter: drop-shadow(${({ theme }) => theme.shadows.card});
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
