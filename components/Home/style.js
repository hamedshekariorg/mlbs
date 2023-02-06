import styled from '@emotion/styled';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  border,
  position,
  shadow,
} from 'styled-system';

export const StyledText = styled.div`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
  color: ${({ theme }) => theme.colors.blue[19]};
`;
