import { useState } from 'react';
import { StyledPopupContainer, StyledDatePicker } from './style';
import { StyledImg } from 'components/Common/commonStyles';

const DatePicker = ({ onChange, placeholder, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledPopupContainer>
        <StyledDatePicker
          placeholder={placeholder}
          onChange={onChange}
          open={open}
          picker={['month', 'date']}
          onOpenChange={() => setOpen((prev) => !prev)}
          nextIcon={<StyledImg src="/static/images/tourPackage/bag.svg" />}
          getPopupContainer={(triggerNode) => {
            return triggerNode.parentNode;
          }}
        />
      </StyledPopupContainer>
      {children && open && children}
    </>
  );
};

export default DatePicker;
