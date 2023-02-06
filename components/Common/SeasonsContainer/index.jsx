import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSeasonsAction } from 'store/seasons/seasons.action';
import { getSeasonAttractionsAction } from 'store/attractions/attractions.action';
import { Space } from 'antd';
import { StyledImg } from './style';
import AttractionsCard from 'components/Common/AttractionsCard';
import {
  StyledDiv,
  StyledParagraph,
  StyledH3,
  StyledH1,
} from 'components/Common/commonStyles';
import AttractionCarousel from 'components/Common/Carousel/AttractionCarousel';
import { carouselSettings } from 'utils/common.utils';

const SeasonsContainer = ({ ...styles }) => {
  const dispatch = useDispatch();
  const seasons = useSelector((state) => state.seasons.items);
  const attractions = useSelector((state) => state.attractions.season.items);
  const [seasonItem, setSeasonItem] = useState(null);

  useEffect(() => {
    dispatch(getSeasonsAction());
  }, []);

  useEffect(() => {
    seasons && setSeasonItem(seasons[0]);
  }, [seasons]);

  useEffect(() => {
    seasonItem?.id &&
      dispatch(
        getSeasonAttractionsAction({ page: 1, season_ids: seasonItem?.id }),
      );
  }, [seasonItem?.id]);

  const seasonsItems = useMemo(
    () =>
      attractions.map(({ id, name, cover, city_name }) => (
        <AttractionsCard
          key={id}
          id={id}
          name={name}
          image={attractions[0].cover}
          cityName={city_name}
          visitingTime={'visiting_time'}
        />
      )),
    [attractions],
  );

  return (
    <StyledDiv textAlign="center" {...styles}>
      <StyledH1 color="gray.15" fontSize={18} mb="30px">
        Four Seasons
      </StyledH1>
      <Space size={47}>
        {seasons?.map(({ title, id, note, name }) => (
          <StyledImg
            key={id}
            onMouseOver={() => setSeasonItem({ title, id, note, name })}
            src={
              seasonItem?.id === id
                ? `/static/images/seasons/${id}-active.svg`
                : `/static/images/seasons/${id}.svg`
            }
            active={seasonItem?.id === id}
          />
        ))}
      </Space>

      <StyledDiv px="49px" textAlign="left" my="51px">
        <StyledH3 fontSize={18} color="gray.27">
          {seasonItem?.title} {seasonItem?.name}
        </StyledH3>
        <StyledParagraph
          ellipsis={{
            rows: 3,
          }}
          color="gray.27"
          fontSize={9}
        >
          {seasonItem?.note}
        </StyledParagraph>
      </StyledDiv>

      {attractions && (
        <AttractionCarousel items={seasonsItems} settings={carouselSettings} />
      )}
    </StyledDiv>
  );
};

export default SeasonsContainer;
