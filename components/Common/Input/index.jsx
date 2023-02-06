import React, { useEffect, useState } from 'react';
import {
  StyledInputGroup,
  StyledInput,
  StyledSelect,
  StyledOption,
  StyledTextArea,
} from './style';
import Button from 'components/Common/Button';
import { useTheme } from '@emotion/react';
import { StyledImg } from 'components/Common/commonStyles';

export const SelectInput = ({
  placeholder,
  options,
  value,
  onSelect,
  onChange,
  selectMinWidth,
  selectPlaceholder,
  textAlignLeft,
  inputStyle,
  selectStyle,
  borderColor,
  ...rest
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    setSelectedItem(value);
  }, [value]);

  return (
    <StyledInputGroup {...rest}>
      <StyledSelect
        style={selectStyle || {}}
        placeholder={selectPlaceholder || '888'}
        showSearch
        minWidth={selectMinWidth}
        onSelect={(value, item) => {
          setSelectedItem(value);
          onSelect?.(item);
        }}
        borderColor={borderColor}
        value={selectedItem}
      >
        {options?.map(({ icon, label, value }) => (
          <StyledOption key={value} value={value}>
            {icon && <StyledImg mr={2} width="15px" height="12px" src={icon} />}
            {label}
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledInput
        style={inputStyle || {}}
        onChange={(event) => onChange?.(event.target.value)}
        borderRadius="0 10px 10px 0"
        placeholder={placeholder}
      />
    </StyledInputGroup>
  );
};

export const ButtonInput = ({
  placeholder,
  options,
  defaultValue,
  disabled,
  loading,
  onClick,
  onChange,
  btnText,
  ...rest
}) => {
  return (
    <StyledInputGroup {...rest}>
      <StyledInput
        borderRadius="10px 0 0 10px !important"
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
      />
      <Button
        loading={loading}
        disabled={disabled}
        border="1px solid #B8B1A4"
        btnType="greenLink"
        borderRadius="0 10px 10px 0"
        onClick={() => onClick?.()}
      >
        {btnText}
      </Button>
    </StyledInputGroup>
  );
};

export const Input = ({ placeholder, onChange, ...rest }) => {
  return (
    <StyledInput
      {...rest}
      borderRadius="10px !important"
      placeholder={placeholder}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
};

export const TextArea = ({ placeholder, onChange, ...rest }) => {
  const theme = useTheme();
  return (
    <StyledTextArea
      {...rest}
      borderRadius={theme.radii.lg}
      placeholder={placeholder}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
};
