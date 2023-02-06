import { StyledPopupContainer, StyledDatePicker } from './style';
import { StyledImg } from 'components/Common/commonStyles';

const Calendar = ({ placeholder }) => {
  return (
    <StyledPopupContainer>
      <StyledDatePicker
        placeholder={placeholder}
        open={true}
        format="YYYY-MM-DD"
        picker={['month', 'date']}
        nextIcon={<StyledImg src="/static/images/tourPackage/bag.svg" />}
        getPopupContainer={(triggerNode) => {
          return triggerNode.parentNode;
        }}
      />
    </StyledPopupContainer>
  );
};

export default Calendar;
