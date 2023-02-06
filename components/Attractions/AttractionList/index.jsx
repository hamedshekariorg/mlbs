import { useEffect, useMemo, useState } from 'react';
import { Cities, GLOBALIZEDREGISTERED } from 'utils/attraction.utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAttractionsListAction,
  getFilterAttractionsAction,
} from 'store/attractions/attractions.action';
import { getCategoriesAction } from 'store/categories/categories.action';
import { getSeasonsAction } from 'store/seasons/seasons.action';
import {
  StyledCol,
  StyledDiv,
  StyledRow,
  StyledDivider,
  StyledH3,
} from 'components/Common/commonStyles';
import AttractionsCard from 'components/Common/AttractionsCard';
import Button from 'components/Common/Button';
import { useTheme } from '@emotion/react';
import CitySearch from 'components/Common/CitySearch';
import SwitchGroup from 'components/Common/SwitchGroup';
import { StyledButton, StyledFilterContainer } from './style';

const AttractionList = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const pages = useSelector(
    (state) => state.attractions.attractionsList.number_of_pages,
  );
  const AttractionsItems = useSelector(
    (state) => state.attractions.attractionsList.data,
  );
  const categoriesItems = useSelector((state) => state.categories.items);
  const seasonsItems = useSelector((state) => state.seasons.items);

  const [cityId, setCityId] = useState('1');
  const [selectedSeasons, setSelectedSeasons] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [type, setType] = useState(null);
  const [page, setPage] = useState(null);
  const [allSwitchsStatus, setAllSwitchsStatus] = useState(true);

  const params = {
    page: page || 1,
    categories: selectedCategories,
    seasons_id: selectedSeasons,
    pagination_size: 15,
    type,
  };
  useEffect(() => {
    dispatch(getCategoriesAction());
    dispatch(getSeasonsAction());
  }, []);

  useEffect(() => {
    page && dispatch(getAttractionsListAction(params));
  }, [page]);

  useEffect(() => {
    if (selectedSeasons || selectedCategories || type) {
      setAllSwitchsStatus(true);
      dispatch(getFilterAttractionsAction(params));
    }
  }, [selectedSeasons, selectedCategories, type, cityId]); //filtering attractions when ever some dependencies changes

  const seasonsOptions = useMemo(
    () =>
      seasonsItems.map(({ id, title }) => ({
        value: id,
        label: title,
      })),
    [seasonsItems],
  );

  const categoriesOptions = useMemo(
    () => categoriesItems.map(({ id, title }) => ({ value: id, label: title })),
    [categoriesItems],
  );

  return (
    <StyledDiv pt={11} pb={7} px="140px">
      <StyledDiv py={4} textAlign="center">
        <StyledH3 fontSize={18} color={'gray.15'}>
          Attractions
        </StyledH3>
      </StyledDiv>
      <StyledRow>
        <StyledCol span={18}>
          <CitySearch
            tabs={Cities}
            handleSetCityId={(_cityId) => setCityId(_cityId)}
            cityId={cityId}
          >
            <StyledRow gutter={[16, 24]}>
              {AttractionsItems?.map(
                ({ id, name, image, city_name, visiting_time }) => (
                  <StyledCol span={8} key={id} height="230px">
                    <AttractionsCard
                      id={id}
                      name={name}
                      image={image}
                      cityName={city_name}
                      visitingTime={visiting_time}
                    />
                  </StyledCol>
                ),
              )}
            </StyledRow>
          </CitySearch>
          {page + 1 < pages && (
            <StyledDiv display="flex" justifyContent="center" pt={8}>
              <Button
                btnType="greenLink"
                borderRadius={10}
                onClick={() => setPage((page) => page + 1)}
              >
                Load More
              </Button>
            </StyledDiv>
          )}
        </StyledCol>
        <StyledCol span={5} offset={1}>
          <StyledDiv textAlign="center" mb="18px" mt="50px">
            <StyledButton onClick={() => setAllSwitchsStatus(false)}>
              RestFilters
            </StyledButton>
          </StyledDiv>
          <StyledFilterContainer>
            <SwitchGroup
              title=" High Seasons"
              options={seasonsOptions}
              onChange={setSelectedSeasons}
              checked={allSwitchsStatus}
            />
            <StyledDivider m="0" />
            <SwitchGroup
              title="Categories"
              options={categoriesOptions}
              onChange={setSelectedCategories}
              checked={allSwitchsStatus}
            />
            <StyledDivider m="0" />
            <SwitchGroup
              title="Globalized Registered"
              options={GLOBALIZEDREGISTERED}
              onChange={setType}
              checked={allSwitchsStatus}
            />
          </StyledFilterContainer>
        </StyledCol>
      </StyledRow>
    </StyledDiv>
  );
};

export default AttractionList;
