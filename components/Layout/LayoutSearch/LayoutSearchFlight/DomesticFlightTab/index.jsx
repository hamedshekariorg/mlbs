import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { SearchOutlined } from '@ant-design/icons';
import { Radio } from 'antd';
import {
  StyledHorizontal,
  StyledImg,
  StyledVertical,
} from 'components/Common/commonStyles';
import changeIcon from 'public/static/images/changeFlightIcon.svg';
import CityInput from 'components/Common/Search/CityInput';
import DateInput from 'components/Common/Search/DateInput';
import PassengersSelection from 'components/Common/Search/PassengersSelection';
import { StyledRadio } from 'components/Common/Input/style';
import Button from 'components/Common/Button';

const InternationalFlightTab = () => {
  const theme = useTheme();
  const tab = 'flight';
  const [tripType, setTripType] = useState(null);

  return (
    <StyledVertical position="relative">
      <StyledImg
        src={changeIcon}
        position="absolute"
        left="258px"
        top="42px"
        zIndex={theme.zIndices[2]}
      />
      <StyledHorizontal mb="15px">
        <Radio.Group
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        >
          <StyledRadio value={1}>One way</StyledRadio>
          <StyledRadio value={2}>Round trip</StyledRadio>
        </Radio.Group>
      </StyledHorizontal>
      <StyledHorizontal justifyContent="space-between">
        <CityInput placeholder="From" tab={tab} />
        <CityInput placeholder="To" tab={tab} />
        <DateInput tab={tab} type={tripType} />
        <PassengersSelection tab={tab} />
        <Button width="180px">
          <SearchOutlined />
          Search
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default InternationalFlightTab;
