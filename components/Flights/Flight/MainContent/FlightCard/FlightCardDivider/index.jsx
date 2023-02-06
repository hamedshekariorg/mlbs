import { useTheme } from '@emotion/react';
import { StyledDiv } from 'components/Common/commonStyles';
import React from 'react';
import { StyledDivider } from './style';

const FlightCardDivider = () => {
  const theme = useTheme();
  return (
    <>
      <StyledDiv
        bg="#fff"
        borderRadius={'full'}
        width="32px"
        height="32px"
        position="absolute"
        top="-109px"
      />
      <StyledDivider />
      <StyledDiv
        bg="#fff"
        borderRadius={'full'}
        width="32px"
        height="32px"
        position="absolute"
        bottom="-109px"
      />
    </>
  );
};

export default FlightCardDivider;
