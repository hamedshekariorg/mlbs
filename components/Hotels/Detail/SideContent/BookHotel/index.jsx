import React, { useState } from 'react';
import {
  StyledButtonText,
  StyledContainer,
  StyledBookButton,
  StyledExpandingContainer,
  StyledCalendarContainer,
} from './style';
import {
  StyledDiv,
  StyledH3,
  StyledHorizontal,
  StyledSpan,
} from 'components/Common/commonStyles';
import {
  CalendarOutlined,
  DownOutlined,
  HeartFilled,
  HeartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Calendar } from 'antd';
import Quantity from './Quantity';
import Link from 'components/Link';
import Button from 'components/Common/Button';
import { toMonthName } from 'utils/common.utils';
const BookHotel = () => {
  const [favorite, SetFavorite] = useState(false);

  const [isGuestPanelOpen, setIsGuestPanelOpen] = useState(false);
  const [isStartDatePanelOpen, setIsStartDatePanelOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [isEndDatePanelOpen, setIsEndDatePanelOpen] = useState(false);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultsCount, setAdultsCount] = useState(0);

  // the function which runs when the calendar date changes
  const onDateChange = (value, setter) => {
    const dateParts = value.format('YYYY-MM-DD').split('-');
    const year = dateParts[0];
    const month = toMonthName(parseInt(dateParts[1]), 'short');
    const day = dateParts[2];
    setter(`${month} ${day}, ${year}`);
  };
  return (
    <StyledContainer>
      <StyledHorizontal
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <StyledH3 color="blue.10" fontSize={8}>
          ¥146.99{' '}
          <StyledSpan color="gray.21" fontSize={2} fontWeight={3}>
            / 2 Rooms
          </StyledSpan>
        </StyledH3>
        <StyledDiv
          mb="12px"
          mr="10px"
          cursor="pointer"
          fontSize={12}
          color="red.3"
          onClick={() => SetFavorite((prevState) => !prevState)}
        >
          {favorite ? <HeartFilled /> : <HeartOutlined />}
        </StyledDiv>
      </StyledHorizontal>

      <StyledExpandingContainer mb={isStartDatePanelOpen && '6px'}>
        <StyledHorizontal justifyContent="center">
          <StyledDiv
            fontSize={6}
            fontWeight={9}
            color="orange.13"
            ml="12px"
            mt="4px"
          >
            <CalendarOutlined />
          </StyledDiv>
          <StyledH3
            fontSize={3}
            ml="8px"
            mt="7px"
            color={isStartDatePanelOpen ? 'gray.15' : 'orange.13'}
          >
            {isStartDatePanelOpen
              ? selectedStartDate
                ? selectedStartDate
                : 'Start'
              : 'Start'}
          </StyledH3>
        </StyledHorizontal>
        <StyledDiv
          cursor="pointer"
          fontSize={4}
          color="orange.13"
          mr="19px"
          mt="4px"
          onClick={() => setIsStartDatePanelOpen((prevState) => !prevState)}
        >
          <DownOutlined rotate={isStartDatePanelOpen && 180} />
        </StyledDiv>
      </StyledExpandingContainer>

      <StyledCalendarContainer isCalendarPanelOpen={isStartDatePanelOpen}>
        <Calendar
          fullscreen={false}
          onChange={(val) => onDateChange(val, setSelectedStartDate)}
        />
        <Button
          alignSelf="flex-end"
          width="109px"
          height="44px"
          bg="gray.0"
          mr="8px"
          mb="32px"
          color="blue.10"
          fontSize={7}
          onClick={() => setIsStartDatePanelOpen(false)}
        >
          Apply
        </Button>
      </StyledCalendarContainer>

      <StyledExpandingContainer mb={isEndDatePanelOpen && '10px'}>
        <StyledHorizontal justifyContent="center">
          <StyledDiv
            fontSize={6}
            fontWeight={9}
            color="orange.13"
            ml="12px"
            mt="4px"
          >
            <CalendarOutlined />
          </StyledDiv>
          <StyledH3
            fontSize={3}
            ml="8px"
            mt="7px"
            color={isEndDatePanelOpen ? 'gray.15' : 'orange.13'}
          >
            {isEndDatePanelOpen
              ? selectedEndDate
                ? selectedEndDate
                : 'End'
              : 'End'}
          </StyledH3>
        </StyledHorizontal>
        <StyledDiv
          cursor="pointer"
          fontSize={4}
          color="orange.13"
          mr="19px"
          mt="4px"
          onClick={() => setIsEndDatePanelOpen((prevState) => !prevState)}
        >
          <DownOutlined rotate={isEndDatePanelOpen && 180} />
        </StyledDiv>
      </StyledExpandingContainer>

      <StyledCalendarContainer isCalendarPanelOpen={isEndDatePanelOpen}>
        <Calendar
          fullscreen={false}
          onChange={(val) => onDateChange(val, setSelectedEndDate)}
        />
        <Button
          alignSelf="flex-end"
          width="109px"
          height="44px"
          bg="gray.0"
          mr="8px"
          mb="32px"
          color="blue.10"
          fontSize={7}
          onClick={() => setIsEndDatePanelOpen(false)}
        >
          Apply
        </Button>
      </StyledCalendarContainer>

      <StyledExpandingContainer mb={isGuestPanelOpen && '21px'}>
        <StyledHorizontal justifyContent="center">
          <StyledDiv
            fontSize={6}
            fontWeight={9}
            color="orange.13"
            ml="12px"
            mt="4px"
          >
            <UserOutlined />
          </StyledDiv>
          <StyledH3
            fontSize={3}
            ml="8px"
            mt="7px"
            color={isGuestPanelOpen ? 'gray.15' : 'orange.13'}
          >
            {isGuestPanelOpen
              ? `${adultsCount} Adults, ${childrenCount} children`
              : 'Guest'}
          </StyledH3>
        </StyledHorizontal>
        <StyledDiv
          cursor="pointer"
          fontSize={4}
          color="orange.13"
          mr="19px"
          mt="4px"
          onClick={() => setIsGuestPanelOpen((prevState) => !prevState)}
        >
          <DownOutlined rotate={isGuestPanelOpen && 180} />
        </StyledDiv>
      </StyledExpandingContainer>

      <Quantity
        childrenCount={childrenCount}
        setChildrenCount={setChildrenCount}
        adultsCount={adultsCount}
        setAdultsCount={setAdultsCount}
        isGuestPanelOpen={isGuestPanelOpen}
      />

      <Link href="/hotels/order">
        <StyledBookButton>
          <StyledButtonText>Booking</StyledButtonText>
        </StyledBookButton>
      </Link>
      <StyledSpan fontSize={1} color="orange.13" mt="9px">
        No payment in this step
      </StyledSpan>
    </StyledContainer>
  );
};

export default BookHotel;
