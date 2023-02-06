import { useState } from 'react';
import { Radio } from 'antd';
import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledInput, StyledRadio } from 'components/Common/Input/style';
import NationalityInput from 'components/Common/Search/NationalityInput';
import DateInput from 'components/Common/Search/DateInput';
import OrderSent from './OrderSent';
import Button from 'components/Common/Button';

const VisaTab = () => {
  const [language, setLanguage] = useState(null);
  const [orderClicked, setOrderClicked] = useState(null);

  if (orderClicked) return <OrderSent />;

  return (
    <StyledVertical>
      <StyledHorizontal mb="15px">
        <Radio.Group
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <StyledRadio value={1}>Chinese</StyledRadio>
          <StyledRadio value={2}>Others</StyledRadio>
        </Radio.Group>
      </StyledHorizontal>
      <StyledHorizontal justifyContent="space-between">
        <NationalityInput placeholder="From" tab="otherServices" />
        <StyledInput
          height="44px"
          width="270px"
          borderRadius="lg"
          border="input"
          placeholder="Passport Number"
        />
        <DateInput tab="otherServices" />
        <StyledHorizontal
          justifyContent="space-evenly"
          alignItems="center"
          width="300px"
          border="input"
          borderRadius="lg"
          bg="gray.1"
        >
          <StyledSpan fontSize={3} color="orange.13">
            Price:
          </StyledSpan>
          <StyledSpan fontSize={9} color="blue.10" mr="60px">
            ¥146.99
            <StyledSpan fontSize={3} color="gray.27">
              / person
            </StyledSpan>
          </StyledSpan>
        </StyledHorizontal>
        <Button width="180px" onClick={() => setOrderClicked(true)}>
          Order Now
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default VisaTab;
