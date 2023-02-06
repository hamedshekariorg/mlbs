import { useState } from 'react';
import { temporaryTourGuideCards } from 'utils/tourGuide.utils';
import {
  StyledCol,
  StyledDiv,
  StyledRow,
} from 'components/Common/commonStyles';
import { Cities } from 'utils/attraction.utils';
import CitySearch from 'components/Common/CitySearch';
import TourGuideCard from './TourGuideCard';
import Button from 'components/Common/Button';
import Filter from './TourGuideFilter';
import Link from 'components/Link';

const TourGuideList = () => {
  const [cityId, setCityId] = useState('1');

  return (
    <StyledRow mt="55px" px="140px">
      <StyledCol span={20}>
        <CitySearch
          tabs={Cities}
          handleSetCityId={(_cityId) => setCityId(_cityId)}
          cityId={cityId}
        >
          <StyledRow gutter={[16, 24]}>
            {/* TODO:this will load dynamically  */}
            {temporaryTourGuideCards.map(
              ({ id, imageName, name, location }) => (
                <StyledCol span={8} key={id}>
                  <Link href="/tour-guide/detail">
                    <TourGuideCard
                      imageName={imageName}
                      name={name}
                      location={location}
                    />
                  </Link>
                </StyledCol>
              ),
            )}
          </StyledRow>
        </CitySearch>
        <StyledDiv textAlign="center" mt="40px" mb="72px">
          <Button px="41px" btnType="secondary" borderRadius={10}>
            Load More
          </Button>
        </StyledDiv>
      </StyledCol>
      <StyledCol span={4}>
        <Filter />
      </StyledCol>
    </StyledRow>
  );
};

export default TourGuideList;
