import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Grid, Navigation, Pagination, Thumbs } from 'swiper';
import Icon from 'components/Icon';
import { StyledCarouselOptions, StyledSwiper } from './style';

SwiperCore.use([, Pagination, Navigation, Thumbs, Grid]);

const GridCarousel = ({ items, ...rest }) => {
  const pagination = {
    clickable: true,
    el: '#pagination',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <StyledSwiper
      {...rest}
      pagination={pagination}
      grid={{
        rows: 2,
      }}
      modules={[Grid, Pagination, Thumbs, Navigation]}
      navigation={{
        nextEl: '#next-btn',
        prevEl: '#prev-btn',
      }}
    >
      {items?.map((item) => (
        <SwiperSlide key={item}>{item}</SwiperSlide>
      ))}
      <StyledCarouselOptions>
        <div id="prev-btn">
          <Icon name="icon-arrow-left" />
        </div>
        <div id="pagination"></div>
        <div id="next-btn">
          <Icon name="icon-arrow-right" />
        </div>
      </StyledCarouselOptions>
    </StyledSwiper>
  );
};

export default GridCarousel;
