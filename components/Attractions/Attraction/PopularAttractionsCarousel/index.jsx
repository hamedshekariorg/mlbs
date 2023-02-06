import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import GridCarousel from 'components/Common/Carousel/GridCarousel';
import {
  StyledCol,
  StyledDiv,
  StyledRow,
} from 'components/Common/commonStyles';
import PapularAttractionImage from 'components/Common/PapularAttractionImage';
import PopularAttractionCard from 'components/Common/PopularAttractionCard';
import Empty from 'components/Common/Empty';

const PopularAttractionsCarousel = ({ items }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const gridCarouselItems = useMemo(
    () =>
      items?.map(({ id, cover, name, city_name }) => (
        <PapularAttractionImage
          key={id}
          cover={cover}
          name={name}
          cityName={city_name}
        />
      )),
    [items],
  );

  return (
    <StyledDiv>
      {items.length ? (
        <StyledRow>
          <StyledCol span={10}>
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
            >
              {items?.map(
                ({
                  id,
                  cover,
                  name,
                  city_name,
                  timeAgo,
                  category,
                  description,
                }) => (
                  <SwiperSlide key={id}>
                    <PopularAttractionCard
                      id={id}
                      image={cover}
                      name={name}
                      rate={4.6}
                      location={city_name}
                      category={category}
                      timeAgo={timeAgo}
                      views={12}
                      rateVisible={4}
                      description={description}
                    />
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </StyledCol>
          <StyledCol span={13} offset={1} height="560px">
            <GridCarousel
              watchSlidesProgress={true}
              onSwiper={setThumbsSwiper}
              slidesPerView={3}
              spaceBetween={16}
              items={gridCarouselItems}
            />
          </StyledCol>
        </StyledRow>
      ) : (
        <Empty />
      )}
    </StyledDiv>
  );
};

export default PopularAttractionsCarousel;
