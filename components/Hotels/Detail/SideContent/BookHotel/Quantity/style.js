import styled from '@emotion/styled';
import {
  StyledDiv,
  StyledH3,
  StyledVertical,
} from 'components/Common/commonStyles';

export const StyledGuestChildContainer = styled(StyledVertical)`
  width: 211px;
  transition: max-height 0.15s ease-out;
  max-height: ${({ isGuestPanelOpen }) => (isGuestPanelOpen ? '148px' : '0px')};
  opacity: ${({ isGuestPanelOpen }) => !isGuestPanelOpen && '0'};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: ${({ theme }) => theme.borders.darkGray};
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: ${({ isGuestPanelOpen }) => isGuestPanelOpen && '20px 12px 12px'};
  position: relative;
`;

export const StyledTriangleContainer = styled(StyledDiv)`
  position: absolute;
  top: -1px;
  z-index: ${({ theme }) => theme.zIndices[1]};
  right: 14px;
  .triangle {
    position: relative;
    width: 20px;
  }
  .triangle > div {
    width: 20px;
    height: 1px;
    background: #fff;
  }

  .triangle > div:before {
    content: ' ';
    display: block;
    width: 17px;
    height: 1px;
    background: ${({ theme }) => theme.colors.orange[13]};
    -webkit-transform: rotate(56deg);
    -moz-transform: rotate(56deg);
    -ms-transform: rotate(56deg);
    transform: rotate(56deg);
    position: absolute;
    top: -7px;
    right: -3px;
  }
  .triangle > div:after {
    content: ' ';
    display: block;
    width: 17px;
    height: 1px;
    background: ${({ theme }) => theme.colors.orange[13]};
    -webkit-transform: rotate(-56deg);
    -moz-transform: rotate(-56deg);
    -ms-transform: rotate(-56deg);
    transform: rotate(-56deg);
    position: absolute;
    top: -7px;
    left: -4px;
  }
`;

export const StyledIconsContainer = styled(StyledDiv)`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.green[0]};
  border-radius: ${({ theme }) => theme.radii.full};
  cursor: pointer;
`;

export const StyledNumber = styled(StyledH3)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSizes[3]};
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[40]};
  margin-bottom: 16px;
`;
