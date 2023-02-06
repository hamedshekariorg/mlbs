import styled from '@emotion/styled';
import { Layout } from 'antd';
import { BellOutlined } from '@ant-design/icons';

export const StyledHeader = styled(Layout.Header)`
  padding: 26px 65px;
  background: #fff;
  height: 88px;
  box-shadow: ${({ theme }) => theme.shadows.header};
`;
export const StyledBellOutlined = styled(BellOutlined)`
  color: ${({ theme }) => theme.colors.gray[15]};
  font-size: ${({ theme }) => theme.fontSizes[9]};
`;
