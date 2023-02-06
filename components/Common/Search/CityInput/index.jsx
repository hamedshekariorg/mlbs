import React, { useEffect, useState } from 'react';
import { getStates } from 'services/states';
import { getCities } from 'services/cities';
import { IRAN_API_ID } from 'utils/hotel.utils';
import { StyledAutoComplete, StyledImg } from 'components/Common/commonStyles';
import { StyledInput } from 'components/Common/Input/style';
import Icon from 'components/Icon';
import down from 'public/static/images/down.svg';

const CityInput = ({ placeholder, tab, width }) => {
  const [countryCities, setCountryCities] = useState([]);
  const [stateIds, setStateIds] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [cityId, setCityId] = useState(null);

  /* 
    1.get all the states in IRAN from API 
    2.extract all the ids related to them
    3.add all of the ids into the "stateIds" array
  */
  const getIranStates = async (countryId) => {
    const states = await getStates(countryId);
    states?.map(({ id }) =>
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
    countryCities?.map((countryCity) => {
      if (cityName === countryCity?.value) setCityId(countryCity?.id);
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
    <StyledAutoComplete
      width={width || '270px'}
      onSelect={(data) => mapCitytoId(data)}
      onSearch={handleSearch}
      options={searchResults}
    >
      <StyledInput
        height="44px"
        borderRadius="lg"
        border="input"
        placeholder={placeholder}
        prefix={
          <Icon color="orange.13" fontSize={14} mb="6px" name="icon-location" />
        }
        suffix={
          <StyledImg color="orange.13" fontSize={2} src={down} mr="4px" />
        }
      />
    </StyledAutoComplete>
  );
};

export default CityInput;
