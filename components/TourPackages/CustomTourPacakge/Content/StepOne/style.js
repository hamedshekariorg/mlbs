import styled from '@emotion/styled';
import { Radio } from 'antd';
import { StyledH4, StyledVertical } from 'components/Common/commonStyles';

export const StyledTypeBox = styled(StyledVertical)`
  width: 376px;
  height: 260px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 0px 32px;
  border: ${({ theme, active }) => active && theme.borders.blue};
`;

export const StyledParagraph = styled(StyledH4)`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  color: ${({ theme }) => theme.colors.gray[27]};
`;
