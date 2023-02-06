import { useEffect, useState } from 'react';
import { getCountryNames } from 'services/countries';
import { StyledInput } from 'components/Common/Input/style';
import Icon from 'components/Icon';
import down from 'public/static/images/down.svg';
import { StyledAutoComplete, StyledImg } from 'components/Common/commonStyles';

const NationalityInput = ({ placeholder, tab, width }) => {
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [flag, setFlag] = useState(null);
  const [countriesData, setCountriesData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  // handle search method for autocomplete
  const handleSearch = (val) => {
    let result = [];
    result = countriesData.filter((country) =>
      country.value.toLowerCase().includes(val.toLowerCase()),
    );
    setSearchResult(result);
  };

  // get the id and flag related to a country based on its name
  const mapCountrytoId = (countryName) => {
    countriesData?.map((country) => {
      if (countryName === country?.value) {
        setSelectedCountryId(country?.id);
        setFlag(country?.icon);
      }
    });
  };

  // clear flag and id on autocomplete change
  const handleAutoCompleteChange = () => {
    setSelectedCountryId(null);
    setFlag(null);
  };

  useEffect(async () => {
    const countries = await getCountryNames({ page: 1, pagination_size: 250 });
    setCountriesData(countries);
  }, []);

  return (
    <StyledAutoComplete
      width={width || '270px'}
      onSelect={(data) => mapCountrytoId(data)}
      onSearch={handleSearch}
      options={searchResult}
    >
      <StyledInput
        onChange={handleAutoCompleteChange}
        height="44px"
        borderRadius="lg"
        border="input"
        placeholder="Nationality"
        prefix={
          <Icon color="orange.13" fontSize={14} mb="4px" name="icon-search" />
        }
        suffix={
          selectedCountryId || flag ? (
            <StyledImg mr={2} width="15px" height="12px" src={flag} />
          ) : (
            <StyledImg color="orange.13" fontSize={2} src={down} mr="4px" />
          )
        }
      />
    </StyledAutoComplete>
  );
};

export default NationalityInput;
