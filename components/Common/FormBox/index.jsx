import React from 'react';
import { StyledSection, StyledBox } from './style';

const FormBox = ({ children, fullHeight = true }) => {
  return (
    <StyledSection full={false}>
      <StyledBox>{children}</StyledBox>
    </StyledSection>
  );
};

export default FormBox;
