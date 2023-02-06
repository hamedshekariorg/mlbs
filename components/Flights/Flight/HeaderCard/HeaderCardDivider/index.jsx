import React from 'react';
import { StyledDiv } from 'components/Common/commonStyles';
import { StyledContainer, StyledDivider } from './style';
import { useTheme } from '@emotion/react';

const HeaderCardDivider = ({ divider }) => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <StyledDiv
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        position="absolute"
        left={-140}
      >
        <StyledDiv
          width="20px"
          height="20px"
          position="absolute"
          bg="#fff"
          borderBottom="title"
          borderRadius={'full'}
          top={-90}
        />
        {divider === true && <StyledDivider />}
        <StyledDiv
          bg="#fff"
          borderTop="title"
          borderRadius={'full'}
          width="20px"
          height="20px"
          position="absolute"
          bottom={-90}
        />
      </StyledDiv>
    </StyledContainer>
  );
};

export default HeaderCardDivider;
