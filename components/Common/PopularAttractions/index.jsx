import React, { useEffect, useState } from 'react';
import {
  StyledContainer,
  StyledTabPane,
  StyledTabs,
  StyledSearchInput,
  StyledImage,
} from './style';
import GridCarousel from 'components/Common/Carousel/GridCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularAttractionsAction } from 'store/attractions/attractions.action';
import PopularAttractionCard from 'components/Common/PopularAttractionCard';
import { StyledDiv } from 'components/Common/commonStyles';
import { tabs } from 'utils/attraction.utils';

const PopularAttractions = () => {
  const [searchValue, setSearchValue] = useState('');
  const { popularAttractions } = useSelector((state) => state.attractions);
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState({
    ...popularAttractions.items[0],
    src: 'https://api.mlbs.stg.blytd.com/blah-blah', // initially set for now, waiting for minio to get set up!
  });

  const slot = {
    left: (
      <StyledSearchInput
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    ),
  };

  useEffect(() => {
    dispatch(getPopularAttractionsAction());
  }, []);

  return (
    <StyledContainer>
      <StyledTabs defaultActiveKey="1" tabBarExtraContent={slot}>
        {tabs.map(({ id, name }) => (
          <StyledTabPane tab={name} key={id}>
            {popularAttractions.items.length ? (
              <StyledDiv id="main-content">
                <GridCarousel
                  items={popularAttractions.items.map((item) => {
                    const { id, medias, name } = item;
                    const src =
                      'https://api.mlbs.stg.blytd.com/' +
                      medias[Object.keys(medias)[0]].path;
                    return (
                      <StyledImage
                        key={id}
                        src={src}
                        width={180}
                        height={242}
                        alt={name}
                        onClick={() => setActiveItem({ ...item, src })}
                      />
                    );
                  })}
                  paginateBy={6}
                  columns={3}
                  height={564}
                />
                <PopularAttractionCard
                  img={activeItem.src}
                  title={activeItem.name}
                  rate={4.6} // rate of item
                  location="somewhere"
                  category="Popular"
                  time={activeItem.visiting_time}
                  views="1,234" // views of item
                  rateVisible={true} //
                  alt={activeItem.name}
                />
              </StyledDiv>
            ) : (
              <>
                <img
                  src="/static/images/no_result.png"
                  width={200}
                  height={150}
                  alt="Nothing Found!"
                />
                <h2>Oops!</h2>
                <p>Nothing Found!</p>
              </>
            )}
          </StyledTabPane>
        ))}
      </StyledTabs>
    </StyledContainer>
  );
};

export default PopularAttractions;
