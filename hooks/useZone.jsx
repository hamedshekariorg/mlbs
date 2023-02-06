import { useEffect, useState } from 'react';
import { getCities } from 'services/cities';
import { getCountryNames } from 'services/countries';
import { getStates } from 'services/states';
import { Select } from 'antd';
import { useMemo } from 'react';
import { StyledImg } from 'components/Common/commonStyles';
const { Option } = Select;
const useZone = (countryId, stateId) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  // set countries list
  const getCountries = async () => {
    const countries = await getCountryNames({ page: 1, pagination_size: 250 });
    setCountries(countries);
  };

  // set states list
  const getStatesList = async () => {
    const states = await getStates(countryId);
    setStates(states);
  };

  // set cities list
  const getCitiesList = async () => {
    const cities = await getCities(countryId, stateId);
    setCities(cities);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    countryId && getStatesList();
  }, [countryId]);

  useEffect(() => {
    stateId && getCitiesList();
  }, [stateId]);

  const countriesOption = useMemo(() => {
    return countries?.map(({ id, value, icon }) => (
      <Option value={id} key={id}>
        {icon && <StyledImg mr={2} width="15px" height="12px" src={icon} />}
        {value}
      </Option>
    ));
  }, [countries]);

  const statesOption = useMemo(() => {
    return states?.map(({ id, value }) => (
      <Option value={id} key={id}>
        {value}
      </Option>
    ));
  }, [states]);

  const citiesOption = useMemo(() => {
    return cities?.map(({ id, value }) => (
      <Option value={id} key={id}>
        {value}
      </Option>
    ));
  }, [cities]);

  return { countriesOption, statesOption, citiesOption };
};

export default useZone;
