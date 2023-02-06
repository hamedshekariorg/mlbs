import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { StyledContainer, StyledCircle, StyledImage } from './style';
import {
  StyledDiv,
  StyledText,
  StyledImg,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import Button from 'components/Common/Button';
import {
  staticSlides,
  utilsPositions,
  circuleShapes,
} from 'utils/landing.utils';
import Icon from 'components/Icon';

const LandingGetStart = () => {
  const [positions, setPositions] = useState(utilsPositions);
  /*
   *rotate pictures by changing and positions
   * */
  const handleRotating = (e) => {
    let newPositions = [...positions];
    if (e.previousIndex === 0) {
      return;
    } else if (e.previousIndex === 6 && e.activeIndex === 1) {
      return;
    } else if (e.activeIndex > e.previousIndex) {
      //handle click NEXT button
      newPositions.push(positions[0]);
      newPositions.shift();
      setPositions(newPositions);
    } else {
      //handle click prev button
      newPositions.unshift(positions[positions.length - 1]);
      newPositions.pop();
      setPositions(newPositions);
    }
  };

  return (
    <StyledContainer>
      <StyledDiv mx="140px">
        <StyledVertical justifyContent="center">
          <StyledText color="gray.15" fontSize={18}>
            Getting Started? It’s Simple
          </StyledText>
          <StyledText color="gray.27" fontSize={10} mx="130px" my="32px">
            Prepare For Your Trip. Find out all you need to know before you go.
            Traveling is as unique as you are. And there is no one package that
            fits all. That’s why we offer
          </StyledText>
        </StyledVertical>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={8}
          slidesPerView={1}
          effect={'fade'}
          loop={true}
          navigation={{
            nextEl: '#next_button',
            prevEl: '#prev_button',
          }}
          onSlideChange={handleRotating}
        >
          {staticSlides.map(
            ({ id, titleNum, titleText, text, img, buttons }) => (
              <SwiperSlide key={id}>
                <StyledDiv bg="#fff" width="50%">
                  <StyledVertical>
                    <StyledHorizontal
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <div id="prev_button">
                        <Icon name="icon-arrow-left" fontSize={8} />
                      </div>
                      <StyledHorizontal flex="1">
                        <StyledDiv ml="41px">
                          <StyledText
                            color="blue.35"
                            fontSize="6.8rem"
                            pr="10px"
                          >
                            {titleNum}
                          </StyledText>
                          <StyledText fontSize="26px" color="gray.27">
                            {titleText}
                          </StyledText>
                        </StyledDiv>
                      </StyledHorizontal>
                      <div id="next_button">
                        <Icon name="icon-arrow-right" fontSize={8} />
                      </div>
                    </StyledHorizontal>
                    <StyledDiv textAlign="left" color="gray.27" mt="30px">
                      <StyledText>{text}</StyledText>
                    </StyledDiv>
                  </StyledVertical>
                  <StyledDiv
                    mt={9}
                    bg="#fff"
                    textAlign="left"
                    width="calc(100vw - 550px)"
                  >
                    {buttons.map((title) => (
                      <Button
                        mx={2}
                        width="144px"
                        height="44px"
                        btnType="secondary"
                        key={title}
                      >
                        {title}
                      </Button>
                    ))}
                  </StyledDiv>
                </StyledDiv>
              </SwiperSlide>
            ),
          )}
        </Swiper>
        {circuleShapes.map(({ id, color, image }) => (
          <StyledDiv key={id} position="absolute" top="117px" right="-190px">
            <StyledDiv position="relative" transition="all 0.5s">
              <StyledImg
                src="/static/images/landingPage/ring.svg"
                width="432px"
                height="432px"
              />
              <StyledCircle
                bg={color}
                top={positions[id].top}
                right={positions[id].right}
              >
                <StyledImage src={image} position={positions[id]} />
              </StyledCircle>
            </StyledDiv>
          </StyledDiv>
        ))}
      </StyledDiv>
    </StyledContainer>
  );
};

export default React.memo(LandingGetStart);
