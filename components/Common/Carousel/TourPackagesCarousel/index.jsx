import { StyledDiv } from 'components/Common/commonStyles';
import { StyledSwiperOption, SwiperStyled } from './style';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

const TourPackagesCarousel = ({ images }) => {
  return (
    <StyledDiv navigation={true}>
      <SwiperStyled navigation={true} className="mySwiper">
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <StyledSwiperOption py={3} px={7}>
              <img src={image} />
            </StyledSwiperOption>
          </SwiperSlide>
        ))}
      </SwiperStyled>
    </StyledDiv>
  );
};

export default TourPackagesCarousel;
