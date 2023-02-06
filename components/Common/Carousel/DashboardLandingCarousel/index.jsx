import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { StyledContainer, StyledCarouselOptions } from './style.js';
import Icon from 'components/Icon';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export const carouselSettings = {
  loop: true,
  autoplay: true,
  autoplayDelay: 3000,
  slidesPerView: 'auto',
  grabCursor: true,
  effect: 'coverflow',
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth: 1,
    scale: 0.9,
    slideShadows: false,
  },
};

const SwiperComponent = ({ items }) => {
  const pagination = {
    clickable: true,
    el: '#pagination',
    renderBullet: function (index, className) {
      return `<span class='${className}'></span>`;
    },
  };

  return (
    <StyledContainer>
      <Swiper
        pagination={pagination}
        modules={[EffectCoverflow, Pagination, Navigation]}
        {...carouselSettings}
        navigation={{
          nextEl: '#next-btn',
          prevEl: '#prev-btn',
        }}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item}>{item}</SwiperSlide>
        ))}
        <StyledCarouselOptions>
          <div id="prev-btn">
            <Icon name="icon-chevron-left" />
          </div>
          <div id="pagination"></div>
          <div id="next-btn">
            <Icon name="icon-chevron-right" />
          </div>
        </StyledCarouselOptions>
      </Swiper>
    </StyledContainer>
  );
};

export default SwiperComponent;
