import styled from '@emotion/styled';
import { Menu } from 'antd';
export const StyledMenu = styled(Menu)`
  background: transparent;
  border-right: none;
  .ant-menu-item-active,
  .ant-menu-item-selected {
    background-color: ${({ theme }) => theme.colors.blue[42]}!important;
    color: #fff;
  }
`;
export const StyledMenuItem = styled(Menu.Item)`
  margin: 0 !important;
  i {
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes[14]};
  }
  a {
    color: ${({ theme }) => theme.colors.gray[49]} !important;

    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), margin 0.3s,
      color 0.3s;
    ${({ collapsed }) =>
      collapsed
        ? `
          opacity:0;
          margin: 0;
        `
        : `
          opacity:1;
          margin-left: 20px;
        `}
  }
  ${({ active, theme }) =>
    active &&
    `
        background-color:  ${theme.colors.blue[42]} !important;
        a{
        color: #fff !important;
        }
   `}
`;
