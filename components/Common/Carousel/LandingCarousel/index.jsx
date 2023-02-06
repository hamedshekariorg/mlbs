import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from 'components/Icon';
import { StyledDiv } from 'components/Common/commonStyles';
import { StyledPrevBtn, StyledNextBtn } from './style';

const LandingCarousel = ({ children, indexes, id }) => {
  return (
    <StyledDiv>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={4}
        navigation={true}
        navigation={{
          prevEl: `#prev-${id}`,
          nextEl: `#next-${id}`,
        }}
      >
        {indexes.map((item, index) => (
          <SwiperSlide key={index}>{children}</SwiperSlide>
        ))}
      </Swiper>
      <StyledNextBtn id={`next-${id}`}>
        <Icon name="icon-arrow-right" fontSize={16} />
      </StyledNextBtn>
      <StyledPrevBtn id={`prev-${id}`}>
        <Icon name="icon-arrow-left" fontSize={16} />
      </StyledPrevBtn>
    </StyledDiv>
  );
};

export default LandingCarousel;
