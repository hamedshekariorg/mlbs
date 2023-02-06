import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio } from 'antd';
import {
  StyledH3,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledRadio } from 'components/Common/Input/style';
import {
  changeApproximateDuration,
  changeDeparture,
  changeEnd,
  changePreferedDuration,
  changeStart,
  changeTimeType,
} from 'store/customTourPackage/customTourPackage.action';
import { travelTime } from 'utils/tourPackage.utils';
import Layout from '../Layout';

const LevelTwo = () => {
  const dispatch = useDispatch();
  const {
    timeType,
    departure,
    preferredDuration,
    startDate,
    endDate,
    approximateDuration,
  } = useSelector((state) => state?.customTourPackage);

  const [height, setHeight] = useState('295px');

  // clear other types subitem values
  const clearTimeType = (type) => {
    switch (type) {
      case 'approximate':
        dispatch(changeStart(null));
        dispatch(changeEnd(null));
        dispatch(changeApproximateDuration(null));
      case 'exact':
        dispatch(changeDeparture(null));
        dispatch(changePreferedDuration(null));
        dispatch(changeApproximateDuration(null));
      case 'decide-later':
        dispatch(changeStart(null));
        dispatch(changeEnd(null));
        dispatch(changeDeparture(null));
        dispatch(changePreferedDuration(null));
    }
  };

  // change the option state based on the chosen option by user
  const changeTravelTiming = (value) => {
    dispatch(changeTimeType(value));
    clearTimeType(value);
  };

  // change the height of the layout based on chosen option by user
  useEffect(() => {
    timeType && setHeight('351px');
  }, [timeType]);

  // check if we got a valid option information from user and user may proceed to the next level
  const checkValidInformation = () => {
    switch (timeType) {
      case 'approximate':
        return (departure && preferredDuration) !== null;
      case 'exact':
        return (startDate && endDate) !== null;
      case 'decide-later':
        return approximateDuration !== null;
    }
  };

  return (
    <Layout height={height} active={checkValidInformation()}>
      <StyledH3>When will you be Traveling?</StyledH3>
      <StyledVertical mt="-12px">
        <Radio.Group defaultValue={timeType}>
          {travelTime.map(({ title, id, value, child }, index) => (
            <StyledHorizontal mb={index !== 2 && '16px'}>
              <StyledRadio
                key={id}
                checked={timeType == value}
                value={value}
                onChange={(e) => changeTravelTiming(e.target.value)}
              >
                {title}
                {timeType === value && child}
              </StyledRadio>
            </StyledHorizontal>
          ))}
        </Radio.Group>
      </StyledVertical>
    </Layout>
  );
};

export default LevelTwo;
