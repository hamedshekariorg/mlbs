import React from 'react';
import { StyledRadioButton, StyledRadioGroup } from './style';

export const RadioButton = ({ options, onChange, defaultValue, width }) => {
  return (
    <StyledRadioGroup width={width} defaultValue={defaultValue} size="large ">
      {options?.map((item) => (
        <StyledRadioButton
          onChange={() => onChange?.(item)}
          key={item.value}
          value={item.value}
        >
          {item.label}
        </StyledRadioButton>
      ))}
    </StyledRadioGroup>
  );
};
