import styled from '@emotion/styled';
import { Tag } from 'antd';

export const StyledTag = styled(Tag)`
  width: 59px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.space[4]};
  background: ${({ theme }) => theme.colors.orange[13]};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: #fff;
`;
