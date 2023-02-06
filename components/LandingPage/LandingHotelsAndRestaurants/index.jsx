import { useState } from 'react';
import CustomCitySearch from 'components/Common/CustomCitySearch';
import LandingCarousel from 'components/Common/Carousel/LandingCarousel';
import Rate from 'components/Common/Rate';
import {
  StyledDiv,
  StyledText,
  StyledVertical,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import { Cities } from 'utils/attraction.utils.js';
import { StyledCarouselWrapper, StyledBox } from './style';

const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const LandingHotelsAndRestaurant = ({ type, title, text, id }) => {
  //TODO:this part will be done dynamically
  const [cityId, setCityId] = useState('1');

  return (
    <StyledVertical mt="72px">
      <StyledDiv
        mb={7}
        alignItems="center"
        display="flex"
        flexDirection={type === 'hotel' ? 'row' : 'row-reverse'}
      >
        <StyledDiv width="100%" />
        <StyledText
          textAlign="center"
          fontSize={16}
          fontWeight={1}
          color="gray.15"
          width="100%"
        >
          {type === 'hotel'
            ? 'Popular Hotels and Accommodations'
            : 'Popular Restaurants'}
        </StyledText>
        <StyledDiv
          width="100%"
          textAlign={type === 'hotel' ? 'right' : 'left'}
          transform="rotate(180deg)"
        >
          <img
            width="382px"
            height="56px"
            src="/static/images/landingPage/small-background.svg"
            alt="small-background"
          />
        </StyledDiv>
      </StyledDiv>
      <CustomCitySearch
        tabs={Cities}
        handleSetCityId={setCityId}
        cityId={cityId}
      />
      <StyledHorizontal justifyContent="center" overflow="hidden">
        <StyledCarouselWrapper>
          <LandingCarousel indexes={indexes} id={id}>
            <StyledBox type={type}>
              <StyledDiv position="absolute" bottom="12px" left="17px">
                <StyledText color="#fff" fontSize={3}>
                  {title}
                </StyledText>
                <StyledDiv>
                  <Rate />
                </StyledDiv>
                <StyledText color="#fff" fontSize={4}>
                  {text}
                </StyledText>
              </StyledDiv>
            </StyledBox>
          </LandingCarousel>
        </StyledCarouselWrapper>
      </StyledHorizontal>
      <StyledText
        fontSize={6}
        textAlign="center"
        color="blue.10"
        textDecoration="underline"
        mt="58px"
      >
        View (1200) More Restaurants
      </StyledText>
    </StyledVertical>
  );
};

export default LandingHotelsAndRestaurant;
