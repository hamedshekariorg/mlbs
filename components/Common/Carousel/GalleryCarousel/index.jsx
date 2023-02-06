import React, { useRef, useState } from 'react';
import { StyledDiv } from 'components/Common/commonStyles';
import {
  StyledNavigationDiv,
  StyledSwiperOption,
  StyledSwiperThumbs,
  StyledSwiperThumbsOption,
} from './style';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

SwiperCore.use([FreeMode, Navigation, Thumbs]);
const GalleryCarousel = ({ images }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperSetting = {
    spaceBetween: 10,
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    thumbs: { swiper: thumbsSwiper },
  };

  const swiperThumbsSetting = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 12,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  };

  return (
    <StyledDiv>
      <Swiper {...swiperSetting} className="mySwiper2">
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <StyledSwiperOption>
              <img src={image} />
            </StyledSwiperOption>
          </SwiperSlide>
        ))}
      </Swiper>

      <StyledSwiperThumbs {...swiperThumbsSetting} className="mySwiper">
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <StyledSwiperThumbsOption>
              <img src={image} />
            </StyledSwiperThumbsOption>
          </SwiperSlide>
        ))}

        <StyledNavigationDiv right="0" ref={navigationNextRef}>
          <RightOutlined />
        </StyledNavigationDiv>
        <StyledNavigationDiv left="0" ref={navigationPrevRef}>
          <LeftOutlined />
        </StyledNavigationDiv>
      </StyledSwiperThumbs>
    </StyledDiv>
  );
};

export default GalleryCarousel;
