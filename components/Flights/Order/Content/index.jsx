import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  StyledDiv,
  StyledImg,
  StyledH3,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import {
  StyledPassengerListWrapper,
  StyledCustomButton,
  StyledButton,
} from './style';
import userFilled from 'public/static/images/userFilled.svg';
import PassengerInfo from 'components/Common/Order/PassengerInfo';
import PassengerList from 'components/Common/Order/PassengerList';
import Price from 'components/Common/Order/Price';
import Booking from 'components/Common/Order/Booking';
import InfoCardGrid from 'components/Common/PolicyGrid';
import PassengerModalContent from 'components/Common/Order/PassengerModalContent';
import { StyledModal } from 'components/Common/Modal/style';
import Icon from 'components/Icon';
import { flightPriceCardTestData } from 'utils/flight.utils';
const Content = () => {
  const router = useRouter();
  const { departure, returnFlight } = useSelector((state) => state.flights);

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!departure?.selected || !returnFlight?.selected) router.back();
  }, []);

  return (
    <StyledVertical width="100%" alignItems="center">
      <StyledHorizontal width="100%">
        <StyledH3
          mb={24}
          mt={32}
          fontWeight={6}
          fontSize={18}
          lineHeight="34px"
          color="gray.15"
        >
          Passenger Information
        </StyledH3>
      </StyledHorizontal>

      <StyledHorizontal width="100%" mb="72px">
        <StyledVertical>
          <PassengerInfo />
          <StyledPassengerListWrapper>
            <StyledH3
              mb={0}
              fontWeight={6}
              fontSize={18}
              lineHeight="34px"
              color="gray.15"
            >
              Passenger List
            </StyledH3>
            <StyledCustomButton onClick={() => setIsModalVisible(true)}>
              Former Passenger
            </StyledCustomButton>
          </StyledPassengerListWrapper>
          <PassengerList />
        </StyledVertical>
        <StyledVertical flex={1} alignItems="flex-end">
          <Price priceCart={flightPriceCardTestData} />
          <StyledDiv mt="40px">
            <Booking />
          </StyledDiv>
        </StyledVertical>
      </StyledHorizontal>
      <InfoCardGrid type="flight" />
      <StyledModal
        closeIcon={<Icon name="icon-cancel" color="orange.7" fontSize={16} />}
        footer={
          <StyledButton onClick={() => setIsModalVisible(false)}>
            Select
          </StyledButton>
        }
        width="728px"
        centered
        title={
          <StyledHorizontal alignItems="center">
            <StyledImg
              src={userFilled}
              width="20px"
              height="20px"
              mr="16px"
              alt="passengers"
            />
            <StyledH3
              mt={4}
              fontSize={9}
              fontWeight={5}
              lineHeight="22px"
              color="gray.15"
            >
              Former Passenger
            </StyledH3>
          </StyledHorizontal>
        }
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <PassengerModalContent />
      </StyledModal>
    </StyledVertical>
  );
};

export default Content;
