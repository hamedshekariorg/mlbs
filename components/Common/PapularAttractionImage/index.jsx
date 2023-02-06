import React from 'react';
import { StyledText } from 'components/Common/commonStyles';
import { StyledContainer, StyledContent, StyledOverlay } from './style';

const PapularAttractionImage = ({ cover, name, cityName }) => {
  return (
    <StyledContainer>
      <img width="100%" height="100%" src={cover} />
      <StyledOverlay>
        <StyledContent>
          <StyledText color="gray.37" fontSize={10} underline>
            {name}
          </StyledText>
          <StyledText color="gray.37" mt={6} fontSize={2} underline>
            {cityName}
          </StyledText>
        </StyledContent>
      </StyledOverlay>
    </StyledContainer>
  );
};

export default PapularAttractionImage;
