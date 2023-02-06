import moment from 'moment';
import { Controller, useFormContext } from 'react-hook-form';
import { StyledDateInput, StyledText } from 'components/Common/commonStyles';

export const DateInput = ({ name, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <>
          <StyledDateInput
            onChange={(value) => onChange(value)}
            defaultValue={moment(value, 'YYYY/MM/DD')}
            ref={ref}
            format="YYYY/MM/DD"
            width="100%"
            height="44px"
            background=" #fff"
            border="input"
            borderRadius="lg"
            {...other}
          />
          <StyledText fontSize={2} color="red.1">
            {error?.message}
          </StyledText>
        </>
      )}
    />
  );
};

export default DateInput;
