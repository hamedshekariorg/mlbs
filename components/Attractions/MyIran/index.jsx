import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import {
  StyledDiv,
  StyledLink,
  StyledParagraph,
  StyledText,
} from 'components/Common/commonStyles';
import {
  StyledCarouselOptions,
  StyledContent,
  StyledOverlay,
  StyledSwiper,
} from './style';
import Icon from 'components/Icon';
import { sliderItems, content } from 'utils/myIran.utils';

SwiperCore.use([Pagination, Navigation]);

const MyIran = () => {
  const settings = {
    direction: 'vertical',
    modules: [Pagination],
    pagination: {
      el: '#pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: '#next-btn',
      prevEl: '#prev-btn',
    },
  };

  return (
    <StyledDiv>
      <StyledSwiper {...settings} className="mySwiper">
        {sliderItems?.map(({ id, image, text, title, description }) => (
          <SwiperSlide key={id}>
            <img width="100%" height="100%" src={image} />
            <StyledOverlay>
              <StyledText color="#fff" fontSize={26}>
                {text}
              </StyledText>
              <StyledText color="#fff" fontSize={46}>
                {title}
              </StyledText>
              <StyledParagraph
                ellipsis={{ rows: 2 }}
                color="#fff"
                fontSize={11}
                width="735px"
                mb="0 !important"
              >
                {description}
              </StyledParagraph>
              <StyledLink underline fontSize={6} color="#fff !important">
                Read more
              </StyledLink>
            </StyledOverlay>
          </SwiperSlide>
        ))}
        <StyledCarouselOptions>
          <div id="prev-btn">
            <Icon name="icon-arrow-up" />
          </div>
          <div id="pagination"></div>
          <div id="next-btn">
            <Icon name="icon-arrow-down" />
          </div>
        </StyledCarouselOptions>
      </StyledSwiper>
      <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
    </StyledDiv>
  );
};

export default MyIran;
