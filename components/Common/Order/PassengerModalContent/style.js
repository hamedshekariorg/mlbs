import styled from '@emotion/styled';
import { Input } from 'antd';

export const StyledSearchInput = styled(Input)`
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 5px 10px;
  margin-bottom: 32px;
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray[15]};
  margin-top: 3px;
`;

export const StyledTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[7]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.blue[10]}; ;
`;
