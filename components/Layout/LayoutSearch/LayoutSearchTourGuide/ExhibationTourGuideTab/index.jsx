import { useEffect, useState } from 'react';
import { Radio } from 'antd';
import { StyledHorizontal, StyledVertical } from 'components/Common/commonStyles';
import { StyledInput, StyledRadio } from 'components/Common/Input/style';
import { SelectInput } from 'components/Common/Input';
import { getCountries } from 'services/countries';
import OrderSent from './OrderSent';
import CityInput from 'components/Common/Search/CityInput';
import DateInput from 'components/Common/Search/DateInput';
import Button from 'components/Common/Button';

const ExhibationTourGuideTab = () => {
  const [countriesCode, setCountriesCode] = useState([]);
  const [reserveClicked, setReserveClicked] = useState(false);

  // get country list
  const setCountries = async () => {
    const countries = await getCountries({ page: 1, pagination_size: 250 });
    setCountriesCode(countries);
  };

  useEffect(() => {
    setCountries();
  }, []);

  if (reserveClicked) return <OrderSent />;
  return (
    <StyledVertical>
      <Radio.Group>
        <StyledRadio value={1}>English</StyledRadio>
        <StyledRadio value={2}>Chinese Mondrin</StyledRadio>
      </Radio.Group>
      <StyledHorizontal mt="15px" justifyContent="space-between">
        <CityInput tab="tourGuide" placeholder="Exhibition (Name/City)" />
        <DateInput tab="tourGuide" />
        <StyledInput
          height="44px"
          width="270px"
          borderRadius="lg"
          border="input"
          placeholder="Name"
        />
        <SelectInput
          selectMinWidth="80px"
          options={countriesCode}
          onSelect={(item) => setSelectedCode(item.value)}
          onChange={(item) => setPhoneNumber(item)}
          selectPlaceholder="+86"
          width="270px"
          height="45px"
          borderRadius="lg"
          placeholder="Phone"
          type="number"
        />
        <Button width="180px" onClick={() => setReserveClicked(true)}>
          Reserve
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default ExhibationTourGuideTab;
