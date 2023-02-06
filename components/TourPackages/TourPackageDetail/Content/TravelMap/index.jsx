import { useState, useEffect } from 'react';
import { StyledDiv } from 'components/Common/commonStyles';
import { StyledTxt, StyledImgBlock } from './style';
import Icon from 'components/Icon';

const TravelMap = ({ map }) => {
  const [mapSrc, setMapSrc] = useState(null);

  useEffect(() => {
    map && setMapSrc(Object.values(map)[0]);
  }, [map]);

  return (
    <StyledDiv id="TravelMap" display={mapSrc ? 'flex' : 'none'}>
      <StyledImgBlock>
        <img src={mapSrc} alt="tranvel map" />
      </StyledImgBlock>
      <StyledDiv mt="18px">
        <StyledTxt>
          <Icon fontSize={12} name="icon-download" />
        </StyledTxt>
        <StyledTxt ml="10px">Save Photo</StyledTxt>
        <StyledTxt ml="48px">
          <Icon fontSize={12} name="icon-share" />
        </StyledTxt>
        <StyledTxt ml="10px">Share</StyledTxt>
      </StyledDiv>
    </StyledDiv>
  );
};

export default TravelMap;
