import { StyledInput } from 'components/Common/Input/style';
import { Controller, useFormContext } from 'react-hook-form';
import { StyledText } from 'components/Common/commonStyles';
export const Input = ({ name, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => {
        return (
          <>
            <StyledInput
              onChange={(value) => onChange(value)}
              value={value}
              ref={ref}
              border="input"
              borderRadius="lg"
              {...other}
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
