import { useState } from 'react';
import {
  StyledDiv,
  StyledImg,
  StyledText,
} from 'components/Common/commonStyles';
import ArrowInsideCarousel from 'components/Common/Carousel/ArrowInsideCarousel';
import Rate from 'components/Common/Rate';

const ComponentImages = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledDiv
      id="Hotels"
      position="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <StyledImg src="/static/images/tourPackage/hotels.svg" />
      <StyledImg
        position="absolute"
        left="0"
        src={`/static/images/tourPackage/${
          isHover ? 'milad-tover-hover' : 'milad-tover'
        }.svg`}
      />
      <StyledDiv position="absolute" bottom="12px" left="12px">
        <Rate />
        <StyledText color="#fff" fontSize="4">
          Milad Tower
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  );
};

const temporaryHotelsImages = [
  {
    id: 1,
    component: <ComponentImages />,
  },
  {
    id: 2,
    component: <ComponentImages />,
  },
  {
    id: 3,
    component: <ComponentImages />,
  },
  {
    id: 4,
    component: <ComponentImages />,
  },
  {
    id: 5,
    component: <ComponentImages />,
  },
];

const Hotels = () => {
  return (
    <StyledDiv position="relative" height="220px" ml="-12px">
      <ArrowInsideCarousel
        spaceBetween={1}
        left="-15px"
        right="-15px"
        slices={temporaryHotelsImages}
      />
    </StyledDiv>
  );
};

export default Hotels;
