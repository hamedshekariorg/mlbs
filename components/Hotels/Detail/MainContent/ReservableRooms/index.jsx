import React, { useState } from 'react';
import { StyledDiv } from 'components/Common/commonStyles';
import {
  StyeldHotelCount,
  StyledChip,
  StyledTabPane,
  StyledTabs,
  StyledTabSection,
  StyledTitle,
  StyledContainer,
  StyledOverlayContainer,
  StyledExpandContainer,
  StyledIcon,
} from './style';
import { hotelResultTabItems, sampleHotelCards } from 'utils/hotel.utils';
import HotelCard from './HotelCard';
import { DownOutlined } from '@ant-design/icons';

const ReservableRooms = () => {
  const [all, setAll] = useState(false);
  const [noMeal, setNoMeal] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [lowPrice, setLowPrice] = useState(false);
  const [availability, setAvailability] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const keys = Object.keys(hotelResultTabItems);

  // get a setter and change it's situation
  const toggle = (setter) => {
    setter((prevState) => !prevState);
  };

  return (
    <StyledContainer>
      <StyledDiv display="flex" justifyContent="space-between" mt="72px">
        <StyledTitle>Reservable Rooms</StyledTitle>
        <StyledDiv display="flex" justifyContent="center">
          <StyledChip selected={all} onClick={() => toggle(setAll)}>
            All
          </StyledChip>
          <StyledChip selected={noMeal} onClick={() => toggle(setNoMeal)}>
            No Meal
          </StyledChip>
          <StyledChip selected={breakfast} onClick={() => toggle(setBreakfast)}>
            Breakfast
          </StyledChip>
          <StyledChip selected={lowPrice} onClick={() => toggle(setLowPrice)}>
            Low Price
          </StyledChip>
          <StyledChip
            selected={availability}
            onClick={() => toggle(setAvailability)}
          >
            Availability
          </StyledChip>
        </StyledDiv>
      </StyledDiv>
      <StyeldHotelCount>273 Room Available</StyeldHotelCount>
      <StyledTabSection>
        <StyledTabs defaultActiveKey={keys[0]} type="card" tabBarGutter={0}>
          {keys.map((key) => (
            <StyledTabPane tab={hotelResultTabItems[key].title} key={key} />
          ))}
        </StyledTabs>
      </StyledTabSection>
      <StyledDiv
        overflowY="scroll"
        height={expanded ? '1105px' : '663px'}
        className="container"
      >
        {sampleHotelCards.map(({ id, type, provider, bgColor }) => (
          <HotelCard
            key={id}
            type={type}
            provider={provider}
            bgColor={bgColor}
          />
        ))}
        <StyledOverlayContainer>
          <StyledExpandContainer>
            <StyledIcon fontWeight={3} onClick={() => toggle(setExpanded)}>
              <DownOutlined rotate={expanded && '180'} />
            </StyledIcon>
          </StyledExpandContainer>
        </StyledOverlayContainer>
      </StyledDiv>
    </StyledContainer>
  );
};

export default ReservableRooms;
