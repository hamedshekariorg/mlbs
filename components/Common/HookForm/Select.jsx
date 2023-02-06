import { StyledSelect, StyledText } from 'components/Common/commonStyles';
import { Controller, useFormContext } from 'react-hook-form';

export const Select = ({ name, keyboard, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, ref, onBlur },
        fieldState: { error },
      }) => {
        return (
          <>
            <StyledSelect
              value={value}
              optionFilterProp="children"
              onChange={(value) => onChange(value)}
              ref={ref}
              onBlur={onBlur}
              {...other}
              borderColor="gray.47"
              borderRadius="10px !important"
            />
            <StyledText fontSize={2} color="red.1">
              {error?.message}
            </StyledText>
          </>
        );
      }}
    />
  );
};
