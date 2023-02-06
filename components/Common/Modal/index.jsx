import React from 'react';
import { StyledModal } from './style';

const Modal = ({ children, ...settings }) => {
  return <StyledModal {...settings}>{children}</StyledModal>;
};

export default Modal;
