import { StyledHorizontal } from 'components/Common/commonStyles';
import { StyledOption } from 'components/Common/Input/style';
// needs to be imported later!
// import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeApproximateDuration,
  changeDeparture,
  changeEnd,
  changePreferedDuration,
  changeStart,
} from 'store/customTourPackage/customTourPackage.action';
import { toMonthName } from 'utils/common.utils';
import { StyledSelect, StyledDatePicker } from './style';

const OptionChildren = ({ index }) => {
  const dispatch = useDispatch();
  const {
    departure,
    preferredDuration,
    startDate,
    endDate,
    approximateDuration,
  } = useSelector((state) => state?.customTourPackage);

  // change store based on the selected information by user
  const onSelectChange = (value, type) => {
    switch (type) {
      case 'departure':
        return dispatch(changeDeparture(value));
      case 'duration':
        return dispatch(changePreferedDuration(value));
      case 'start':
        return dispatch(changeStart(value));
      case 'end':
        return dispatch(changeEnd(value));
      case 'approximate':
        return dispatch(changeApproximateDuration(value));
    }
  };

  // store selected date by user on "exact" option
  const onSelectDate = (date, dateString, type) => {
    type === 'start'
      ? dispatch(changeStart(dateString))
      : dispatch(changeEnd(dateString));
  };

  switch (index) {
    case 1:
      return (
        <StyledHorizontal justifyContent="space-between" width="642px">
          <StyledSelect
            value={departure}
            placeholder="Select your departure month"
            optionFilterProp="children"
            showSearch
            onClick={(e) => e.preventDefault()}
            onChange={(val) => onSelectChange(val, 'departure')}
            filterOption={(input, option) =>
              option.value
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            {[...Array(14).keys()].map((num) => {
              if (num !== 0) {
                let year = new Date().getFullYear();
                const month = toMonthName(new Date().getMonth() + num, 'long');
                num >= 12 - new Date().getMonth() + 1 && ++year;
                return (
                  <StyledOption value={`${month} ${year}`} key={num}>
                    {month} {year}
                  </StyledOption>
                );
              }
            })}
          </StyledSelect>
          <StyledSelect
            value={preferredDuration}
            placeholder="Select your preferred duration"
            optionFilterProp="children"
            showSearch
            onClick={(e) => e.preventDefault()}
            onChange={(val) => onSelectChange(val, 'duration')}
            filterOption={(input, option) =>
              option.value
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            {[...Array(31).keys()].map(
              (num) =>
                num !== 0 && (
                  <StyledOption value={num} key={num}>
                    {num === 30 && '+'}
                    {num}
                    {num === 1 ? ' Day' : ' Days'}
                  </StyledOption>
                ),
            )}
          </StyledSelect>
        </StyledHorizontal>
      );
    case 2:
      return (
        <StyledHorizontal justifyContent="space-between" width="642px">
          <StyledDatePicker
            // needs to be uncomment later
            // defaultValue={startDate && moment(startDate, 'yyyy-MM-dd')}
            placeholder="Start Date"
            onChange={(date, dateString) =>
              onSelectDate(date, dateString, 'start')
            }
            onClick={(e) => e.preventDefault()}
          />
          <StyledDatePicker
            // needs to be uncomment later
            // defaultValue={endDate && moment(endDate, 'yyyy-MM-dd')}
            placeholder="End Date"
            onChange={(date, dateString) =>
              onSelectDate(date, dateString, 'end')
            }
            onClick={(e) => e.preventDefault()}
          />
        </StyledHorizontal>
      );

    case 3:
      return (
        <StyledHorizontal>
          <StyledSelect
            value={approximateDuration}
            placeholder="Select your approxmate duration"
            optionFilterProp="children"
            showSearch
            onClick={(e) => e.preventDefault()}
            onChange={(val) => onSelectChange(val, 'approximate')}
            filterOption={(input, option) =>
              option.value
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            {[...Array(31).keys()].map(
              (num) =>
                num !== 0 && (
                  <StyledOption value={num} key={num}>
                    {num === 30 && '+'}
                    {num}
                    {num === 1 ? ' Day' : ' Days'}
                  </StyledOption>
                ),
            )}
          </StyledSelect>
        </StyledHorizontal>
      );
  }
};

export default OptionChildren;
