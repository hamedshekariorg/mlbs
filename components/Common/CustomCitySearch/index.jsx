import React, { useEffect, useState } from 'react';
import Icon from 'components/Icon';
import { getCities } from 'services/cities';
import { getStates } from 'services/states';
import { StyledInput } from 'components/Common/Input/style';
import {
  StyledTabPane,
  StyledTabs,
  StyledBox,
  StyledAutoComplete,
} from './style';
import { StyledHorizontal } from 'components/Common/commonStyles';
import { IRAN_API_ID } from 'utils/hotel.utils';
const CustomCitySearch = ({ tabs, children, handleSetCityId, cityId }) => {
  const [countryCities, setCountryCities] = useState([]);
  const [stateIds, setStateIds] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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
    countryCities.map((countryCity) => {
      if (cityName === countryCity.value) handleSetCityId(countryCity.id);
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
    <StyledBox>
      <StyledHorizontal width="674px" height="45px" position="relative">
        <StyledTabs
          tabBarGutter={19}
          defaultActiveKey="1"
          className="tabs"
          onChange={(item) => handleSetCityId(item)}
        >
          {tabs.map(({ id, name }) => (
            <StyledTabPane tab={name} key={id}>
              {cityId === id && children}
            </StyledTabPane>
          ))}
        </StyledTabs>

        <StyledAutoComplete
          onSelect={(data) => mapCitytoId(data)}
          onSearch={handleSearch}
          options={searchResults}
          className="input stack-top"
        >
          <StyledInput
            height="44px"
            borderRadius="lg"
            border="input"
            prefix={<Icon name="icon-search" fontSize={14} color="orange.13" />}
          />
        </StyledAutoComplete>
      </StyledHorizontal>
    </StyledBox>
  );
};

export default CustomCitySearch;
