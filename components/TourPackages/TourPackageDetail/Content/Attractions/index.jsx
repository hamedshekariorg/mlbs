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
      position="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <StyledImg src="/static/images/tourPackage/milad.svg" />
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

const countImages = [1, 2, 3, 4, 5, 6];

const temporaryAttractionsImages = countImages.map((count) => ({
  id: count,
  component: <ComponentImages />,
}));

const Attractions = () => {
  return (
    <StyledDiv id="Attractions" position="relative" height="220px" ml="-12px">
      <ArrowInsideCarousel
        spaceBetween={1}
        left="-15px"
        right="-15px"
        slices={temporaryAttractionsImages}
      />
    </StyledDiv>
  );
};

export default Attractions;
