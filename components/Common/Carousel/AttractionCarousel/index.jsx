import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from 'swiper';
import { StyledCarouselOptions } from './style';
import Icon from 'components/Icon';
import Empty from 'components/Common/Empty';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

const AttractionCarousel = ({
  items,
  settings,
  dynamicPagination,
  chevronIcon,
}) => {
  //custom pagination
  const pagination = {
    clickable: true,
    el: '#pagination',
    //this function is for custom pagination
    renderBullet: function (index, className) {
      return `<span class='${className}'>${
        dynamicPagination ? index++ : ''
      }</span>`;
    },
  };
  return items?.length ? (
    <Swiper
      pagination={pagination}
      navigation={{
        nextEl: '#next-btn',
        prevEl: '#prev-btn',
      }}
      {...settings}
      modules={[Pagination, Navigation]}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>{item}</SwiperSlide>
      ))}
      <StyledCarouselOptions
        dynamic={dynamicPagination}
        chevronIcon={chevronIcon}
      >
        <div id="prev-btn">
          <Icon name={chevronIcon ? 'icon-chevron-left' : 'icon-arrow-left'} />
        </div>
        <div id="pagination"></div>
        <div id="next-btn">
          <Icon
            name={chevronIcon ? 'icon-chevron-right' : 'icon-arrow-right'}
          />
        </div>
      </StyledCarouselOptions>
    </Swiper>
  ) : (
    <Empty />
  );
};

export default AttractionCarousel;
