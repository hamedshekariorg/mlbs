import { useEffect, useState } from 'react';
import Layout from '../Layout';
import {
  StyledH3,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledAutoComplete, StyledButton, StyledChip } from './style';
import Icon from 'components/Icon';
import Tags from './Children/Tags';
import {
  attractionChips,
  attractionsToVisitResults,
  chips,
  citiesToVisitResults,
} from 'utils/tourPackage.utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAttractionsToVisitFilterChip,
  changeAttractionsToVisitSearch,
  changeCitiesToVisitFilterChip,
  changeCitiesToVisitSearch,
} from 'store/customTourPackage/customTourPackage.action';
import { StyledInput } from 'components/Common/Input/style';
import { getCities } from 'services/cities';
import { getStates } from 'services/states';
import { IRAN_API_ID } from 'utils/hotel.utils';
import CityCard from './Children/CityCard';
import AttractionCard from './Children/AttractionCard';

const LevelSixSeven = ({ type }) => {
  const dispatch = useDispatch();
  const {
    citiesToVisitFilterChip,
    citiesToVisitSearchCities,
    selectedSearchResult,
    attractionsToVisitSearchAttractions,
    attractionsToVisitFilterChip,
    selectedAttractions,
  } = useSelector((state) => state?.customTourPackage);

  const [countryCities, setCountryCities] = useState([]);
  const [stateIds, setStateIds] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // set chip filter to be equal to selected chip in the store
  const handleSelectChip = (title) => {
    type === 'attraction'
      ? dispatch(changeAttractionsToVisitFilterChip(title))
      : dispatch(changeCitiesToVisitFilterChip(title));
  };

  /*
    1.get all the states in IRAN from API
    2.extract all the ids related to them
    3.add all of the ids into the "stateIds" array
  */
  const getIranStates = async (countryId) => {
    const states = await getStates(countryId);
    states.map(({ id }) =>
      setStateIds((prevState) => {
        return [...prevState, id];
      }),
    );
  };

  /*
    1.map through the states
    2.get the cities for every single one of the states
    3.add all of the retrieved cities into the "countryCities" array
  */
  const getIranCities = () => {
    stateIds?.map(async (id) => {
      const cities = await getCities(IRAN_API_ID, id);
      cities?.map((city) => {
        setCountryCities((prevState) => {
          return [...prevState, city];
        });
      });
    });
  };

  // get the id related to a city based on its name
  const mapCitytoId = (cityName) => {
    countryCities.map((countryCity) => {
      if (cityName === countryCity.value) {
        type === 'city'
          ? dispatch(
              changeCitiesToVisitSearch([
                ...citiesToVisitSearchCities,
                { title: cityName, id: countryCity?.id },
              ]),
            )
          : dispatch(
              changeAttractionsToVisitSearch([
                ...attractionsToVisitSearchAttractions,
                { title: cityName, id: countryCity?.id },
              ]),
            );
      }
    });
  };

  // handle search method for autocomplete
  const handleSearch = (val) => {
    let result = [];
    result = countryCities.filter((city) =>
      city.value.toLowerCase().includes(val.toLowerCase()),
    );
    setSearchResults(result);
  };

  useEffect(() => {
    getIranStates(IRAN_API_ID);
  }, []);

  useEffect(() => {
    if (stateIds.length === 30) {
      getIranCities();
    }
  }, [stateIds]);

  return (
    <Layout
      height="auto"
      active={
        type === 'city'
          ? selectedSearchResult.length
          : selectedAttractions.length
      }
    >
      <StyledVertical alignItems="center">
        <StyledHorizontal
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <StyledH3>Which cities would you like to visit?</StyledH3>
          <StyledAutoComplete
            onSelect={(data) => mapCitytoId(data)}
            onSearch={handleSearch}
            options={searchResults}
            className="input stack-top"
          >
            <StyledInput
              height="36px"
              borderRadius="lg"
              border="input"
              prefix={
                <Icon
                  name="icon-search"
                  fontSize={8}
                  mb="3px"
                  color="gray.47"
                />
              }
              placeholder="Search"
            />
          </StyledAutoComplete>
        </StyledHorizontal>
        <Tags type={type} />
        <StyledHorizontal width="100%" flexWrap="wrap">
          {type === 'city'
            ? chips.map(({ title, id }) => (
                <StyledChip
                  selected={
                    citiesToVisitFilterChip
                      ? citiesToVisitFilterChip === title
                      : title === 'All'
                      ? true
                      : false
                  }
                  key={id}
                  onClick={() => handleSelectChip(title)}
                >
                  {title}
                </StyledChip>
              ))
            : attractionChips.map(({ title, id }) => (
                <StyledChip
                  selected={
                    attractionsToVisitFilterChip
                      ? attractionsToVisitFilterChip === title
                      : title === 'All'
                      ? true
                      : false
                  }
                  key={id}
                  onClick={() => handleSelectChip(title)}
                >
                  {title}
                </StyledChip>
              ))}
        </StyledHorizontal>
        <StyledHorizontal
          width="100%"
          flexWrap="wrap"
          justifyContent="space-between"
          mt="24px"
        >
          {type === 'city'
            ? citiesToVisitResults.map(({ city, state, id, image }) => (
                <CityCard
                  key={id}
                  state={state}
                  city={city}
                  image={image}
                  id={id}
                />
              ))
            : attractionsToVisitResults.map(
                ({ city, title, id, image, rate }) => (
                  <AttractionCard
                    key={id}
                    title={title}
                    city={city}
                    image={image}
                    id={id}
                    rate={rate}
                  />
                ),
              )}
        </StyledHorizontal>
        <StyledButton>Load More</StyledButton>
      </StyledVertical>
    </Layout>
  );
};

export default LevelSixSeven;
