import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from 'components/Icon';
import { StyledDiv, StyledHorizontal } from 'components/Common/commonStyles';
import { StyledBtn } from './style';

const ArrowInsideCarousel = ({ slices, id, spaceBetween, left, right }) => {
  return (
    <StyledDiv position="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetween || 10}
        slidesPerView={4}
        navigation={true}
        navigation={{
          prevEl: `#prev-${id}`,
          nextEl: `#next-${id}`,
        }}
      >
        {slices.map(({ id, component }) => (
          <SwiperSlide key={id}>
            <StyledHorizontal justifyContent="center" alignItems="center">
              {component}
            </StyledHorizontal>
          </SwiperSlide>
        ))}
      </Swiper>
      <StyledBtn id={`next-${id}`} right={right || '-26px'}>
        <Icon name="icon-arrow-right" fontSize={16} />
      </StyledBtn>
      <StyledBtn id={`prev-${id}`} left={left || '-26px'}>
        <Icon name="icon-arrow-left" fontSize={16} />
      </StyledBtn>
    </StyledDiv>
  );
};

export default ArrowInsideCarousel;
