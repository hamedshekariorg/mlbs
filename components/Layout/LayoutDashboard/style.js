import styled from '@emotion/styled';
import { Button, Layout } from 'antd';
const { Sider } = Layout;

export const StyledLeftSider = styled(Sider)`
  background: ${({ theme }) => theme.colors.blue[14]};
  box-shadow: ${({ theme }) => theme.shadows.card};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`;
export const StyledRightSider = styled(Sider)`
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows.card};
  z-index: ${({ theme }) => theme.zIndices[1]};
`;
export const StyledTrigger = styled(Button)`
  width: 32px;
  height: 32px;
  ${({ collapsed }) =>
    !collapsed &&
    `
  position: absolute;
  right: -16px;
  top:0;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  
  `}
  background: ${({ theme }) => theme.colors.blue[43]};
  border: ${({ theme }) => theme.borders.trigger};
  box-shadow: ${({ theme }) => theme.shadows[4]};
  border-radius: ${({ theme }) => theme.radii.lg};
  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.blue[43]};
  }
  i {
    color: ${({ theme }) => theme.colors.gray[31]};
  }
`;
