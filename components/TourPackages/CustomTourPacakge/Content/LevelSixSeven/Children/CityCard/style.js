import styled from '@emotion/styled';
import {
  StyledDiv,
  StyledH4,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  width: 180px;
  height: 221px;
  margin-bottom: 16px;
  position: relative;
  background: #fff;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[4]};
  }
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledImage = styled(StyledDiv)`
  width: 100%;
  height: 156px;
  border-radius: ${({ theme }) => theme.radii.lg}
    ${({ theme }) => theme.radii.lg} 0px 0px;
  background-image: ${({ theme, selected, src }) =>
    selected ? `${theme.colors.gradient[11]},url(${src})` : `url(${src})`};
`;

export const StyledCircle = styled(StyledHorizontal)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray[48]};
  backdrop-filter: blur(3px);
  border-radius: 28px;
  z-index: ${({ theme }) => theme.zIndices[4]};
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px 8px 0px 0px;
`;
export const StyledSquare = styled(StyledHorizontal)`
  width: 18px;
  height: 18px;
  border: ${({ theme }) => theme.borders.square};
  border-radius: ${({ theme }) => theme.radii.xs};
  background: ${({ theme, selected }) => selected && theme.colors.blue[10]};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndices[5]};
  align-items: center;
  justify-content: center;
`;

export const StyledDesc = styled(StyledH4)`
  position: absolute;
  text-decoration: underline;
  top: 32%;
  left: 28%;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;
