import styled from '@emotion/styled';
import { StyledImg } from 'components/Common/commonStyles';

export const StyledContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding-bottom: 30px;
  text-align: center;
  margin-top: 72px;
  #prev_button,
  #next_button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.green[0]};
    color: ${({ theme }) => theme.colors.blue[10]};
    border-radius: ${({ theme }) => theme.radii.full};
    border: ${({ theme }) => theme.borders.arrow};
    z-index: ${({ theme }) => theme.zIndices[2]};
  }
  #next_button {
    right: ${({ theme }) => theme.space[0]};
  }
  #prev_button {
    left: ${({ theme }) => theme.space[0]};
  }
`;

export const StyledCircle = styled.div`
  position: absolute;
  width: 33.18px;
  height: 33.18px;
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all 1s;
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  background-color: ${({ bg }) => bg};
  z-index: ${({ theme }) => theme.zIndices[3]};
`;

export const StyledImage = styled(StyledImg)`
  ${({ position }) =>
    position.top === '45%'
      ? 'width:236.82px;height:236.82px'
      : 'width:0;height:0'};
  transition: all 1s;
  position: absolute;
  top: ${({ position }) => (position.top === '45%' ? '-99px' : position.top)};
  right: ${({ position }) =>
    position.top === '45%' ? '-111px' : position.right};
  opacity: ${({ position }) => (position.top === '45%' ? 1 : 0)};
  z-index: ${({ theme }) => theme.zIndices[3]};
`;
