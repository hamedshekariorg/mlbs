import React, { useState } from 'react';
import { Select } from 'antd';
import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import OrderSent from './OrderSent';
import { guideTypes, translationOptions } from 'utils/search.utils';
import Icon from 'components/Icon';
import { StyledSelect } from './style';
import { StyledInput } from 'components/Common/Input/style';
import { StyledSelect as CustomSelect } from '../TourGuideTab/style';
import { InfoCircleOutlined } from '@ant-design/icons';
import Button from 'components/Common/Button';

const { Option } = Select;

const EditorTranslationsTab = () => {
  const [orderClicked, setOrderClicked] = useState(false);
  const [translation, setTranslation] = useState(1);

  if (orderClicked) return <OrderSent />;

  return (
    <StyledVertical position="relative">
      <StyledHorizontal
        position="absolute"
        right="0"
        top="-20px"
        alignItems="center"
      >
        <Icon fontSize={6} color="gray.27" mr="10px">
          <InfoCircleOutlined />
        </Icon>
        <Button width="180px" btnType="white">
          Translate Now
        </Button>
      </StyledHorizontal>
      <StyledHorizontal alignItems="center">
        <StyledSpan color="orange.13" mr="7px">
          Translate:
        </StyledSpan>

        <StyledSelect
          value={translation}
          onChange={(val) => setTranslation(val)}
        >
          {translationOptions.map(({ l1, l2, value }) => (
            <Option key={value} value={value}>
              <StyledHorizontal alignItems="center">
                <StyledSpan>{l1}</StyledSpan>
                <Icon
                  name="icon-arrow-right"
                  mx="8px"
                  fontSize={6}
                  color="blue.10"
                />
                <StyledSpan>{l2}</StyledSpan>
              </StyledHorizontal>
            </Option>
          ))}
        </StyledSelect>
      </StyledHorizontal>
      <StyledHorizontal justifyContent="space-between" mt="8px">
        <CustomSelect placeholder="Category" showSearch={false}>
          {guideTypes.map((type) => (
            <Option key={type}>{type}</Option>
          ))}
        </CustomSelect>
        <CustomSelect placeholder="Certifies By" showSearch={false}>
          {guideTypes.map((type) => (
            <Option key={type}>{type}</Option>
          ))}
        </CustomSelect>

        <StyledInput
          height="44px"
          width="270px"
          borderRadius="lg"
          border="input"
          placeholder="Name"
        />
        <StyledInput
          height="44px"
          width="270px"
          borderRadius="lg"
          border="input"
          placeholder="Email"
        />
        <Button width="180px" onClick={() => setOrderClicked(true)}>
          Request
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default EditorTranslationsTab;
