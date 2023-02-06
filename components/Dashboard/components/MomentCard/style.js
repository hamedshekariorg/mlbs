import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledScene = styled(StyledVertical)`
  perspective: 600px;
`;
export const StyledCard = styled.div`
  width: 100%;
  height: 288px;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  ${({ rotate }) => rotate && ` transform: rotateY(180deg)`};
`;
export const StyledCardFace = styled.div`
  padding: 10px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: auto;
  ${({ isFaceBack }) => isFaceBack && 'transform: rotateY(180deg)'};
`;
