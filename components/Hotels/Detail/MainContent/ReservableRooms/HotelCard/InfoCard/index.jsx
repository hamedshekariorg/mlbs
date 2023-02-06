import React from 'react';
import { StyledHorizontal, StyledVertical } from 'components/Common/commonStyles';
import { StyledInfoText, StyledSubtitleContainer } from './style';
import { sampleHotelCardInfo } from 'utils/hotel.utils';

const InfoCard = () => {
  return (
    <StyledHorizontal justifyContent="space-between">
      {sampleHotelCardInfo.map(({ title, subtitle, id }, index) => (
        <StyledVertical
          key={id}
          mr={index !== sampleHotelCardInfo.length - 1 && '8px'}
          ml={index !== 0 && '8px'}
        >
          <StyledInfoText>{title}</StyledInfoText>
          <StyledSubtitleContainer>{subtitle}</StyledSubtitleContainer>
        </StyledVertical>
      ))}
    </StyledHorizontal>
  );
};

export default InfoCard;
