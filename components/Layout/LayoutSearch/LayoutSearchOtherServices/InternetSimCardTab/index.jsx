import React, { useState } from 'react';
import { Select } from 'antd';
import {
  StyledDiv,
  StyledHorizontal,
  StyledImg,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { CustomSelect, StyledSelect } from './style';
import {
  guideTypes,
  simTabPartners,
  simTabPartnersSelection,
} from 'utils/search.utils';
import NationalityInput from 'components/Common/Search/NationalityInput';
import { StyledInput } from 'components/Common/Input/style';
import Button from 'components/Common/Button';
const { Option } = Select;

const InternetSimCardTab = () => {
  const [operator, setOperator] = useState(1);

  return (
    <StyledVertical position="relative">
      <StyledHorizontal
        position="absolute"
        right="0"
        top="-30px"
        alignItems="center"
        fontSize={2}
        color="gray.27"
      >
        {simTabPartners.map(({ icon, value }) => (
          <StyledVertical alignItems="center" key={value}>
            <StyledImg src={icon} mx="7px" />
            {value === operator && (
              <StyledDiv width="36px" height="2px" bg="blue.10" mt="4px" />
            )}
          </StyledVertical>
        ))}
        <StyledSpan>Our Partners</StyledSpan>
      </StyledHorizontal>
      <StyledHorizontal alignItems="center">
        <StyledSpan color="orange.13" mr="7px">
          Operator:
        </StyledSpan>
        <StyledSelect value={operator} onChange={(val) => setOperator(val)}>
          {simTabPartnersSelection.map(({ title, value }) => (
            <Option key={value} value={value}>
              {title}
            </Option>
          ))}
        </StyledSelect>
      </StyledHorizontal>
      <StyledHorizontal justifyContent="space-between" mt="8px">
        <NationalityInput placeholder="From" tab="otherServices" />
        <StyledInput
          height="44px"
          width="270px"
          borderRadius="lg"
          border="input"
          placeholder="Passport Number"
        />
        <CustomSelect placeholder="Category" showSearch={false}>
          {guideTypes.map((type) => (
            <Option key={type}>{type}</Option>
          ))}
        </CustomSelect>
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
        <Button width="180px">Search</Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default InternetSimCardTab;
