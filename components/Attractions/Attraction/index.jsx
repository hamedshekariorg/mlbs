import React, { useEffect, useMemo } from 'react';
import GridCarousel from 'components/Common/Carousel/GridCarousel';
import SeasonsContainer from 'components/Common/SeasonsContainer';
import { useQuery, gql } from '@apollo/client';

import { StyledTitle, StyledLink } from './style';
import UnescoCard from 'components/Common/UnescoCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExceptionalAdventuresAction,
  getPopularAttractionsAction,
  getUnescoAction,
} from 'store/attractions/attractions.action';
import { getAttractionListsRoute } from 'store/attractions/attractions.service';

import { StyledDiv, StyledText } from 'components/Common/commonStyles';
import PopularAttractionsCarousel from './PopularAttractionsCarousel';
import AttractionCarousel from 'components/Common/Carousel/AttractionCarousel';
import Link from 'components/Link';
const Attraction = () => {
  const dispatch = useDispatch();
  const { exceptionalAdventures, unesco } = useSelector(
    (state) => state.attractions,
  );
  const popularAttractions = useSelector(
    (state) => state.attractions.popularAttractions.items,
  );
  useEffect(() => {
    // dispatch(getExceptionalAdventuresAction()) // TODO: uncomment this while the store is filled with API data
    dispatch(getUnescoAction());
    dispatch(getPopularAttractionsAction());
  }, []);

  // const QUERY = gql`
  //   query {
  //     page
  //   }
  // `;

  // const { data, loading, error } = useQuery(QUERY);

  const unescoItems = useMemo(
    () =>
      unesco.items?.map(({ id, name, cover, visiting_time }) => (
        <UnescoCard
          key={id}
          image={cover}
          name={name}
          rate={4.6} // TODO: rate of item
          location="somewhere"
          category="Unesco"
          time={visiting_time}
          views="1,234" // TODO: views of item
          rateVisible={true}
        />
      )),
    [unesco],
  );

  const exceptionalAdventuresItems = useMemo(
    () =>
      exceptionalAdventures?.items.map((item) => (
        <img key={item} src={item} width="100%" height="100%" alt={item} />
      )),
    [exceptionalAdventures?.items],
  );

  const carouselSettings = {
    loop: true,
    autoplay: true,
    autoplayDelay: 3000,
    slidesPerView: 4,
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

  return (
    <StyledDiv textAlign="center" mt="250px">
      <StyledTitle>Exceptional Adventure</StyledTitle>
      <AttractionCarousel
        items={exceptionalAdventuresItems}
        settings={carouselSettings}
      />
      <StyledDiv px="140px" pb="84px">
        <StyledDiv mt="150px">
          <StyledTitle>Popular Attractions</StyledTitle>
          <PopularAttractionsCarousel items={popularAttractions} />
          <Link fontSize={6} p="8px 0" href={getAttractionListsRoute()}>
            <StyledText underline color="blue.10">
              View({exceptionalAdventures?.items?.length}) more attractions
            </StyledText>
          </Link>
        </StyledDiv>
        <StyledDiv mt="80px" mb="72px">
          <StyledTitle>UNESCO</StyledTitle>
          <StyledDiv height="700px" mb="28px">
            <GridCarousel
              slidesPerView={2}
              spaceBetween={5}
              items={unescoItems}
            />
          </StyledDiv>
          <Link fontSize={6} p="8px 0" href={getAttractionListsRoute()}>
            <StyledText underline color="blue.10">
              View({unesco?.items?.length}) more from UNESCO
            </StyledText>
          </Link>
        </StyledDiv>
        <SeasonsContainer />
      </StyledDiv>
    </StyledDiv>
  );
};

export default Attraction;
