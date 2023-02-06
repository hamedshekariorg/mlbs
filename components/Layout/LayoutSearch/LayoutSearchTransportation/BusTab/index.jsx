import {
  StyledHorizontal,
  StyledImg,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import phone from 'public/static/images/phone.svg';

const SeatChangeTab = () => {
  return (
    <StyledHorizontal
      alignItems="center"
      backgroundColor="gray.0"
      borderRadius="lg"
    >
      <StyledHorizontal
        alignItems="center"
        justifyContent="center"
        flex={1}
        borderRight="input"
      >
        <StyledSpan textAlign="center" color="gray.27" fontSize={2} mx="40px">
          Right now the only way to change seats, is through calls, but sometime
          soon you will be able to change seats online
        </StyledSpan>
      </StyledHorizontal>
      <StyledVertical
        alignItems="center"
        justifyContent="space-between"
        flex={2.5}
      >
        <StyledHorizontal mt="12px">
          <StyledImg src={phone} width="18px" height="18px" mr="8px" />
          <StyledSpan fontSize={6} color="red.3">
            Change <StyledSpan color="blue.10">by phone</StyledSpan>
          </StyledSpan>
        </StyledHorizontal>
        <StyledSpan color="gray.15" mb="5px" mt="6px">
          + 400 51 77 00
        </StyledSpan>
        <StyledSpan color="orange.13" fontSize={2}>
          Monday To Friday 9:00am - 7:30pm
        </StyledSpan>
      </StyledVertical>

      <StyledHorizontal
        alignItems="center"
        justifyContent="center"
        flex={1}
        borderLeft="input"
      >
        <StyledSpan
          maxWidth="60%"
          textAlign="center"
          color="blue.15"
          fontSize={8}
          opacity="0.5"
        >
          Online Change Coming Soon
        </StyledSpan>
      </StyledHorizontal>
    </StyledHorizontal>
  );
};

export default SeatChangeTab;
