import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  width: 327px;
  padding: 0px 24px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-top: -120px;
  align-items: center;
  text-align: center;
  z-index: ${({ theme }) => theme.zIndices[3]};
  position: relative;
`;
export const StyledImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: ${({ theme }) => theme.radii.full};
  position: absolute;
  transform: translate(0, -50%);
`;
