import styled from '@emotion/styled';
export const StyledImg = styled.img`
  width: 82px;
  height: 82px;
  ${({ active }) => active && ' transform: scale(1.5)'}
`;
