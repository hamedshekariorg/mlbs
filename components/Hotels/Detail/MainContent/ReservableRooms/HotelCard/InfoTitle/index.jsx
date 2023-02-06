import React from 'react';
import {
  StyledDiv,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledTitle } from './style';
const InfoTitle = ({ type }) => {
  return (
    <StyledTitle>
      {type} /<StyledSpan fontSize={2}> Maximum Capacity 2 Persons</StyledSpan>
      <StyledDiv borderBottom="input" />
    </StyledTitle>
  );
};

export default InfoTitle;
