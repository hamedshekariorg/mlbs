import { StyledDatePicker, StyledRangePicker } from './style';

const DateInput = ({ placeholder, type, tab, width, ...rest }) => {
  return (
    <>
      {type === 2 ? (
        <StyledRangePicker width={width || '270px'} />
      ) : (
        <StyledDatePicker
          {...rest}
          placeholder={placeholder || 'Date'}
          width={width || '270px'}
        />
      )}
    </>
  );
};

export default DateInput;
