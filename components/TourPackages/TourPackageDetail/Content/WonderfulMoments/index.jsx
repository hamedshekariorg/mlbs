import { useEffect, useState } from 'react';
import { StyledDiv, StyledImg } from 'components/Common/commonStyles';
import ArrowInsideCarousel from 'components/Common/Carousel/ArrowInsideCarousel';
import { StyledImgBlock } from './style';

const WonderfulMoments = ({ medias }) => {
  const [images, setImages] = useState([]);
  /**
   * change response of api to show in swiper
   * from [{currentId: currentSrc},...] to
   *  [id:currentId,component: <StyledImgBlock>
   *   <StyledImg src={currentSrc} />
   *  </StyledImgBlock>]
   */
  const customizeWonderfullImgs = (medias) => {
    const customizedMedias = Object.keys(medias).map((key) => ({
      id: key,
      component: (
        <StyledImgBlock>
          <StyledImg src={medias[key]} />
        </StyledImgBlock>
      ),
    }));
    setImages(customizedMedias);
  };

  useEffect(() => {
    medias && customizeWonderfullImgs(medias);
  }, [medias]);

  return (
    <StyledDiv
      id="WonderfulMoments"
      position="relative"
      height="220px"
      ml="-12px"
    >
      {images?.length && (
        <ArrowInsideCarousel
          spaceBetween={1}
          left="-15px"
          right="-15px"
          slices={images}
        />
      )}
    </StyledDiv>
  );
};

export default WonderfulMoments;
