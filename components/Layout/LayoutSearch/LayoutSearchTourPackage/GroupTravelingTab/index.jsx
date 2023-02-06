import {
  StyledHorizontal,
  StyledImg,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import phone from 'public/static/images/phone.svg';

const GroupTravelingTab = () => {
  return (
    <StyledHorizontal
      alignItems="center"
      backgroundColor="gray.0"
      borderRadius="lg"
    >
      <StyledVertical flex={1.5} borderRight="input" ml="129px">
        <StyledSpan textAlign="left">B2B Package</StyledSpan>
        <StyledSpan color="gray.27" maxWidth="389px" fontSize={3}>
          Traveling for company and a group of business man , our customer
          service will be contact you as soon as posible to confirm the
          information. please contact a customer service
        </StyledSpan>
      </StyledVertical>
      <StyledVertical flex={1} alignItems="center">
        <StyledSpan color="blue.10" fontSize={6}>
          <StyledImg src={phone} width="18px" height="18px" mr="8px" mb="7px" />
          <StyledSpan color="red.3">Reserve</StyledSpan> by phone
        </StyledSpan>
        <StyledSpan color="gray.27" mt="4px">
          + 400 51 77 00
        </StyledSpan>

        <StyledSpan color="orange.13" fontSize={2} mt="4px">
          Monday To Friday 9:00am - 7:30pm
        </StyledSpan>
      </StyledVertical>
    </StyledHorizontal>
  );
};

export default GroupTravelingTab;
