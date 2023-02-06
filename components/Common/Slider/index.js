import React from 'react';
import { Slider } from 'antd';
import { SliderContainer } from './style';
import { StyledText, StyledHorizontal } from 'components/Common/commonStyles';

export default ({ min, max, defaultValue, styledHandler }) => {
  const isArray = Array.isArray(defaultValue);
  return (
    <SliderContainer styledHandler={styledHandler}>
      <Slider
        range={isArray}
        defaultValue={defaultValue}
        getTooltipPopupContainer={(triggerNode) => triggerNode}
      />
      <StyledHorizontal justifyContent="space-between">
        <StyledText fontSize={4} color="blue.10">
          {min}
        </StyledText>
        <StyledText fontSize={4} color="blue.10">
          {max}
        </StyledText>
      </StyledHorizontal>
    </SliderContainer>
  );
};
