import React, { useEffect, useState } from 'react';
import { ReserveContainer } from './style';
import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { SelectInput } from 'components/Common/Input';
import { getCountries } from 'services/countries';
import { StyledInput } from 'components/Common/Input/style';
import Icon from 'components/Icon';
import { InfoCircleOutlined } from '@ant-design/icons';
import OrderSent from './OrderSent';
import CityInput from 'components/Common/Search/CityInput';
import DateInput from 'components/Common/Search/DateInput';
import Quantity from 'components/Common/Search/Quantity';
import Button from 'components/Common/Button';

const GroupPurchaseTab = () => {
  const [countriesCode, setCountriesCode] = useState([]);
  const [selectedCode, setSelectedCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [firstName, setFirstName] = useState(null);

  // Todo: this state will be available in redux store later
  const [orderSent, setOrderSent] = useState(false);

  /* If everything is fine then set orderSent state to true */
  const handleSendOrder = () => {
    setOrderSent(true);
  };

  // get country list
  const setCountries = async () => {
    const countries = await getCountries({ page: 1, pagination_size: 250 });
    setCountriesCode(countries);
  };

  useEffect(() => {
    setCountries();
  }, []);

  if (orderSent) return <OrderSent />;

  return (
    <StyledVertical position="relative">
      <ReserveContainer>
        <StyledSpan color="blue.10">
          You can also <StyledSpan color="red.3">Reserve</StyledSpan> by phone
        </StyledSpan>
        <StyledSpan color="gray.27" mt="4px">
          + 400 51 77 00
        </StyledSpan>
      </ReserveContainer>

      <StyledHorizontal mb="12px">
        <Icon fontSize={4} color="gray.27">
          <InfoCircleOutlined />
        </Icon>
        <StyledSpan fontSize={2} color="gray.27" mt="2px" ml="4px">
          Group purchase is only for booking more than 10 people
        </StyledSpan>
      </StyledHorizontal>

      <StyledHorizontal justifyContent="space-between">
        <CityInput placeholder="Check-in city" width="200px" tab="hotel" />
        <DateInput placeholder="Check-in date" width="200px" tab="hotel" />
        <StyledInput
          width="200px"
          height="45px"
          borderRadius="lg"
          placeholder="Name"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <SelectInput
          selectMinWidth="80px"
          options={countriesCode}
          onSelect={(item) => setSelectedCode(item.value)}
          onChange={(item) => setPhoneNumber(item)}
          selectPlaceholder="+86"
          width="250px"
          height="45px"
          borderRadius="lg"
          placeholder="Phone"
          type="number"
        />
        <Quantity tab="hotel" width="180px" />
        <Button width="180px" onClick={handleSendOrder}>
          Send Order
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default GroupPurchaseTab;
