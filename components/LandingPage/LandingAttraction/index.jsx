import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import {
  StyledDiv,
  StyledText,
  StyledImg,
} from 'components/Common/commonStyles';
import {
  StyledImgsBlock,
  StyledTextBlock,
  StyledSwiperContainer,
  StyledTextTitle,
  StyledParagraph,
  StyledTextAndImgs,
} from './style';
import Icon from 'components/Icon';
import { getSeasonAttractionsAction } from 'store/attractions/attractions.action';
import { useDispatch, useSelector } from 'react-redux';

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};

const swiperSetting = {
  spaceBetween: 30,
  effect: 'fade',
  navigation: true,
  pagination: pagination,
  modules: [EffectFade, Pagination, Navigation],
  navigation: {
    nextEl: '#next-button',
    prevEl: '#prev-button',
  },
  className: 'mySwiper',
};

const LandingAttraction = () => {
  const dispatch = useDispatch();
  const attractions = useSelector((state) => state.attractions.season.items);

  useEffect(() => {
    dispatch(getSeasonAttractionsAction({ page: 1, 'sort[random]': 1 }));
  }, []);

  return (
    <StyledSwiperContainer id="attraction">
      <StyledTextTitle>Attraction</StyledTextTitle>
      {attractions.length && (
        <Swiper {...swiperSetting}>
          {attractions.map(
            ({ id, show_background, name, show, description }) => (
              <SwiperSlide key={id}>
                {/* TODO:bg="blue.2" will be deleted  */}
                <StyledDiv position="relative" bg="blue.2">
                  <img
                    src={Object.values(show_background || {})?.[0]}
                    width="100%"
                    height="758px"
                    alt={name}
                  />
                  <StyledTextAndImgs>
                    <StyledTextBlock>
                      <div id="next-button">
                        <Icon name="icon-arrow-right" fontSize={16} />
                      </div>
                      <div id="prev-button">
                        <Icon name="icon-arrow-left" fontSize={16} />
                      </div>
                      <StyledText fontSize={14} color="#fff">
                        {name}
                      </StyledText>
                      <StyledParagraph>{description}</StyledParagraph>
                      <StyledText
                        color="#fff"
                        fontSize={6}
                        textAlign="right"
                        textDecoration="underline"
                        mt="33px"
                      >
                        READ MORE
                      </StyledText>
                    </StyledTextBlock>
                    <StyledImgsBlock>
                      <StyledImg
                        alt={show}
                        src={Object.values(show || {})?.[0]}
                        zIndex={3}
                      />
                    </StyledImgsBlock>
                  </StyledTextAndImgs>
                </StyledDiv>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      )}
    </StyledSwiperContainer>
  );
};

export default LandingAttraction;
