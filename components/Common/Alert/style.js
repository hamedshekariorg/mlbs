import styled from '@emotion/styled';
import { Alert } from 'antd';
import { space } from 'styled-system';

export const StyledAlert = styled(Alert)`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  background: ${({ theme }) => theme.colors.orange[18]};
  border-radius: ${({ theme }) => theme.radii.lg};
  color: ${({ theme }) => theme.colors.blue[15]};
  height: 40px;
  ${space}
`;
