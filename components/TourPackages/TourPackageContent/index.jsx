import { useState, useEffect } from 'react';
import Button from 'components/Common/Button';
import Tabs from 'components/Common/Tabs';
import {
  StyledRow,
  StyledH3,
  StyledDiv,
  StyledCol,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import TourPackageCard from 'components/Common/TourPackageCard';
import TourFilter from 'components/Common/TourFilter';
import { cities } from 'utils/tourPackage.utils.js';
import { getTourListAction } from 'store/tourPackage/tourPackage.action';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const [cityId, setCityId] = useState(1);
  const dispatch = useDispatch();
  const { tourList } = useSelector((state) => state.tourPackage);

  useEffect(() => {
    dispatch(getTourListAction({ page: 1 }));
  }, []);

  return (
    <StyledDiv mt="150px">
      <StyledH3 fontSize={10} color="gray.24" textAlign="center">
        TourPackages
      </StyledH3>
      <StyledRow>
        <StyledCol
          span={18}
          display={tourList.data.length === 0 && 'none'}
          px="20px"
        >
          <Tabs
            tabs={cities}
            handleSetCityId={(_cityId) => setCityId(_cityId)}
            cityId={cityId}
          >
            <StyledDiv
              display="grid"
              gridTemplateColumns="auto auto auto"
              gap="50px"
              px="10px"
            >
              {tourList.data.length &&
                tourList.data.map((tourPackage) => (
                  <TourPackageCard
                    key={tourPackage.id}
                    tour={tourPackage}
                    currentPosition="tourPackage"
                  />
                ))}
            </StyledDiv>
          </Tabs>
          <StyledDiv textAlign="center" mt="18px">
            <Button btnType="greenLink" borderRadius="lg">
              Load More
            </Button>
          </StyledDiv>
        </StyledCol>
        <StyledCol span={6} mt={8}>
          <TourFilter type="tourPackage" />
        </StyledCol>
      </StyledRow>
    </StyledDiv>
  );
};
