import React from 'react';
import {
  StyledDiv,
  StyledDivider,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledContainer } from './style';

const Divider = ({ isSvgPanelExpaned }) => {
  return (
    <StyledContainer>
      <StyledVertical
        alignItems="center"
        justifyContent="space-around"
        position="absolute"
        left="46px"
      >
        <StyledDiv
          width="32px"
          height="32px"
          position="absolute"
          bg="#fff"
          borderBottom="footer"
          borderRadius="full"
          top={isSvgPanelExpaned ? '-130px' : '-115px'}
        />
        <StyledDivider
          position="absolute"
          height={isSvgPanelExpaned ? '19.5rem' : '16.5rem'}
          border="divider"
        />
        <StyledDiv
          width="32px"
          height="32px"
          bg="#fff"
          position="absolute"
          borderTop="footer"
          borderRadius="full"
          bottom={isSvgPanelExpaned ? '-130px' : '-115px'}
        />
      </StyledVertical>
    </StyledContainer>
  );
};

export default Divider;
