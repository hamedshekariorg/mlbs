import styled from '@emotion/styled';
import {
  space,
  border,
  color,
  typography,
  position,
  layout,
} from 'styled-system';

export const StyledIcon = styled.i`
  ${color}
  ${space}
  ${typography}
  ${position}
  ${layout}
  ${border}
  
  ${({ type }) =>
    type === 'inCell' &&
    `
    position: absolute;
    right: ${({ theme }) => theme.space[0]};
  `}
  ::before {
    ${color};
  }
  outline: none;
  vertical-align: middle;
  ${({ cursor }) => cursor && `cursor: ${cursor};`}

  span {
    vertical-align: middle;
  }

  ${({ theme, disabled }) =>
    disabled &&
    `
      color: ${theme.colors.gray[1]} !important;
      cursor: not-allowed;
      : before {
        color: ${theme.colors.gray[1]} !important;
      }
  `}
`;

StyledIcon.defaultProps = {
  fontSize: '1rem',
};
