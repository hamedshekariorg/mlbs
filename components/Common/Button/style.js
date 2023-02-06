import styled from '@emotion/styled';
import { Button } from 'antd';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';

const setColors = (theme, btnType, state, disabled) => {
  const { blue, gray, red, green } = theme.colors;

  const btnTypeList = {
    green: {
      default: {
        bgColor: blue[10],
        borderColor: blue[10],
        color: '#fff',
      },
      hover: {
        bgColor: blue[10],
        borderColor: blue[10],
        color: '#fff',
      },
      focus: {
        bgColor: blue[0],
        borderColor: blue[10],
        color: blue[10],
      },
    },
    primary: {
      default: {
        bgColor: blue[35],
        borderColor: blue[10],
        color: '#fff',
      },
      hover: {
        bgColor: blue[37],
        borderColor: blue[37],
        color: '#fff',
      },
      focus: {
        bgColor: blue[38],
        borderColor: blue[10],
        color: blue[0],
      },
    },
    greenLink: {
      default: {
        bgColor: 'transparent',
        borderColor: '#B8B1A4',
        color: blue[10],
      },
      hover: {
        bgColor: 'transparent',
        borderColor: '#B8B1A4',
        color: blue[10],
      },
      focus: {
        bgColor: 'transparent',
        borderColor: '#B8B1A4',
        color: blue[10],
      },
    },
    whiteLink: {
      default: {
        bgColor: 'transparent',
        borderColor: '#FFFFFF',
        color: '#FFFFFF',
      },
      hover: {
        bgColor: 'transparent',
        borderColor: '#FFFFFF',
        color: '#FFFFFF',
      },
      focus: {
        bgColor: 'transparent',
        borderColor: '##FFFFFF',
        color: '#FFFFFF',
      },
    },
    white: {
      default: {
        bgColor: '#FFFFFF',
        color: blue[10],
      },
      hover: {
        bgColor: 'transparent',
        color: blue[10],
      },
      focus: {
        bgColor: 'transparent',
        color: blue[10],
      },
    },
    secondary: {
      default: {
        bgColor: '#fff',
        borderColor: blue[10],
        color: blue[10],
      },
      hover: {
        bgColor: green[0],
        borderColor: blue[10],
        color: blue[10],
      },
      focus: {
        bgColor: green[3],
        borderColor: blue[10],
        color: blue[10],
      },
    },
    arrowLight: {
      default: {
        bgColor: green[0],
        color: blue[10],
        borderWidth: 7,
      },
      hover: {
        bgColor: green[0],
        color: blue[10],
        borderWidth: 7,
      },
      focus: {
        bgColor: green[0],
        color: blue[10],
        borderWidth: 7,
      },
    },
    text: {
      default: {
        bgColor: 'transparent',
        color: blue[10],
        border: 'none',
      },
      hover: {
        bgColor: 'transparent',
        color: blue[10],
      },
      focus: {
        bgColor: 'transparent',
        color: blue[10],
      },
    },
    red: {
      default: {
        bgColor: red[3],
        borderColor: red[3],
        color: '#fff',
      },
      hover: {
        bgColor: red[3],
        borderColor: red[3],
        color: '#fff',
      },
      focus: {
        bgColor: red[3],
        borderColor: red[3],
        color: '#fff',
      },
    },
    blue: {
      default: {
        bgColor: green[1],
        borderColor: 'transparent',
        color: blue[10],
      },
      hover: {
        bgColor: green[1],
        borderColor: 'transparent',
        color: blue[10],
      },
      focus: {
        bgColor: green[1],
        borderColor: 'transparent',
        color: blue[10],
      },
    },
    gray: {
      default: {
        bgColor: gray[1],
        borderColor: 'transparent',
        color: gray[56],
      },
      hover: {
        bgColor: gray[1],
        borderColor: 'transparent',
        color: gray[56],
      },
      focus: {
        bgColor: gray[1],
        borderColor: 'transparent',
        color: gray[56],
      },
    },
  };

  const disabledColors = {
    bgColor: ['redText', 'blueText'].includes(btnType)
      ? 'transparent'
      : gray[1],
    borderColor: ['redText', 'blueText'].includes(btnType)
      ? 'transparent'
      : gray[4],
    color: gray[4],
  };

  return disabled
    ? disabledColors
    : btnTypeList?.[btnType]?.[state] || btnTypeList.blue[state || 'default'];
};

export const StyledButton = styled(Button)`
  height: ${({ height }) => height ?? '44px'};
  ${({ shape, theme }) => !shape && `border-radius:${theme.radii.lg}`};
  display: inline-flex;
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: center;
  box-shadow: ${({ theme, btnType }) =>
    btnType === 'text' ? 'none' : theme.shadows.btnPrimary};
  ${({ btnType }) => btnType === 'text' && 'border:none'};
  border-width: ${({ btnType, theme, disabled }) =>
    setColors(theme, btnType, 'default', disabled).borderWidth ?? '1px'};
  border-color: ${({ theme, btnType, disabled }) =>
    setColors(theme, btnType, 'default', disabled).borderColor};
  color: ${({ theme, btnType, disabled }) =>
    setColors(theme, btnType, 'default', disabled).color};
  background: ${({ btnType, theme, disabled }) =>
    setColors(theme, btnType, 'default', disabled).bgColor};
  line-height: 16px;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  &:hover {
    border-color: ${({ btnType, theme, disabled }) =>
      setColors(theme, btnType, 'hover', disabled).borderColor};
    color: ${({ btnType, theme, disabled }) =>
      setColors(theme, btnType, 'hover', disabled).color};
    background-color: ${({ btnType, theme, disabled }) =>
      setColors(theme, btnType, 'hover', disabled).bgColor};
  }
  &:focus {
    border-color: ${({ btnType, theme, disabled }) =>
      setColors(theme, btnType, 'focus', disabled).borderColor};
    color: ${({ btnType, theme, disabled }) =>
      setColors(theme, btnType, 'focus', disabled).color};
    background-color: ${({ btnType, theme, disabled }) =>
      setColors(theme, btnType, 'focus', disabled).bgColor};
  }
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
`;
